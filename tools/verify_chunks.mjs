// Verifies translated chunks against sources:
// - every source chunk has a translation with Cyrillic content
// - fenced code blocks are identical between source and translation
// - heading counts roughly match
// Prints a report; exits 1 if anything is missing.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const TR = path.resolve('.translated/chunks');

const manifest = JSON.parse(await readFile(path.join(EX, 'chunk-manifest.json'), 'utf8'));

function fences(s) {
  const out = [];
  const re = /```[^\n]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(s)) !== null) out.push(m[1]);
  return out;
}

let missing = [];
let badCode = [];
let noRus = [];
let headMismatch = [];
let checked = 0;

for (const c of manifest) {
  if (c.name === 'methods') continue;
  const id = c.parts === 1 ? c.name : `${c.name}.part${String(c.part).padStart(2, '0')}`;
  const srcP = path.join(EX, c.chunk);
  const dstP = path.join(TR, id + '.md');
  let src, dst;
  try {
    src = await readFile(srcP, 'utf8');
  } catch {
    continue;
  }
  try {
    dst = await readFile(dstP, 'utf8');
  } catch {
    missing.push(id);
    continue;
  }
  checked++;
  if (!/[а-яА-ЯёЁ]/.test(dst)) {
    noRus.push(id);
    continue;
  }
  const sf = fences(src);
  const df = fences(dst);
  if (sf.length !== df.length || sf.some((b, i) => b !== df[i])) badCode.push(id);
  const sh = (src.match(/^#{1,6} /gm) || []).length;
  const dh = (dst.match(/^#{1,6} /gm) || []).length;
  if (Math.abs(sh - dh) > 1) headMismatch.push(`${id} (${sh} vs ${dh})`);
}

console.log('checked:', checked);
console.log('missing:', missing.length, missing.join(', '));
console.log('no russian:', noRus.length, noRus.join(', '));
console.log('code block diffs:', badCode.length, badCode.join(', '));
console.log('heading mismatches:', headMismatch.length, headMismatch.join(', '));
if (missing.length || noRus.length) process.exit(1);
