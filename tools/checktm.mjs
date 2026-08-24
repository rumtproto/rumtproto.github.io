// Validates one translated batch of the reference translation memory.
//
// Usage: node tools/checktm.mjs <NNN>
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const TM = path.join(ROOT, '.extracted', 'tm');
const arg = process.argv[2];
if (!arg) {
  console.error('usage: node tools/checktm.mjs <NNN>');
  process.exit(2);
}
const name = /\.json$/.test(arg) ? arg : String(arg).padStart(3, '0') + '.json';

const src = JSON.parse(await readFile(path.join(TM, 'in', name), 'utf8'));
let out;
try {
  out = JSON.parse(await readFile(path.join(TM, 'out', name), 'utf8'));
} catch (e) {
  console.error(`MISSING or invalid JSON: .extracted/tm/out/${name} (${e.message})`);
  process.exit(1);
}

const problems = [];
const tags = (s) => (s.match(/<\/?[a-zA-Z][^>]*>/g) || []).map((t) => t.replace(/\s+/g, ' '));
const hrefs = (s) => [
  ...(s.match(/href="([^"]*)"/g) || []),
  ...(s.match(/\]\(([^)]*)\)/g) || []),
];
const codes = (s) => [...(s.match(/<code>([\s\S]*?)<\/code>/g) || []), ...(s.match(/`[^`]+`/g) || [])];

// Identifiers, product names and abbreviations legitimately stay in Latin script.
const englishWords = (s) =>
  s
    .replace(/<code>[\s\S]*?<\/code>/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\b[A-Za-z][A-Za-z0-9]*[._][A-Za-z0-9._]*\b/g, ' ')
    .replace(/\b[a-z]+[A-Z][A-Za-z0-9]*\b/g, ' ')
    .replace(/\b[A-Z][A-Z0-9_]{2,}\b/g, ' ')
    .replace(
      /\b(Telegram|Premium|Stars?|Business|Passport|Mini|Apps?|Bot|API|TDLib|Fragment|TON|Android|iOS|macOS|Windows|Linux|Web|HTTP|HTTPS|TCP|UDP|JSON|URL|ID|MTProto|TL|SRP|RSA|AES|SHA|WebSockets?|WSS|WS|QR|PFS|GIFs?|USD|EUR|XTR|Vector|Bool|int|long|double|string|bytes|true|false|null)\b/g,
      ' '
    )
    .match(/\b[A-Za-z]{3,}\b/g) || [];

for (const s of src) {
  const t = out[s.id];
  if (t === undefined) {
    problems.push(`${s.id}: missing translation`);
    continue;
  }
  if (typeof t !== 'string' || !t.trim()) {
    problems.push(`${s.id}: empty translation`);
    continue;
  }
  const a = tags(s.text);
  const b = tags(t);
  if (a.join('|') !== b.join('|')) {
    problems.push(`${s.id}: HTML tags changed (${a.length} → ${b.length}); tags must be copied exactly`);
    continue;
  }
  const ha = hrefs(s.text).join('|');
  const hb = hrefs(t).join('|');
  if (ha !== hb) {
    problems.push(`${s.id}: link targets changed — addresses must stay identical`);
    continue;
  }
  const ca = codes(s.text).join('|');
  const cb = codes(t).join('|');
  if (ca !== cb) {
    problems.push(`${s.id}: code spans changed — text in <code>/backticks must be copied exactly`);
    continue;
  }
  const w = englishWords(t);
  const cyr = (t.match(/[а-яёА-ЯЁ]/g) || []).length;
  if (w.length >= 4 && cyr < w.length) {
    problems.push(`${s.id}: still English — «${t.slice(0, 70)}…»`);
  }
}
const extra = Object.keys(out).filter((k) => !src.some((s) => s.id === k));
if (extra.length) problems.push(`unknown ids in output: ${extra.slice(0, 5).join(', ')}`);

console.log(`batch ${name}: ${src.length} strings, ${Object.keys(out).length} translated`);
if (problems.length) {
  console.log('\nPROBLEMS:');
  for (const p of problems.slice(0, 40)) console.log('  - ' + p);
  if (problems.length > 40) console.log(`  … and ${problems.length - 40} more`);
  process.exit(1);
}
console.log('\nOK');
