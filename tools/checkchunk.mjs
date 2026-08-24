// Self-check for a single translated chunk: compares the Russian chunk with its
// English source block by block. Used by translators (human or agent) before
// handing a chunk in.
//
// Usage: node tools/checkchunk.mjs <slug> <file.md>
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const [slug, file] = process.argv.slice(2);
if (!slug || !file) {
  console.error('usage: node tools/checkchunk.mjs <slug> <file.md>');
  process.exit(2);
}

const enPath = path.join(ROOT, '.extracted', 'chunks', slug, file);
const ruPath = path.join(ROOT, '.extracted', 'chunks_ru', slug, file);
const en = await readFile(enPath, 'utf8');
let ru;
try {
  ru = await readFile(ruPath, 'utf8');
} catch {
  console.error(`MISSING: ${path.relative(ROOT, ruPath)} has not been written yet`);
  process.exit(1);
}

const { paragraphsOf } = await import('./lib/paras.mjs');

function stats(md, stripMarkers) {
  const src = stripMarkers ? md : md;
  let inFence = false;
  const headings = [];
  let fences = 0;
  for (const line of src.split('\n')) {
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      if (inFence) fences++;
      continue;
    }
    if (inFence) continue;
    const m = t.match(/^(#{1,6})\s+(.*)$/);
    if (m) headings.push(m[1].length);
  }
  const ps = paragraphsOf(src);
  let notes = 0;
  let trans = 0;
  for (const p of ps) {
    if (/^\s*(?:\[@(?:term:[^\]]*|t:\d+)\]\s*)*\[@note\]/.test(p)) notes++;
    else trans++;
  }
  const codeText = [...src.matchAll(/^(```|~~~)[^\n]*\n([\s\S]*?)^\1/gm)].map((m) => m[2]);
  return { headings, fences, trans, notes, total: ps.length, codeText };
}

const a = stats(en);
const b = stats(ru);
const problems = [];

if (a.trans !== b.trans)
  problems.push(`paragraph count differs: English ${a.trans}, Russian ${b.trans} (notes are not counted)`);
if (a.headings.join(',') !== b.headings.join(','))
  problems.push(`heading levels differ: English [${a.headings.join(',')}], Russian [${b.headings.join(',')}]`);
if (a.fences !== b.fences) problems.push(`code fence count differs: English ${a.fences}, Russian ${b.fences}`);
for (let i = 0; i < Math.min(a.codeText.length, b.codeText.length); i++) {
  if (a.codeText[i].trim() !== b.codeText[i].trim()) problems.push(`code block #${i + 1} was modified — it must be copied verbatim`);
}
// A paragraph counts as untranslated only when it still contains ordinary
// English words. Identifiers (snake_case, dotted names, camelCase), code spans
// and product names are supposed to stay in Latin script, so they are removed
// before the check — otherwise a paragraph like "updateMessageExtendedMedia —"
// would be reported forever.
const englishWords = (s) =>
  s
    // literal code/identifiers are meant to stay in English — drop them first,
    // while the <code> wrapper is still there to delimit them
    .replace(/<code>[\s\S]*?<\/code>/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    // single-token emphasis is markup for an identifier or a BNF non-terminal
    // (`<em>lc-ident</em>`), not prose
    .replace(/<em>([^<]*)<\/em>/g, (m, c) => (/\s/.test(c.trim()) ? m : ' '))
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\b[A-Za-z][A-Za-z0-9]*[._][A-Za-z0-9._]*\b/g, ' ')
    .replace(/\b[a-z]+[A-Z][A-Za-z0-9]*\b/g, ' ')
    .replace(/\b(Telegram|Premium|Stars|Business|Passport|Mini|Apps?|Bot|API|TDLib|Fragment|TON|Android|iOS|macOS|Windows|Linux|Web|HTTP|HTTPS|TCP|UDP|JSON|URL|ID|MTProto|TL|SRP|RSA|AES|SHA|E2E|WebSocket|WebSockets|WSS|WS|QR|PFS|GIF|GIFs|USD|EUR|XTR)\b/g, ' ')
    .match(/\b[A-Za-z]{3,}\b/g) || [];

// Some paragraphs of the original are TL declarations or BNF rules typeset as
// prose (line breaks with <br> instead of a code fence). They are code and must
// stay untouched, so they are exempt from the "still English" check.
const codeLike = (s) => {
  const lines = s
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean);
  if (!lines.length) return false;
  const codey = lines.filter((l) => /;\s*$/.test(l) || /::=/.test(l) || /^\/\//.test(l) || /\{[A-Za-z]+:[A-Za-z#]+\}/.test(l)).length;
  return codey / lines.length >= 0.6;
};

const ruParas = paragraphsOf(ru);
let untranslated = 0;
for (let i = 0; i < ruParas.length; i++) {
  if (codeLike(ruParas[i])) continue;
  const w = englishWords(ruParas[i]);
  const cyr = (ruParas[i].match(/[а-яёА-ЯЁ]/g) || []).length;
  if (w.length >= 5 && cyr < w.length) untranslated++;
}
if (untranslated) problems.push(`${untranslated} paragraph(s) still look untranslated (ordinary English words remain)`);

const dupTerms = (() => {
  const t = [...ru.matchAll(/\[@term:([^\]]*)\]/g)].map((m) => m[1]);
  return [...new Set(t.filter((x, i) => t.indexOf(x) !== i))];
})();
if (dupTerms.length) problems.push(`duplicate [@term:] markers inside this chunk: ${dupTerms.join(', ')}`);

console.log(`chunk ${slug}/${file}`);
console.log(`  paragraphs : en ${a.trans}  ru ${b.trans}   notes ${b.notes}   terms ${(ru.match(/\[@term:/g) || []).length}`);
console.log(`  headings   : en [${a.headings.join(',')}]  ru [${b.headings.join(',')}]`);
console.log(`  code fences: en ${a.fences}  ru ${b.fences}`);
if (problems.length) {
  console.log('\nPROBLEMS:');
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('\nOK');
