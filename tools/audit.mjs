// Full-site audit: page set, navigation, paragraph coverage, label hygiene.
//
// Every mirrored page must be a faithful, paragraph-for-paragraph translation of
// its English counterpart, so the invariant checked here is simple and strict:
//
//     number of <p> on the Russian page, excluding [@note] paragraphs
//         ==  number of <p> on the English original
//
// When that holds, the build-time numbering in eleventy.config.mjs assigns every
// paragraph the same number the mirror uses, and every [@t:N] link resolves to
// the matching paragraph of the original.
//
// Usage: node tools/audit.mjs [--json out.json] [--only <prefix>] [--refs] [--quiet]
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf, plain } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const EN = path.join(ROOT, '.extracted', 'en');

const args = process.argv.slice(2);
const opt = (n) => {
  const i = args.indexOf(n);
  return i === -1 ? null : args[i + 1];
};
const only = opt('--only');
const jsonOut = opt('--json');
const quiet = args.includes('--quiet');
const withRefs = args.includes('--refs');

async function walk(dir, ext, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext, base)));
    else if (e.name.endsWith(ext)) out.push(path.relative(base, p).replace(new RegExp(ext.replace('.', '\\.') + '$'), ''));
  }
  return out;
}

export function frontMatter(text) {
  if (!text.startsWith('---')) return { raw: '', fm: {}, body: text };
  const end = text.indexOf('\n---', 3);
  if (end === -1) return { raw: '', fm: {}, body: text };
  const raw = text.slice(4, end);
  const body = text.slice(end + 4).replace(/^\n/, '');
  const fm = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^([a-zA-Z_]+):\s*([\s\S]*)$/);
    if (m) fm[m[1]] = m[2].replace(/^"(.*)"$/, '$1').trim();
  }
  return { raw, fm, body };
}

/** Count <p> a markdown body renders to, split into translated vs note. */
export function countParagraphs(body) {
  const html = paragraphsOf(body);
  let trans = 0;
  let notes = 0;
  const explicit = [];
  for (const p of html) {
    const m = p.match(/^\s*((?:\[@(?:note|term:[^\]]*|t:\d+)\]\s*)+)/);
    const markers = m ? m[1] : '';
    if (/\[@note\]/.test(markers)) notes++;
    else {
      trans++;
      const t = markers.match(/\[@t:(\d+)\]/);
      if (t) explicit.push(+t[1]);
    }
  }
  return { trans, notes, explicit, total: html.length };
}

const OWN = new Set(['index', 'search', '404', 'sitemap', 'robots']);
const srcPages = (await walk(SRC, '.md')).filter((p) => !OWN.has(p));
const enPages = await walk(EN, '.json');
const enSet = new Set(enPages);
const srcSet = new Set(srcPages);

const report = { pages: [], summary: {} };
const missingPages = enPages.filter((p) => !srcSet.has(p));
const orphanPages = srcPages.filter((p) => !enSet.has(p));

const STUB = 'Перевод этой страницы ещё не готов';
let stubs = 0;
let untranslated = 0;
let issues = 0;

for (const rel of srcPages) {
  if (only && !('/' + rel).startsWith(only)) continue;
  if (!enSet.has(rel)) continue;
  const isRef = /^(constructor|method|type)\//.test(rel);
  if (isRef && !withRefs) continue;

  const text = await readFile(path.join(SRC, rel + '.md'), 'utf8');
  const { fm, body } = frontMatter(text);
  const en = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));

  const stub = text.includes(STUB);
  if (stub) stubs++;
  const c = countParagraphs(body);

  // Language check. Identifiers, code and product names are supposed to stay in
  // Latin script, so they are removed before measuring how much English prose is
  // left — otherwise a page that is mostly TL identifiers would look untranslated.
  const prose = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<code>[\s\S]*?<\/code>/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\b[A-Za-z][A-Za-z0-9]*[._][A-Za-z0-9._]*\b/g, ' ')
    .replace(/\b[a-z]+[A-Z][A-Za-z0-9]*\b/g, ' ')
    .replace(/\b[A-Z][A-Z0-9_]{2,}\b/g, ' ')
    .replace(
      /\b(Telegram|Premium|Stars?|Business|Passport|Mini|Apps?|Bots?|API|TDLib|Fragment|TON|Android|iOS|macOS|Windows|Linux|Web|HTTP|HTTPS|TCP|UDP|JSON|URL|ID|MTProto|TL|SRP|RSA|AES|SHA|WebSockets?|WSS|WS|QR|PFS|GIFs?|USD|EUR|XTR|FAQ)\b/g,
      ' '
    );
  const cyr = (prose.match(/[а-яёА-ЯЁ]/g) || []).length;
  const lat = (prose.match(/[a-zA-Z]{3,}/g) || []).join('').length;
  const ruShare = cyr + lat === 0 ? 1 : cyr / (cyr + lat);
  if (ruShare < 0.5) untranslated++;

  const terms = [...body.matchAll(/\[@term:([^\]]*)\]/g)].map((m) => m[1]);
  const dupTerms = [...new Set(terms.filter((t, i) => terms.indexOf(t) !== i))];

  const delta = c.trans - en.paragraphs;
  const entry = {
    page: '/' + rel,
    section: fm.section || en.section,
    title: fm.title || '',
    stub,
    en: en.paragraphs,
    ru: c.trans,
    delta,
    notes: c.notes,
    terms: terms.length,
    dupTerms,
    ruShare: +ruShare.toFixed(2),
    headings: { en: en.headings, ru: countHeadings(body) },
  };
  entry.ok = !stub && delta === 0 && !dupTerms.length && ruShare >= 0.5 && entry.headings.en === entry.headings.ru;
  if (!entry.ok) issues++;
  report.pages.push(entry);
}

function countHeadings(md) {
  let inF = false;
  let n = 0;
  for (const l of md.split('\n')) {
    const t = l.trim();
    if (/^(```|~~~)/.test(t)) {
      inF = !inF;
      continue;
    }
    if (!inF && /^#{1,6}\s/.test(t)) n++;
  }
  return n;
}
function countFences(md) {
  return (md.match(/^```/gm) || []).length / 2;
}

report.summary = {
  srcPages: srcPages.length,
  enPages: enPages.length,
  missingPages,
  orphanPages,
  audited: report.pages.length,
  stubs,
  untranslated,
  issues,
  clean: report.pages.length - issues,
};

if (jsonOut) await writeFile(jsonOut, JSON.stringify(report, null, 1));

if (!quiet) {
  const s = report.summary;
  console.log('=== page set ===');
  console.log(`src: ${s.srcPages}   en: ${s.enPages}   missing in src: ${s.missingPages.length}   not in backup: ${s.orphanPages.length}`);
  if (s.missingPages.length) console.log('  missing:', s.missingPages.slice(0, 15).join(', '));
  if (s.orphanPages.length) console.log('  orphan :', s.orphanPages.slice(0, 15).join(', '));
  console.log('\n=== translation ===');
  console.log(`audited: ${s.audited}   clean: ${s.clean}   issues: ${s.issues}   stubs: ${s.stubs}   mostly-English: ${s.untranslated}`);
  const bad = report.pages.filter((p) => !p.ok);
  console.log('\npage                                          en    ru  Δpara  notes  terms  ru%  h(en/ru)');
  for (const p of bad.slice(0, 60)) {
    console.log(
      `${(p.page + (p.stub ? ' [stub]' : '')).padEnd(44)} ${String(p.en).padStart(4)} ${String(p.ru).padStart(5)} ` +
        `${String(p.delta).padStart(6)} ${String(p.notes).padStart(6)} ${String(p.terms).padStart(6)} ` +
        `${String(p.ruShare).padStart(5)}  ${p.headings.en}/${p.headings.ru}` +
        (p.dupTerms.length ? '  dupTerms: ' + p.dupTerms.join(',') : '')
    );
  }
  if (bad.length > 60) console.log(`… and ${bad.length - 60} more`);
}
