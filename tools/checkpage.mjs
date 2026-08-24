// Checks one finished page in src/ against its English original.
//
// Usage: node tools/checkpage.mjs <path>      e.g. node tools/checkpage.mjs api/config
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf, plain } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const SRC = path.join(ROOT, 'src');

let rel = process.argv[2];
if (!rel) {
  console.error('usage: node tools/checkpage.mjs <path>   (e.g. api/config)');
  process.exit(2);
}
rel = rel.replace(/^\/+|\/+$/g, '').replace(/\.md$/, '');

const en = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
const enMd = await readFile(path.join(EN, rel + '.md'), 'utf8');
const raw = await readFile(path.join(SRC, rel + '.md'), 'utf8');
const body = raw.startsWith('---') ? raw.slice(raw.indexOf('\n---', 3) + 4).replace(/^\n+/, '') : raw;

const problems = [];

const countHeadings = (md) => {
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
  return out;
};
const fences = (md) => [...md.matchAll(/^(```|~~~)[^\n]*\n([\s\S]*?)^\1/gm)].map((m) => m[2].trim());
const linkTargets = (md) =>
  [...(md.match(/\]\(([^)\s]*)\)/g) || []), ...(md.match(/href="([^"]*)"/g) || [])].sort().join('|');

// paragraphs
let trans = 0;
let notes = 0;
for (const p of paragraphsOf(body)) {
  if (/^\s*(?:\[@(?:term:[^\]]*|t:\d+)\]\s*)*\[@note\]/.test(p)) notes++;
  else trans++;
}
if (trans !== en.paragraphs) problems.push(`paragraphs: ${trans} translated, original has ${en.paragraphs}`);

// headings
const hEn = countHeadings(enMd).join(',');
const hRu = countHeadings(body).join(',');
if (hEn !== hRu) problems.push(`heading levels differ:\n    en [${hEn}]\n    ru [${hRu}]`);

// code fences
const fEn = fences(enMd);
const fRu = fences(body);
if (fEn.length !== fRu.length) problems.push(`code fences: ${fRu.length}, original has ${fEn.length}`);
else {
  for (let i = 0; i < fEn.length; i++) {
    if (fEn[i] !== fRu[i]) {
      problems.push(`code block #${i + 1} differs from the original — it must be copied verbatim`);
      break;
    }
  }
}

// links
if (linkTargets(enMd) !== linkTargets(body)) {
  const a = new Set((enMd.match(/\]\(([^)\s]*)\)/g) || []).map((x) => x.slice(2, -1)));
  const b = new Set((body.match(/\]\(([^)\s]*)\)/g) || []).map((x) => x.slice(2, -1)));
  const lost = [...a].filter((x) => !b.has(x)).slice(0, 5);
  const added = [...b].filter((x) => !a.has(x)).slice(0, 5);
  problems.push(`link targets differ${lost.length ? ' — missing: ' + lost.join(', ') : ''}${added.length ? ' — added: ' + added.join(', ') : ''}`);
}

// duplicate term markers
const terms = [...body.matchAll(/\[@term:([^\]]*)\]/g)].map((m) => m[1].trim().toLowerCase());
const dup = [...new Set(terms.filter((t, i) => terms.indexOf(t) !== i))];
if (dup.length) problems.push(`a term is introduced twice on the page: ${dup.join(', ')}`);

// A marker must open its block: the start of a paragraph, of a list item, of a
// table cell or of a quoted line. Anywhere else it would be rendered as text.
for (const line of body.split('\n')) {
  const m = line.match(/\[@(?:note|term:[^\]]*|t:\d+)\]/);
  if (!m) continue;
  const before = line.slice(0, m.index);
  if (/^\s*(?:>\s*)*(?:[-*+]\s+|\d+[.)]\s+)?(?:<t[dh][^>]*>\s*)?$/.test(before)) continue;
  problems.push(`marker ${m[0]} does not open its block: «${line.trim().slice(0, 70)}…»`);
  break;
}

// leftover English
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
      /\b(Telegram|Premium|Stars?|Business|Passport|Mini|Apps?|Bots?|API|TDLib|Fragment|TON|Android|iOS|macOS|Windows|Linux|Web|HTTP|HTTPS|TCP|UDP|JSON|URL|ID|MTProto|TL|SRP|RSA|AES|SHA|WebSockets?|WSS|WS|QR|PFS|GIFs?|USD|EUR|XTR|FAQ)\b/g,
      ' '
    )
    .match(/\b[A-Za-z]{3,}\b/g) || [];
const codeLike = (s) => {
  const lines = s.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]+>/g, '').split('\n').map((x) => x.trim()).filter(Boolean);
  if (!lines.length) return false;
  const codey = lines.filter((l) => /;\s*$/.test(l) || /::=/.test(l) || /^\/\//.test(l) || /\{[A-Za-z]+:[A-Za-z#]+\}/.test(l)).length;
  return codey / lines.length >= 0.6;
};
const leftovers = paragraphsOf(body).filter((p) => {
  if (codeLike(p)) return false;
  const w = englishWords(p);
  const cyr = (p.match(/[а-яёА-ЯЁ]/g) || []).length;
  return w.length >= 5 && cyr < w.length;
});
if (leftovers.length) problems.push(`${leftovers.length} paragraph(s) still look untranslated: «${plain(leftovers[0]).slice(0, 80)}…»`);

console.log(`page /${rel}`);
console.log(`  paragraphs : ${trans} (original ${en.paragraphs})   notes ${notes}   terms ${terms.length}`);
console.log(`  headings   : ${countHeadings(body).length}   code fences: ${fRu.length}`);
if (problems.length) {
  console.log('\nPROBLEMS:');
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('\nOK');
