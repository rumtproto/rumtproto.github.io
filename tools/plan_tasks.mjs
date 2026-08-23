// Builds .extracted/tasks.json: translation task list for subagents.
// - prose tasks: groups of chunks (all parts of a page stay together), <= ~52KB input each
// - batch tasks: one per string batch
import { readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const MAX_CHARS = 52 * 1024;

async function main() {
  const chunks = JSON.parse(await readFile(path.join(EX, 'chunk-manifest.json'), 'utf8'));
  const batches = JSON.parse(await readFile(path.join(EX, 'batch-manifest.json'), 'utf8'));

  // group chunks by page name, preserving order
  const byPage = new Map();
  for (const c of chunks) {
    if (c.name === 'methods') continue; // regenerated programmatically from string translations
    if (!byPage.has(c.name)) byPage.set(c.name, []);
    byPage.get(c.name).push(c);
  }

  const tasks = [];
  let cur = { type: 'prose', files: [], chars: 0, pages: [] };
  const flush = () => {
    if (cur.files.length) {
      tasks.push(cur);
      cur = { type: 'prose', files: [], chars: 0, pages: [] };
    }
  };
  for (const [name, pageChunks] of byPage) {
    let pageChars = 0;
    for (const c of pageChunks) {
      c.chars = (await stat(path.join(EX, c.chunk))).size;
      pageChars += c.chars;
    }
    if (pageChars > MAX_CHARS && cur.files.length) flush();
    if (pageChars > MAX_CHARS) {
      // page alone exceeds cap: split its parts across tasks
      for (const c of pageChunks) {
        if (cur.chars + c.chars > MAX_CHARS) flush();
        cur.files.push(c);
        cur.chars += c.chars;
        if (!cur.pages.includes(name)) cur.pages.push(name);
      }
      flush();
      continue;
    }
    if (cur.chars + pageChars > MAX_CHARS) flush();
    for (const c of pageChunks) cur.files.push(c);
    cur.chars += pageChars;
    cur.pages.push(name);
  }
  flush();

  tasks.forEach((t, i) => (t.id = `prose-${String(i + 1).padStart(2, '0')}`));

  for (const b of batches) {
    tasks.push({ id: `ref-${b.id}`, type: 'batch', file: b.file, chars: b.chars, count: b.count });
  }

  await writeFile(path.join(EX, 'tasks.json'), JSON.stringify(tasks, null, 1));
  const prose = tasks.filter((t) => t.type === 'prose');
  const refs = tasks.filter((t) => t.type === 'batch');
  console.log('prose tasks:', prose.length, '(chunks:', prose.reduce((a, t) => a + t.files.length, 0), ')');
  console.log('batch tasks:', refs.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
