// Scans src/**.md front matter and generates src/_data/nav.json (sidebar)
import { mkdir, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('src');

const GROUPS = [
  { key: 'mtproto', title: 'Протокол MTProto' },
  { key: 'api', title: 'Telegram API' },
  { key: 'schema', title: 'Схема TL' },
  { key: 'bots', title: 'Боты' },
  { key: 'other', title: 'Другое' },
  { key: 'ref', title: 'Справочник схемы' },
];

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
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'img') continue;
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
  const url = rel === '/index' ? '/' : rel.endsWith('/index') ? rel.slice(0, -5) : rel + '/';
  pages.push({ url, title: fm.title, section: fm.section || 'other', kind: fm.kind, file: f });
}

const sections = [];
for (const g of GROUPS) {
  let items = pages.filter((p) => p.section === g.key && p.url !== '/');
  if (g.key === 'ref') {
    // only index pages for the huge reference collections
    items = items.filter((p) => ['/constructor/', '/method/', '/type/'].includes(p.url));
    items = [
      { url: '/constructor/', title: 'Конструкторы (справочник)' },
      { url: '/method/', title: 'Методы (справочник)' },
      { url: '/type/', title: 'Типы (справочник)' },
    ];
  } else {
    items = items.filter((p) => !['/constructor/', '/method/', '/type/'].includes(p.url) && !p.kind);
    items.sort((a, b) => a.url.localeCompare(b.url));
    // /mtproto itself first within its group
    if (g.key === 'mtproto') {
      items.sort((a, b) => (a.url === '/mtproto/' ? -1 : b.url === '/mtproto/' ? 1 : 0));
    }
  }
  if (items.length) sections.push({ title: g.title, items });
}
sections.push({ title: 'Приложение', items: [{ url: '/glossary/', title: 'Глоссарий терминов' }] });

await mkdir(path.join(SRC, '_data'), { recursive: true });
await writeFile(path.join(SRC, '_data', 'nav.json'), JSON.stringify({ sections }, null, 1));
console.log('nav.json written;', pages.length, 'pages total');
