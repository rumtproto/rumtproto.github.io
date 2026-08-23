// Repairs translated chunks: any fenced code block that differs from the source
// fence is restored verbatim from the source — UNLESS the fence actually contains
// markdown list items (malformed fences around changelog prose).
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const TR = path.resolve('.translated/chunks');

function splitFences(s) {
  // returns array of segments {text, isFence}
  const re = /```[^\n]*\n[\s\S]*?```/g;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(s)) !== null) {
    out.push({ text: s.slice(last, m.index), isFence: false });
    out.push({ text: m[0], isFence: true });
    last = m.index + m[0].length;
  }
  out.push({ text: s.slice(last), isFence: false });
  return out;
}

function fenceBody(fence) {
  return fence.replace(/^```[^\n]*\n/, '').replace(/```$/, '');
}

function hasList(body) {
  return /^\s*[-*]\s+/m.test(body);
}

const manifest = JSON.parse(await readFile(path.join(EX, 'chunk-manifest.json'), 'utf8'));
let fixedFiles = 0;
let fixedFences = 0;

for (const c of manifest) {
  if (c.name === 'methods') continue;
  const id = c.parts === 1 ? c.name : `${c.name}.part${String(c.part).padStart(2, '0')}`;
  let src, dst;
  try {
    src = await readFile(path.join(EX, c.chunk), 'utf8');
    dst = await readFile(path.join(TR, id + '.md'), 'utf8');
  } catch {
    continue;
  }
  const ss = splitFences(src);
  const ds = splitFences(dst);
  const sf = ss.filter((x) => x.isFence);
  const df = ds.filter((x) => x.isFence);
  if (sf.length !== df.length) continue; // can't align; leave for manual check
  let changed = false;
  for (let i = 0; i < sf.length; i++) {
    if (sf[i].text === df[i].text) continue;
    const body = fenceBody(sf[i].text);
    if (hasList(body)) continue; // prose-like fence: keep translation
    df[i].text = sf[i].text;
    changed = true;
    fixedFences++;
  }
  if (changed) {
    await writeFile(path.join(TR, id + '.md'), ds.map((x) => x.text).join(''));
    fixedFiles++;
  }
}
console.log('fixed fences:', fixedFences, 'in', fixedFiles, 'files');
