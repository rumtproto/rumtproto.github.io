// Builds translation skeletons in .extracted/skel/<path>.md.
//
// A skeleton is the *English* page with every paragraph already carrying its
// [@t:N] marker, where N is the paragraph number the English mirror assigns to
// that same paragraph. A translator only has to replace English prose with
// Russian prose: the numbering can no longer drift, so [@t:N] always resolves
// to the matching paragraph on mirrortproto.github.io.
//
// Usage: node tools/skeleton.mjs [--only <prefix>] [--list]
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { paragraphsOf } from './lib/paras.mjs';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, '.extracted', 'skel');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const listOnly = args.includes('--list');

async function walk(dir, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, base)));
    else if (e.name.endsWith('.json')) out.push(path.relative(base, p).replace(/\.json$/, ''));
  }
  return out;
}

export function frontMatter(text) {
  if (!text.startsWith('---')) return { raw: '', fm: {}, body: text };
  const end = text.indexOf('\n---', 3);
  if (end === -1) return { raw: '', fm: {}, body: text };
  const raw = text.slice(4, end);
  const body = text.slice(end + 4).replace(/^\n/, '');
  const fm = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^([a-zA-Z_]+):\s*([\s\S]*)$/);
    if (m) fm[m[1]] = m[2];
  }
  return { raw, fm, body };
}

const pages = (await walk(EN)).filter((p) => !/^(constructor|method|type)\//.test(p));
const targets = pages.filter((p) => !only || ('/' + p).startsWith(only));

if (listOnly) {
  for (const p of targets) console.log(p);
  process.exit(0);
}

let n = 0;
for (const rel of targets) {
  const meta = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
  // front matter of the existing Russian page (keeps title/original/crumbs/section)
  let fmRaw = '';
  try {
    const cur = await readFile(path.join(SRC, rel + '.md'), 'utf8');
    fmRaw = frontMatter(cur).raw;
  } catch {}

  const out = [];
  for (const b of meta.blocks) {
    if (!b.p.length) {
      out.push(b.text);
      continue;
    }
    // A block may render to several <p> (raw HTML). Only single-paragraph
    // blocks can carry a leading marker; multi-paragraph blocks are emitted
    // with an explanatory comment so the translator splits them by hand.
    if (b.p.length === 1) out.push(`[@t:${b.p[0]}] ` + b.text);
    else out.push(`<!-- paragraphs ${b.p.join(', ')} -->\n` + b.text);
  }
  const dest = path.join(OUT, rel + '.md');
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, (fmRaw ? '---' + fmRaw + '\n---\n\n' : '') + out.join('\n\n') + '\n');
  n++;
}
console.log('skeletons written:', n, '→', path.relative(ROOT, OUT));

// sanity: verify each skeleton still yields exactly the expected paragraph count
let bad = 0;
for (const rel of targets) {
  const meta = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
  const text = await readFile(path.join(OUT, rel + '.md'), 'utf8');
  const body = frontMatter(text).body;
  const count = paragraphsOf(body.replace(/\[@t:\d+\]\s?/g, '')).length;
  if (count !== meta.paragraphs) {
    bad++;
    if (bad <= 10) console.error(`  paragraph drift in ${rel}: ${count} != ${meta.paragraphs}`);
  }
}
console.log(bad ? `paragraph drift on ${bad} page(s)` : 'paragraph counts verified on all skeletons');
