// Splits unique reference strings into translation batches (~45KB of source text each).
// Writes .extracted/batches/batchNN.json (array of English strings) and batch-manifest.json.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const OUT = path.join(EX, 'batches');
const MAX = 45 * 1024;

async function main() {
  await mkdir(OUT, { recursive: true });
  const strings = JSON.parse(await readFile(path.join(EX, 'refstrings.json'), 'utf8'));
  const batches = [];
  let cur = [];
  let len = 0;
  for (const s of strings) {
    cur.push(s);
    len += s.length + 10;
    if (len >= MAX) {
      batches.push(cur);
      cur = [];
      len = 0;
    }
  }
  if (cur.length) batches.push(cur);
  const manifest = [];
  for (let i = 0; i < batches.length; i++) {
    const id = `batch${String(i + 1).padStart(2, '0')}`;
    await writeFile(path.join(OUT, id + '.json'), JSON.stringify(batches[i], null, 1));
    manifest.push({ id, file: `batches/${id}.json`, count: batches[i].length, chars: batches[i].reduce((a, s) => a + s.length, 0) });
  }
  await writeFile(path.join(EX, 'batch-manifest.json'), JSON.stringify(manifest, null, 1));
  console.log('batches:', manifest.length, 'strings:', strings.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
