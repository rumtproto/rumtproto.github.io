// Builds src/_data/anchors.json: page URL → heading ids of the English original,
// in document order. The build reuses these ids for the translated headings so
// that every `#anchor` link copied from the original still resolves.
//
// Usage: node tools/genanchors.mjs
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const SRC = path.join(ROOT, 'src');

async function walk(dir, ext, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext, base)));
    else if (e.name.endsWith(ext)) out.push(path.relative(base, p).replace(new RegExp(ext.replace('.', '\\.') + '$'), ''));
  }
  return out;
}

const anchors = {};
let total = 0;
let aliasCount = 0;
for (const rel of await walk(EN, '.json')) {
  const meta = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
  if (!meta.anchors || !meta.anchors.length) continue;
  const ids = meta.anchors;
  const guessed = meta.anchorAliases || [];
  const originals = meta.anchorOriginals || [];
  // The markdown gains a synthesized <h1> when the original keeps its title
  // outside the content block, so the two lists are aligned from the end.
  const shift = ids.length - originals.length;
  const aliases = ids.map((id, i) => {
    const set = new Set();
    if (guessed[i] && guessed[i] !== id) set.add(guessed[i]);
    const orig = originals[i - shift];
    if (orig && orig !== id) set.add(orig);
    return [...set];
  });
  aliasCount += aliases.reduce((a, x) => a + x.length, 0);
  anchors['/' + rel + '/'] = { ids, aliases };
  total += ids.length;
}

await mkdir(path.join(SRC, '_data'), { recursive: true });
await writeFile(path.join(SRC, '_data', 'anchors.json'), JSON.stringify(anchors));
console.log(`anchors.json: ${Object.keys(anchors).length} pages, ${total} headings, ${aliasCount} alias anchors`);
