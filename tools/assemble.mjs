// Assembles translated chunks into finished pages under src/.
//
//   .extracted/chunks/<slug>/NNN.md      English chunk (source)
//   .extracted/chunks_ru/<slug>/NNN.md   Russian chunk (translation)
//                → src/<path>.md
//
// Chunks marked `verbatim` in plan.json (pure code/JSON dumps) are copied from
// the English side unchanged. After writing a page the tool re-renders it and
// checks the paragraph invariant against the English original.
//
// Usage: node tools/assemble.mjs [--only <prefix>] [--force] [--report]
import { mkdir, readFile, writeFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf, plain } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const CH = path.join(ROOT, '.extracted', 'chunks');
const RU = path.join(ROOT, '.extracted', 'chunks_ru');
const SRC = path.join(ROOT, 'src');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const force = args.includes('--force');
const reportOnly = args.includes('--report');

const exists = (p) => access(p).then(() => true).catch(() => false);

function fmEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const cleanInline = (s) =>
  s
    .replace(/\[@(?:t:\d+|term:[^\]]*|note)\]/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/`/g, '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** <meta description>: first substantial paragraph of the page. */
function deriveDescription(md) {
  for (const p of paragraphsOf(md)) {
    if (/^\s*\[@note\]/.test(p)) continue;
    let text = plain(p).replace(/^\s*(?:\[@(?:term:[^\]]*|note|t:\d+)\]\s*)+/, '');
    if (text.length < 25) continue;
    if (text.length > 180) {
      text = text.slice(0, 180);
      text = text.slice(0, text.lastIndexOf(' ')) + '…';
    }
    return text;
  }
  return '';
}

function firstH1(md) {
  let inFence = false;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && /^#\s+/.test(t)) return cleanInline(t.replace(/^#\s+/, ''));
  }
  return null;
}

const index = JSON.parse(await readFile(path.join(CH, 'index.json'), 'utf8'));
const rows = [];

for (const p of index) {
  if (only && !p.page.startsWith(only)) continue;
  const plan = JSON.parse(await readFile(path.join(CH, p.slug, 'plan.json'), 'utf8'));
  const parts = [];
  const missing = [];
  for (const c of plan.chunks) {
    const ruPath = path.join(RU, p.slug, c.file);
    if (c.verbatim && !(await exists(ruPath))) {
      parts.push((await readFile(path.join(CH, p.slug, c.file), 'utf8')).trim());
      continue;
    }
    if (!(await exists(ruPath))) {
      missing.push(c.file);
      continue;
    }
    parts.push((await readFile(ruPath, 'utf8')).trim());
  }

  const en = JSON.parse(await readFile(path.join(EN, p.rel + '.json'), 'utf8'));
  if (missing.length) {
    rows.push({ page: p.page, status: 'incomplete', missing: missing.length, of: plan.chunks.length });
    continue;
  }

  // A term is introduced once per page. Chunks are translated independently, so
  // the same [@term:X] may be set in several of them — keep the first, drop the rest.
  const seenTerms = new Set();
  const body =
    collapseBlankLines(parts.join('\n\n'))
      .trim()
      .replace(/\[@term:([^\]]*)\]\s*/g, (m, term) => {
        const key = term.trim().toLowerCase();
        if (seenTerms.has(key)) return '';
        seenTerms.add(key);
        return m;
      }) + '\n';
  const counts = countParagraphs(body);
  const delta = counts.trans - en.paragraphs;
  const title = firstH1(body) || en.title;
  const description = deriveDescription(body);

  if (!reportOnly && (force || delta === 0)) {
    const fm = [
      '---',
      `title: "${fmEscape(title)}"`,
      `original: "https://core.telegram.org${p.rel === 'faq' ? '' : ''}${p.page}"`.replace(
        'https://core.telegram.org/faq',
        'https://telegram.org/faq'
      ),
      `section: ${en.section}`,
      ...(description ? [`description: "${fmEscape(description)}"`] : []),
      'layout: layout.njk',
      '---',
      '',
      '',
    ].join('\n');
    const dest = path.join(SRC, p.rel + '.md');
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + body);
  }

  rows.push({
    page: p.page,
    status: delta === 0 ? 'ok' : 'drift',
    en: en.paragraphs,
    ru: counts.trans,
    delta,
    notes: counts.notes,
    terms: (body.match(/\[@term:/g) || []).length,
  });
}

/**
 * Squeeze runs of blank lines, but never inside a fenced block: TL dumps use
 * blank lines to group constructors and must stay byte-identical to the original.
 */
function collapseBlankLines(md) {
  const out = [];
  let fence = null;
  let blanks = 0;
  for (const line of md.split('\n')) {
    const t = line.trim();
    const m = t.match(/^(```+|~~~+)/);
    if (fence === null && m) {
      fence = m[1].slice(0, 3);
      out.push(line);
      blanks = 0;
      continue;
    }
    if (fence !== null) {
      out.push(line);
      if (t.startsWith(fence)) fence = null;
      continue;
    }
    if (t === '') {
      blanks++;
      if (blanks > 1) continue;
    } else blanks = 0;
    out.push(line);
  }
  return out.join('\n');
}

function countParagraphs(body) {
  let trans = 0;
  let notes = 0;
  for (const p of paragraphsOf(body)) {
    if (/^\s*(?:\[@(?:term:[^\]]*|t:\d+)\]\s*)*\[@note\]/.test(p) || /^\s*\[@note\]/.test(p)) notes++;
    else trans++;
  }
  return { trans, notes };
}

const ok = rows.filter((r) => r.status === 'ok');
const drift = rows.filter((r) => r.status === 'drift');
const inc = rows.filter((r) => r.status === 'incomplete');
console.log(`assembled: ${ok.length}   drift: ${drift.length}   incomplete: ${inc.length}`);
for (const r of drift) console.log(`  drift ${r.page}: ru=${r.ru} en=${r.en} (${r.delta > 0 ? '+' : ''}${r.delta})`);
for (const r of inc.slice(0, 40)) console.log(`  incomplete ${r.page}: ${r.missing}/${r.of} chunks missing`);
