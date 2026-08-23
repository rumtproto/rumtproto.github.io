// Splits extracted prose markdown into translation chunks (~30KB max),
// breaking at markdown headings. Writes .extracted/chunks/*.md and a manifest.
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const PROSE = path.resolve('.extracted/prose');
const CHUNKS = path.resolve('.extracted/chunks');
const MAX = 30 * 1024;

function chunkMd(md) {
  if (md.length <= MAX) return [md];
  const lines = md.split('\n');
  const parts = [];
  let cur = [];
  let curLen = 0;
  const flush = () => {
    if (cur.length) {
      parts.push(cur.join('\n'));
      cur = [];
      curLen = 0;
    }
  };
  for (const line of lines) {
    const isHead = /^#{1,4} /.test(line) && curLen > MAX * 0.5;
    const isTableBreak = false;
    if ((isHead || isTableBreak) && curLen >= MAX * 0.6) flush();
    cur.push(line);
    curLen += line.length + 1;
    if (curLen >= MAX && !line.startsWith('|')) flush();
  }
  flush();
  return parts;
}

async function main() {
  await mkdir(CHUNKS, { recursive: true });
  const manifest = [];
  const files = (await readdir(PROSE)).filter((f) => f.endsWith('.md')).sort();
  for (const f of files) {
    const md = await readFile(path.join(PROSE, f), 'utf8');
    const name = f.replace(/\.md$/, '');
    const parts = chunkMd(md);
    parts.forEach((p, i) => {
      const id = parts.length === 1 ? name : `${name}.part${String(i + 1).padStart(2, '0')}`;
      manifest.push({ id, name, part: i + 1, parts: parts.length, chunk: `chunks/${id}.md` });
    });
    for (let i = 0; i < parts.length; i++) {
      const id = parts.length === 1 ? name : `${name}.part${String(i + 1).padStart(2, '0')}`;
      await writeFile(path.join(CHUNKS, id + '.md'), parts[i]);
    }
  }
  await writeFile(path.resolve('.extracted/chunk-manifest.json'), JSON.stringify(manifest, null, 1));
  const total = manifest.length;
  console.log('chunks:', total, 'from', files.length, 'pages');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
