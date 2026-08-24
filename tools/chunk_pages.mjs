// Splits every English article page into translation chunks.
//
//   .extracted/chunks/<slug>/NN.md     chunk source (English)
//   .extracted/chunks/<slug>/plan.json chunk list + paragraph budget per chunk
//   .extracted/chunks/index.json       all pages, with per-page totals
//
// Chunks never cut through a fenced code block, an HTML table or a list, so a
// translator can work on one chunk without seeing the rest of the page. Chunks
// that contain no translatable prose (pure JSON/TL dumps) are marked
// `verbatim: true` and are copied unchanged by tools/assemble.mjs.
//
// Usage: node tools/chunk_pages.mjs [--max 9000]
import { mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const OUT = path.join(ROOT, '.extracted', 'chunks');
const args = process.argv.slice(2);
const MAX = args.includes('--max') ? +args[args.indexOf('--max') + 1] : 9000;

async function walk(dir, ext, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext, base)));
    else if (e.name.endsWith(ext)) out.push(path.relative(base, p).replace(new RegExp(ext.replace('.', '\\.') + '$'), ''));
  }
  return out;
}

/** Split markdown into top-level blocks, keeping fences/tables/lists intact. */
function topBlocks(md) {
  const lines = md.split('\n');
  const out = [];
  let buf = [];
  let inFence = false;
  let fenceMark = '';
  const flush = () => {
    if (buf.join('\n').trim()) out.push(buf.join('\n'));
    buf = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    const fm = t.match(/^(```+|~~~+)/);
    if (!inFence && fm) {
      flush();
      inFence = true;
      fenceMark = fm[1];
      buf.push(line);
      continue;
    }
    if (inFence) {
      buf.push(line);
      if (t.startsWith(fenceMark.slice(0, 3)) && t.length >= 3 && buf.length > 1) {
        inFence = false;
        flush();
      }
      continue;
    }
    // Only an ASCII-blank line separates blocks. A line that holds a non-breaking
    // space is *content* in the original and keeps a list item together.
    if (/^[ \t]*$/.test(line)) {
      flush();
      continue;
    }
    buf.push(line);
  }
  flush();
  return out;
}

/** Merge blocks that belong together (list items separated by blank lines, tables). */
function groupBlocks(blocks) {
  const out = [];
  for (const b of blocks) {
    const t = b.trim();
    const prev = out[out.length - 1];
    const isListItem = /^(\s*)([-*+]|\d+[.)])\s/.test(t);
    const isIndented = /^\s{2,}\S/.test(b);
    const prevIsList = prev && /^(\s*)([-*+]|\d+[.)])\s/.test(prev.trim());
    const isTableRow = /^<\/?(table|thead|tbody|tr|td|th)/i.test(t);
    const prevOpenTable = prev && /<table/i.test(prev) && !/<\/table>/i.test(prev);
    if (prev && ((isListItem && prevIsList) || (isIndented && prevIsList) || isTableRow || prevOpenTable)) {
      out[out.length - 1] = prev + '\n\n' + b;
    } else out.push(b);
  }
  return out;
}

// A chunk is translatable when something outside its fenced code blocks is
// actual prose. Fences are detected line-wise (a ``` inside a JSON string on a
// content line is not a fence), so huge machine-readable dumps stay verbatim.
const hasProse = (s) =>
  topBlocks(s)
    .filter((b) => !/^(```|~~~)/.test(b.trim()))
    .some((b) => /[A-Za-z]{3}/.test(b));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const pages = (await walk(EN, '.json')).filter((p) => !/^(constructor|method|type)\//.test(p));
const index = [];

for (const rel of pages) {
  const md = await readFile(path.join(EN, rel + '.md'), 'utf8');
  const meta = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
  const groups = groupBlocks(topBlocks(md));

  const chunks = [];
  let cur = [];
  let curLen = 0;
  const push = () => {
    if (!cur.length) return;
    chunks.push(cur.join('\n\n'));
    cur = [];
    curLen = 0;
  };
  for (const g of groups) {
    // A large code block (TL schema, JSON dump, sample output) carries no prose:
    // isolate it so it becomes a verbatim chunk instead of bloating a text chunk.
    if (/^(```|~~~)/.test(g.trim()) && g.length > 1500) {
      push();
      chunks.push(g);
      continue;
    }
    // a heading starts a new chunk when the current one is already substantial
    if (/^#{1,3}\s/.test(g.trim()) && curLen > MAX * 0.55) push();
    if (curLen && curLen + g.length > MAX) push();
    cur.push(g);
    curLen += g.length + 2;
    if (curLen > MAX * 1.6) push();
  }
  push();

  const slug = rel.replace(/\//g, '__');
  const dir = path.join(OUT, slug);
  await mkdir(dir, { recursive: true });
  const plan = [];
  for (let i = 0; i < chunks.length; i++) {
    const name = String(i).padStart(3, '0') + '.md';
    await writeFile(path.join(dir, name), chunks[i] + '\n');
    plan.push({
      file: name,
      chars: chunks[i].length,
      paragraphs: paragraphsOf(chunks[i]).length,
      verbatim: !hasProse(chunks[i]),
    });
  }
  await writeFile(
    path.join(dir, 'plan.json'),
    JSON.stringify({ page: '/' + rel, rel, slug, title: meta.title, section: meta.section, paragraphs: meta.paragraphs, chunks: plan }, null, 1)
  );
  index.push({
    rel,
    slug,
    page: '/' + rel,
    title: meta.title,
    section: meta.section,
    paragraphs: meta.paragraphs,
    chunks: plan.length,
    translatable: plan.filter((c) => !c.verbatim).length,
    chars: md.length,
    proseChars: plan.filter((c) => !c.verbatim).reduce((a, c) => a + c.chars, 0),
  });
}

await writeFile(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));

const totals = index.reduce(
  (a, p) => ({ chunks: a.chunks + p.chunks, tr: a.tr + p.translatable, prose: a.prose + p.proseChars }),
  { chunks: 0, tr: 0, prose: 0 }
);
console.log(`pages: ${index.length}  chunks: ${totals.chunks}  translatable: ${totals.tr}  prose: ${Math.round(totals.prose / 1024)} KB`);

// paragraph-budget sanity: chunk paragraph counts must add up to the page total
let bad = 0;
for (const p of index) {
  const plan = JSON.parse(await readFile(path.join(OUT, p.slug, 'plan.json'), 'utf8'));
  const sum = plan.chunks.reduce((a, c) => a + c.paragraphs, 0);
  if (sum !== p.paragraphs) {
    bad++;
    if (bad <= 12) console.error(`  paragraph drift ${p.rel}: chunks=${sum} page=${p.paragraphs}`);
  }
}
console.log(bad ? `paragraph drift on ${bad} page(s)` : 'chunk paragraph budgets verified');
