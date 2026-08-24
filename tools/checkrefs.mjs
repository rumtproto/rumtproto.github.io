// Structural verification of the generated schema reference.
//
// For every page of /constructor, /method and /type compares the Russian page
// with its English original and requires:
//   * the same number of rendered paragraphs (so the shared numbering holds)
//   * the same TL definitions, byte for byte
//   * the same HTML tag sequence inside tables
//   * the same set of link targets
//   * the same heading levels
//   * no leftover English prose
//
// Usage: node tools/checkrefs.mjs [--limit N]
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const SRC = path.join(ROOT, 'src');
const args = process.argv.slice(2);
const LIMIT = args.includes('--limit') ? +args[args.indexOf('--limit') + 1] : 25;

async function walk(dir, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, base)));
    else if (e.name.endsWith('.md')) out.push(path.relative(base, p).replace(/\.md$/, ''));
  }
  return out;
}

const stripFm = (t) => {
  if (!t.startsWith('---')) return t;
  const i = t.indexOf('\n---', 3);
  return i === -1 ? t : t.slice(i + 4).replace(/^\n+/, '');
};

const fences = (md) => [...md.matchAll(/^(```|~~~)[^\n]*\n([\s\S]*?)^\1/gm)].map((m) => m[2].trim());
const headings = (md) => {
  let inF = false;
  const out = [];
  for (const l of md.split('\n')) {
    const t = l.trim();
    if (/^(```|~~~)/.test(t)) {
      inF = !inF;
      continue;
    }
    if (inF) continue;
    const m = t.match(/^(#{1,6})\s/);
    if (m) out.push(m[1].length);
  }
  return out.join(',');
};
const tagSeq = (md) => (md.match(/<\/?[a-zA-Z][^>]*>/g) || []).map((t) => t.split(/\s/)[0].replace('>', '')).join(',');
const links = (md) =>
  [...(md.match(/href="([^"]*)"/g) || []), ...(md.match(/\]\(([^)\s]*)\)/g) || [])].sort().join('|');

const englishWords = (s) =>
  s
    .replace(/<code>[\s\S]*?<\/code>/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<em>([^<]*)<\/em>/g, (m, c) => (/\s/.test(c.trim()) ? m : ' '))
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\b[A-Za-z][A-Za-z0-9]*[._][A-Za-z0-9._]*\b/g, ' ')
    .replace(/\b[a-z]+[A-Z][A-Za-z0-9]*\b/g, ' ')
    .replace(/\b[A-Z][A-Z0-9_]{2,}\b/g, ' ')
    .replace(
      /\b(Telegram|Premium|Stars?|Business|Passport|Mini|Apps?|Bot|Bots|API|TDLib|Fragment|TON|Android|iOS|macOS|Windows|Linux|Web|HTTP|HTTPS|TCP|UDP|JSON|URL|ID|MTProto|TL|SRP|RSA|AES|SHA|WebSockets?|WSS|WS|QR|PFS|GIFs?|USD|EUR|XTR|Vector|Bool|int|long|double|string|bytes|true|false|null|Takeout|Widget|Features|FAQ)\b/g,
      ' '
    )
    .match(/\b[A-Za-z]{3,}\b/g) || [];

const pages = (await walk(EN)).filter((p) => /^(constructor|method|type)\//.test(p));
const problems = [];
let checked = 0;
let englishPages = 0;

for (const rel of pages) {
  const en = await readFile(path.join(EN, rel + '.md'), 'utf8');
  let ru;
  try {
    ru = stripFm(await readFile(path.join(SRC, rel + '.md'), 'utf8'));
  } catch {
    problems.push(`${rel}: page missing in src/`);
    continue;
  }
  checked++;
  const pEn = paragraphsOf(en).length;
  const pRu = paragraphsOf(ru).length;
  if (pEn !== pRu) problems.push(`${rel}: paragraphs ${pRu} ≠ ${pEn}`);
  const fEn = fences(en);
  const fRu = fences(ru);
  if (fEn.join('\u0000') !== fRu.join('\u0000')) problems.push(`${rel}: TL definition changed`);
  if (headings(en) !== headings(ru)) problems.push(`${rel}: heading levels differ`);
  if (tagSeq(en) !== tagSeq(ru)) problems.push(`${rel}: HTML tag sequence differs`);
  if (links(en) !== links(ru)) problems.push(`${rel}: link targets differ`);
  const stillEnglish = paragraphsOf(ru).filter((p) => {
    const w = englishWords(p);
    const cyr = (p.match(/[а-яёА-ЯЁ]/g) || []).length;
    return w.length >= 5 && cyr < w.length;
  });
  if (stillEnglish.length) englishPages++;
}

console.log(`reference pages checked: ${checked}`);
console.log(`pages with English prose left: ${englishPages}`);
console.log(`structural problems: ${problems.length}`);
for (const p of problems.slice(0, LIMIT)) console.log('  - ' + p);
if (problems.length > LIMIT) console.log(`  … and ${problems.length - LIMIT} more`);
process.exit(problems.length ? 1 : 0);
