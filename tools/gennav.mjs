// Generates the navigation data consumed by the layout:
//   src/_data/nav.json     sidebar menu (same page set and order as the English mirror)
//   src/_data/crumbs.json  breadcrumbs per URL, derived from the URL hierarchy
//   src/_data/site.json    backup date shown in the footer
//
// Titles always come from the pages themselves, so translating a page title
// updates the menu and every breadcrumb that points at it.
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');

function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, '').replace(/\\"/g, '"');
  }
  return fm;
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons') continue;
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
  pages.push({ url, title: fm.title, section: fm.section || 'other', kind: fm.kind || null });
}

const byUrl = new Map(pages.map((p) => [p.url, p]));
const pick = (urls) => urls.map((u) => byUrl.get(u)).filter(Boolean);
const item = (p) => ({ url: p.url, title: p.title, section: p.section });

// MTProto protocol articles: curated order first, then the rest by url
const mtprotoCore = [
  '/mtproto/', '/mtproto/description/', '/mtproto/auth_key/', '/mtproto/samples-auth_key/',
  '/mtproto/security_guidelines/', '/mtproto/serialize/', '/mtproto/service_messages/',
  '/mtproto/service_messages_about_messages/', '/mtproto/transports/', '/mtproto/mtproto-transports/',
  '/mtproto/TL/', '/mtproto_v1/',
];
const mtprotoItems = pick(mtprotoCore).map(item);
for (const p of pages
  .filter((p) => p.url.startsWith('/mtproto/') && !mtprotoCore.includes(p.url))
  .sort((a, b) => a.url.localeCompare(b.url))) {
  mtprotoItems.push(item(p));
}

const apiItems = pages
  .filter((p) => p.section === 'api')
  .sort((a, b) => (a.url === '/api/' ? -1 : b.url === '/api/' ? 1 : a.url.localeCompare(b.url)))
  .map(item);

const schemaCore = [
  '/schema/', '/schema/mtproto/', '/schema/end-to-end/', '/methods/',
  '/schema/json/', '/schema/mtproto-json/', '/schema/end-to-end-json/',
];
const schemaItems = pick(schemaCore).map(item);
schemaItems.push(
  { url: '/constructor/', title: 'Конструкторы (справочник)', section: 'ref' },
  { url: '/method/', title: 'Методы (справочник)', section: 'ref' },
  { url: '/type/', title: 'Типы (справочник)', section: 'ref' }
);

const otherItems = pages
  .filter((p) => p.section === 'faq')
  .sort((a, b) => a.url.localeCompare(b.url))
  .map(item);

const sections = [
  { key: 'api', title: 'Telegram API', items: apiItems },
  { key: 'mtproto', title: 'Протокол MTProto', items: mtprotoItems },
  { key: 'schema', title: 'Схема', items: schemaItems },
  { key: 'other', title: 'Прочее', items: otherItems },
];

await mkdir(path.join(SRC, '_data'), { recursive: true });
await writeFile(path.join(SRC, '_data', 'nav.json'), JSON.stringify({ sections }, null, 1));

// ---- breadcrumbs ----
const SECTION_ROOT = {
  api: { url: '/api/', fallback: 'Telegram API' },
  mtproto: { url: '/mtproto/', fallback: 'MTProto' },
  schema: { url: '/schema/', fallback: 'Схема' },
  ref: { url: '/schema/', fallback: 'Схема' },
};
const REF_INDEX = {
  constructor: { url: '/constructor/', title: 'Конструкторы' },
  method: { url: '/method/', title: 'Методы' },
  type: { url: '/type/', title: 'Типы' },
};

const crumbs = {};
for (const p of pages) {
  if (p.url === '/') continue;
  const trail = [];
  const root = SECTION_ROOT[p.section];
  if (root && p.url !== root.url) {
    const rp = byUrl.get(root.url);
    trail.push({ url: root.url, title: rp ? rp.title : root.fallback });
  }
  if (p.section === 'ref') {
    const ix = REF_INDEX[p.url.split('/')[1]];
    if (ix) trail.push(ix);
  } else {
    // intermediate directories, e.g. /api/bots/inline/ → /api/bots/
    const segs = p.url.replace(/^\/|\/$/g, '').split('/');
    for (let i = 1; i < segs.length; i++) {
      const u = '/' + segs.slice(0, i).join('/') + '/';
      if (u === p.url) break;
      const parent = byUrl.get(u);
      if (parent && !trail.some((c) => c.url === u)) trail.push({ url: u, title: parent.title });
    }
  }
  if (trail.length) crumbs[p.url] = trail;
}
await writeFile(path.join(SRC, '_data', 'crumbs.json'), JSON.stringify(crumbs, null, 1));

let backupDate = 'unknown';
try {
  const dates = (await readdir(path.join(ROOT, 'backup'))).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  backupDate = dates[dates.length - 1];
} catch {}
await writeFile(path.join(SRC, '_data', 'site.json'), JSON.stringify({ backup_date: backupDate }, null, 1));

console.log(
  `nav: API ${apiItems.length} | MTProto ${mtprotoItems.length} | Схема ${schemaItems.length} | Прочее ${otherItems.length}` +
    ` | crumbs ${Object.keys(crumbs).length} | backup ${backupDate}`
);
