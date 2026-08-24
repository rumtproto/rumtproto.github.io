// Splits the reference translation memory into batches for translators.
//
//   .extracted/tm/in/NNN.json   [{ id, kind, n, text }, …]  (English, to translate)
//   .extracted/tm/out/NNN.json  { id: "перевод", … }        (written by the translator)
//
// Usage: node tools/tmbatches.mjs [--max 8000]
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const TM = path.join(ROOT, '.extracted', 'tm');
const args = process.argv.slice(2);
const MAX = args.includes('--max') ? +args[args.indexOf('--max') + 1] : 8000;

const keys = JSON.parse(await readFile(path.join(TM, 'keys.json'), 'utf8'));
// stable ids, independent of ordering changes
const withIds = keys.map((k, i) => ({ id: 's' + String(i).padStart(5, '0'), ...k }));
await writeFile(path.join(TM, 'index.json'), JSON.stringify(withIds, null, 1));

await rm(path.join(TM, 'in'), { recursive: true, force: true });
await mkdir(path.join(TM, 'in'), { recursive: true });
await mkdir(path.join(TM, 'out'), { recursive: true });

const batches = [];
let cur = [];
let len = 0;
for (const k of withIds) {
  // one very long string gets a batch of its own
  if (cur.length && (len + k.text.length > MAX || cur.length >= 60)) {
    batches.push(cur);
    cur = [];
    len = 0;
  }
  cur.push({ id: k.id, kind: k.kind, n: k.n, text: k.text });
  len += k.text.length;
}
if (cur.length) batches.push(cur);

for (let i = 0; i < batches.length; i++) {
  const name = String(i).padStart(3, '0') + '.json';
  await writeFile(path.join(TM, 'in', name), JSON.stringify(batches[i], null, 1));
}
console.log(`batches: ${batches.length}  strings: ${withIds.length}  max chars/batch: ${MAX}`);
