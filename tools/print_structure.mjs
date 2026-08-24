// Prints the full site structure (all pages grouped by section) as markdown,
// for embedding into README.md. Run AFTER tools/extract.mjs.
// Usage: node tools/print_structure.mjs
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('src');

function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return fm;
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}

const pages = [];
for await (const f of walk(SRC)) {
  const fm = parseFm(await readFile(f, 'utf8'));
  if (!fm.title) continue;
  const rel = '/' + path.relative(SRC, f).replace(/\.md$/, '').replace(/\\/g, '/');
  const url = rel === '/index' ? '/' : rel.endsWith('/index') ? rel.slice(0, -5) : rel;
  pages.push({ url, title: fm.title, section: fm.section || 'other' });
}
pages.sort((a, b) => a.url.localeCompare(b.url));

const groups = {
  mtproto: pages.filter((p) => p.url.startsWith('/mtproto')),
  api: pages.filter((p) => p.url.startsWith('/api')),
  schema: pages.filter((p) => p.section === 'schema' || p.url.startsWith('/schema') || ['/methods', '/constructors', '/types'].includes(p.url)),
  ref: pages.filter((p) => p.section === 'ref'),
};

console.log(`- **MTProto Protocol** — ${groups.mtproto.length} pages:`);
for (const p of groups.mtproto) console.log(`  - \`${p.url}/\` — ${p.title}`);
console.log(`- **Telegram API** — ${groups.api.length} pages:`);
for (const p of groups.api) console.log(`  - \`${p.url}/\` — ${p.title}`);
console.log(`- **Schema (overview & indexes)** — ${groups.schema.length} pages:`);
for (const p of groups.schema) console.log(`  - \`${p.url}/\` — ${p.title}`);
const c = groups.ref.filter((p) => p.url.startsWith('/constructor')).length;
const m = groups.ref.filter((p) => p.url.startsWith('/method')).length;
const t = groups.ref.filter((p) => p.url.startsWith('/type')).length;
console.log(`- **Schema reference** — ${groups.ref.length} pages: ${c} constructors (\`/constructor/<name>/\`), ${m} methods (\`/method/<name>/\`), ${t} types (\`/type/<name>/\`).`);
