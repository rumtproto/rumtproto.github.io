// Site self-check for maintainers: validates the built docs/ and the src/ link graph.
// Usage: npm run check   (run after npm run build)
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error('FAIL:', msg);
};
const ok = (msg) => console.log('ok  :', msg);

// A link is written percent-encoded ("/type/Vector%20t/"), the file on disk is
// not ("src/type/Vector t.md"): compare in the decoded form, per segment, so
// "/type/%23" (the TL "nat" type) resolves too.
const decodePath = (p) =>
  p
    .split('/')
    .map((s) => {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    })
    .join('/');

async function walk(dir, ext) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons' || e.name === 'pagefind') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext)));
    else if (!ext || e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

const exists = (p) => stat(p).then(() => true).catch(() => false);

// ---- src link graph ------------------------------------------------------
const mdFiles = await walk(SRC, '.md');

// Every link the mirror emits, from both syntaxes: markdown `](/path#frag)` and
// the raw HTML `href="/path#frag"` that survives inside tables and TL-schema
// blocks. The raw-HTML half used to go completely unchecked.
const LINK_RES = [/\]\((\/[^)\s]*)\)/g, /<a\b[^>]*?href="(\/[^"]*)"/g];

// The same two syntaxes, document-relative. These resolve against the URL of the
// page holding them, and on this site that URL is a directory: `href="TL"` on
// /mtproto/TL-formal/ means /mtproto/TL-formal/TL, not the /mtproto/TL it means
// upstream (where the page has no trailing slash). Checking only the absolute
// half is how a batch of such 404s, and the `#/` entry of the type index, stayed
// invisible here for as long as they did. The leading group separates a link
// from an image the same way tools/extract.mjs does.
const REL_RES = [/(!\[[^\]]*\]|\])\(([^)\s]+)\)/g, /<a\b[^>]*?href="([^"]+)"/g];
const ABSOLUTE = /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|\/\/|\/|#)/;
const RELBASE = 'https://relative.invalid';

// Links into the page's own headings. They point at no page, so nothing above
// looks at them — and a table of contents made of them is exactly as broken as
// any other dead link if the ids drifted (the FAQ had 21 such).
const SAME_RES = [/\]\((#[^)\s]+)\)/g, /<a\b[^>]*?href="(#[^"]+)"/g];

// Markdown code is text, not markup: `<a href="#target">` in the prose of
// /constructor/pageBlockAnchor/ shows what that block renders as, and no such
// anchor exists (nor should). Fenced blocks and inline spans are masked before
// links are collected. The raw-HTML <pre class="page_scheme"> listings are NOT
// markdown code and stay untouched — their 11 607 schema links are real links.
const stripCode = (md) => md.replace(/^```[\s\S]*?^```/gm, '').replace(/(`+)[\s\S]*?\1/g, '');

// Where the page ends up on the site — the base every relative link is measured
// against. `permalink` in the front matter wins (src/404.md is served as
// /404.html, not /404/).
const docUrl = (file, frontMatter) => {
  const pm = frontMatter.match(/^permalink:\s*(\S+)\s*$/m);
  if (pm) return pm[1];
  const rel = '/' + path.relative(SRC, file).replace(/\\/g, '/').replace(/\.md$/, '');
  return rel === '/index' ? '/' : rel.replace(/\/index$/, '') + '/';
};

// The five machine-readable endpoints are data, not prose: whatever looks like a
// link inside them belongs to the document and is deliberately left untouched.
const DATA_PAGES = new Set(
  ['/schema/json', '/schema/mtproto-json', '/schema/end-to-end-json', '/api/config.json', '/api/errors.json']
    .map((p) => path.join(SRC, p.slice(1) + '.md'))
);

const links = []; // { file, url, target, anchor, relative, samePage }
let relative = 0;
let samePage = 0;
for (const f of mdFiles) {
  if (DATA_PAGES.has(f)) continue;
  const text = await readFile(f, 'utf8');
  const hasFm = text.startsWith('---\n');
  const body = stripCode(hasFm ? text.slice(text.indexOf('\n---\n', 3) + 5) : text);
  const file = path.relative(SRC, f);
  for (const re of LINK_RES) {
    for (const m of body.matchAll(re)) {
      const [target, anchor] = m[1].split('#');
      links.push({ file, url: m[1], target: decodePath(target).replace(/\/+$/, ''), anchor });
    }
  }
  const own = docUrl(f, hasFm ? text.slice(4, text.indexOf('\n---\n', 3)) : '');
  const base = RELBASE + own;
  for (const re of SAME_RES) {
    for (const m of body.matchAll(re)) {
      samePage++;
      links.push({
        file,
        url: m[1],
        target: own.replace(/\/+$/, ''),
        anchor: decodeURIComponent(m[1].slice(1)),
        samePage: true,
      });
    }
  }
  for (const re of REL_RES) {
    for (const m of body.matchAll(re)) {
      const raw = m[2] ?? m[1];
      if (m[2] !== undefined && m[1][0] === '!') continue; // an image, not a link
      if (ABSOLUTE.test(raw)) continue; // collected by LINK_RES above
      let u;
      try {
        u = new URL(raw, base);
      } catch {
        continue;
      }
      if (u.origin !== RELBASE) continue;
      relative++;
      links.push({
        file,
        url: raw,
        target: decodePath(u.pathname).replace(/\/+$/, ''),
        anchor: u.hash.slice(1) || undefined,
        relative: true,
      });
    }
  }
}

let broken = 0;
for (const l of links) {
  if (l.samePage) continue; // the page holding the link is the page it names
  const base = path.join(SRC, l.target);
  if (await exists(base + '.md')) continue;
  if (await exists(path.join(base, 'index.md'))) continue;
  broken++;
  if (broken <= 10) fail(`broken link ${l.url} in ${l.file}${l.relative ? ` (relative, resolves to ${l.target})` : ''}`);
}
if (!broken) ok(`local links: ${links.length - samePage} (markdown + raw HTML; ${relative} document-relative), all resolve`);

// ---- built pages ---------------------------------------------------------
const pages = (await walk(DOCS)).filter((f) => f.endsWith('.html'));
const idsByUrl = new Map();
let h1bad = 0;
let metaBad = 0;
let urlBad = 0;
for (const f of pages) {
  const h = await readFile(f, 'utf8');
  const rel = path.relative(DOCS, f);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) {
    h1bad++;
    if (h1bad <= 5) fail(`h1 count != 1 in ${rel}`);
  }
  if (!h.includes('class="skip-link"') || !h.includes('rel="canonical"') || !h.includes('<html lang="en">')) {
    metaBad++;
    if (metaBad <= 5) fail(`missing skip-link/canonical/lang in ${rel}`);
  }
  // canonical/og:url must be usable as URLs: a raw space or '#' in the path
  // truncates or breaks them (`/type/Vector t/`, `/type/#/`).
  for (const m of h.matchAll(/(?:rel="canonical" href|property="og:url" content)="([^"]*)"/g)) {
    if (/[ "<>]/.test(m[1]) || m[1].split('#').length > 1) {
      urlBad++;
      if (urlBad <= 5) fail(`unencoded canonical/og:url "${m[1]}" in ${rel}`);
    }
  }
  const url = '/' + path.relative(DOCS, path.dirname(f)).replace(/\\/g, '/');
  const ids = new Set();
  for (const m of h.matchAll(/\sid="([^"]*)"/g)) ids.add(m[1]);
  idsByUrl.set(url === '/.' ? '/' : url, ids);
}
if (!h1bad) ok(`h1: exactly one on all ${pages.length} pages`);
if (!metaBad) ok('skip-link/canonical/lang present on all pages');
if (!urlBad) ok('canonical/og:url properly encoded on all pages');

// ---- anchors -------------------------------------------------------------
// A link that points at a heading which no longer exists is exactly as broken as
// a link to a missing page, and far easier to introduce unnoticed.
let anchorBad = 0;
let anchorChecked = 0;
let anchorSame = 0;
for (const l of links) {
  if (!l.anchor) continue;
  const ids = idsByUrl.get(l.target || '/');
  if (!ids) continue; // page-level breakage is reported above
  anchorChecked++;
  if (l.samePage) anchorSame++;
  if (!ids.has(l.anchor)) {
    anchorBad++;
    if (anchorBad <= 10) fail(`dead anchor ${l.url} in ${l.file}`);
  }
}
if (!anchorBad) ok(`anchors: ${anchorChecked} in-site fragments (${anchorSame} into the page's own headings), all resolve`);

const backups = path.join(ROOT, 'backup');
const dates = (await readdir(backups).catch(() => [])).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
const latest = dates[dates.length - 1];
const backupPage = (url) =>
  readFile(path.join(backups, latest, 'pages', url.slice(1).replace(/\//g, '__') + '.html'), 'utf8');
const unentity = (s) =>
  s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const preText = (html) => {
  const m = html.match(/<pre[^>]*>[\s\S]*?<\/pre>/);
  return m ? unentity(m[0].replace(/<[^>]+>/g, '')).trim() : '';
};

// ---- the pages this mirror exists for ------------------------------------
// On /schema and /schema/end-to-end the TL-schema is a sibling of the content
// div upstream, so it is trivially lost: those two pages would then say "below
// you will find the schema" and show nothing at all. Compare the rendered
// listing against the backup character for character rather than trusting a
// length heuristic.
for (const url of ['/schema', '/schema/end-to-end', '/schema/mtproto']) {
  const built = preText(await readFile(path.join(DOCS, url.slice(1), 'index.html'), 'utf8').catch(() => ''));
  const want = preText(await backupPage(url).catch(() => ''));
  if (!want) fail(`${url}: no TL-schema in the backup — check the crawl`);
  else if (built === want) ok(`${url}/ reproduces its TL-schema verbatim (${want.split('\n').length} lines)`);
  else fail(`${url}/ TL-schema differs from the backup (${built.split('\n').length} vs ${want.split('\n').length} lines)`);
}

// TL identifiers in a schema listing are links upstream; a plain text block
// would silently drop ~12 000 of them across the two schema pages.
for (const [url, min] of [['/schema', 11000], ['/schema/end-to-end', 400]]) {
  const h = await readFile(path.join(DOCS, url.slice(1), 'index.html'), 'utf8').catch(() => '');
  const block = (h.match(/<pre class="page_scheme">[\s\S]*?<\/pre>/) || [''])[0];
  const n = (block.match(/<a\b/g) || []).length;
  if (n >= min) ok(`${url}/ keeps its ${n} schema links`);
  else fail(`${url}/ lost its schema links (${n}, expected >= ${min})`);
}

// Every schema listing states the layer it belongs to, exactly as the original
// labels the layer selector floating above the same block.
let schemePages = 0;
let layerMissing = 0;
for (const f of pages) {
  const h = await readFile(f, 'utf8');
  if (!h.includes('<pre class="page_scheme">')) continue;
  schemePages++;
  if (!/<p class="page_layer">Layer \d+<\/p>/.test(h)) {
    layerMissing++;
    if (layerMissing <= 5) fail(`no layer label above the schema in ${path.relative(DOCS, f)}`);
  }
}
if (!layerMissing) ok(`layer label present on all ${schemePages} pages showing a schema listing`);

// ---- machine-readable endpoints ------------------------------------------
// Reproduced verbatim, only re-indented: parsing the page back must give the
// exact same document as the backup, and it must no longer be a single line.
for (const url of ['/schema/json', '/schema/mtproto-json', '/schema/end-to-end-json', '/api/config.json', '/api/errors.json']) {
  const h = await readFile(path.join(DOCS, url.slice(1), 'index.html'), 'utf8').catch(() => '');
  const m = h.match(/<code class="language-json">([\s\S]*?)<\/code>/);
  if (!m) {
    fail(`${url}/ has no JSON block`);
    continue;
  }
  const shown = unentity(m[1]);
  const lines = shown.split('\n').length;
  let same = false;
  try {
    same = JSON.stringify(JSON.parse(await backupPage(url))) === JSON.stringify(JSON.parse(shown));
  } catch (e) {
    fail(`${url}/ does not parse as JSON: ${e.message}`);
    continue;
  }
  if (!same) fail(`${url}/ does not match the backup document`);
  else if (lines < 100) fail(`${url}/ is not beautified (${lines} lines)`);
  else ok(`${url}/ matches the backup, beautified to ${lines} lines`);
}

// ---- sitemap & robots ----------------------------------------------------
const sitemap = await readFile(path.join(DOCS, 'sitemap.xml'), 'utf8').catch(() => '');
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
if (locs.length >= pages.length - 1) ok(`sitemap.xml: ${locs.length} urls`);
else fail(`sitemap.xml missing or too small (${locs.length})`);
const badLoc = locs.filter((u) => /[ "<>]/.test(u) || u.split('#').length > 1);
if (!badLoc.length) ok('sitemap.xml: every <loc> is a well-formed URL');
else fail(`sitemap.xml has ${badLoc.length} malformed <loc>, e.g. ${badLoc[0]}`);
const robots = await readFile(path.join(DOCS, 'robots.txt'), 'utf8').catch(() => '');
if (robots.includes('Sitemap:')) ok('robots.txt references sitemap');
else fail('robots.txt missing or without Sitemap');

console.log(failures ? `\n${failures} problem(s) found` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
