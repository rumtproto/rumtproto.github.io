// Restores code blocks to their exact original content.
//
// TL definitions, JSON dumps and sample output must be byte-identical to the
// original: a translator occasionally re-flows them (usually by dropping the
// blank lines that separate groups of TL constructors). This tool copies the
// English fence bodies back into the Russian chunks, leaving prose untouched.
//
// Usage: node tools/fixfences.mjs [--dry]
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const CH = path.join(ROOT, '.extracted', 'chunks');
const RU = path.join(ROOT, '.extracted', 'chunks_ru');
const dry = process.argv.includes('--dry');

/** Split a body into alternating [prose, fence, prose, fence, …] segments. */
function split(md) {
  const parts = [];
  const lines = md.split('\n');
  let buf = [];
  let fence = null;
  for (const line of lines) {
    const t = line.trim();
    const m = t.match(/^(```+|~~~+)/);
    if (fence === null && m) {
      parts.push({ type: 'text', lines: buf });
      buf = [line];
      fence = m[1].slice(0, 3);
      continue;
    }
    if (fence !== null) {
      buf.push(line);
      if (t.startsWith(fence) && buf.length > 1) {
        parts.push({ type: 'code', lines: buf });
        buf = [];
        fence = null;
      }
      continue;
    }
    buf.push(line);
  }
  parts.push({ type: fence === null ? 'text' : 'code', lines: buf });
  return parts;
}

const index = JSON.parse(await readFile(path.join(CH, 'index.json'), 'utf8'));
let fixed = 0;
let files = 0;

for (const p of index) {
  const plan = JSON.parse(await readFile(path.join(CH, p.slug, 'plan.json'), 'utf8'));
  for (const c of plan.chunks) {
    const ruPath = path.join(RU, p.slug, c.file);
    let ru;
    try {
      ru = await readFile(ruPath, 'utf8');
    } catch {
      continue;
    }
    const en = await readFile(path.join(CH, p.slug, c.file), 'utf8');
    const a = split(en).filter((x) => x.type === 'code');
    const b = split(ru);
    const bCode = b.filter((x) => x.type === 'code');
    if (a.length !== bCode.length) {
      console.warn(`  ${p.slug}/${c.file}: ${bCode.length} code blocks, original has ${a.length} — skipped`);
      continue;
    }
    let i = 0;
    let changed = false;
    for (const part of b) {
      if (part.type !== 'code') continue;
      const want = a[i++].lines;
      if (part.lines.join('\n') !== want.join('\n')) {
        part.lines = want;
        changed = true;
        fixed++;
      }
    }
    if (changed) {
      files++;
      if (!dry) await writeFile(ruPath, b.map((x) => x.lines.join('\n')).join('\n'));
    }
  }
}
console.log(`${dry ? 'would restore' : 'restored'} ${fixed} code block(s) in ${files} chunk file(s)`);
