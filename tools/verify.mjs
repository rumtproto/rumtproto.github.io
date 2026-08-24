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

// ---- src link graph ----
function localExists(p) {
  const base = path.join(SRC, p.replace(/\/+$/, ''));
  return stat(base + '.md').then(() => true).catch(() => stat(path.join(base, 'index.md')).then(() => true).catch(() => false));
}

async function walk(dir, ext) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext)));
    else if (!ext || e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

const mdFiles = await walk(SRC, '.md');
let links = 0;
let broken = 0;
for (const f of mdFiles) {
  const text = await readFile(f, 'utf8');
  for (const m of text.matchAll(/\]\((\/[^)#]*?)\)/g)) {
    let link = m[1].trim();
    try {
      link = decodeURIComponent(link);
    } catch {}
    links++;
    if (!(await localExists(link))) {
      broken++;
      if (broken <= 5) fail(`broken link ${m[1]} in ${path.relative(SRC, f)}`);
    }
  }
}
if (!broken) ok(`local links: ${links}, all resolve`);

// ---- built pages ----
const pages = (await walk(DOCS)).filter((f) => f.endsWith('.html'));
let h1bad = 0;
let metaBad = 0;
for (const f of pages) {
  const h = await readFile(f, 'utf8');
  const rel = path.relative(DOCS, f);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) {
    h1bad++;
    if (h1bad <= 5) fail(`h1 count != 1 in ${rel}`);
  }
  if (!h.includes('class="skip-link"') || !h.includes('rel="canonical"') || !h.includes('<html lang="ru">')) {
    metaBad++;
    if (metaBad <= 5) fail(`missing skip-link/canonical/lang in ${rel}`);
  }
}
if (!h1bad) ok(`h1: exactly one on all ${pages.length} pages`);
if (!metaBad) ok('skip-link/canonical/lang present on all pages');

// ---- heading anchors ----
// Cross-references address headings by the anchor id of the original page, so a
// broken `#anchor` means the translation lost an anchor the documentation relies on.
{
  const idsByUrl = new Map();
  const anchorLinks = [];
  for (const f of pages) {
    const h = await readFile(f, 'utf8');
    const url = '/' + path.relative(DOCS, f).replace(/index\.html$/, '').replace(/\\/g, '/');
    const a = h.indexOf('<article');
    const b = h.indexOf('</article>');
    if (a === -1 || b === -1) continue;
    const article = h.slice(a, b);
    idsByUrl.set(url, new Set([...article.matchAll(/ id="([^"]*)"/g)].map((m) => m[1])));
    // skip href attributes that only appear inside escaped code samples
    for (const m of article.replace(/&lt;[\s\S]*?&gt;/g, ' ').matchAll(/href="([^"]*#[^"]*)"/g)) {
      if (/^https?:/.test(m[1])) continue;
      anchorLinks.push({ from: url, href: m[1] });
    }
  }
  let brokenAnchors = 0;
  for (const l of anchorLinks) {
    const [p, frag] = l.href.split('#');
    if (!frag) continue;
    const target = p === '' ? l.from : p.endsWith('/') ? p : p + '/';
    let ids;
    try {
      ids = idsByUrl.get(decodeURI(target));
    } catch {
      ids = idsByUrl.get(target);
    }
    if (!ids) continue;
    let want = frag;
    try {
      want = decodeURIComponent(frag);
    } catch {}
    if (!ids.has(want)) {
      brokenAnchors++;
      if (brokenAnchors <= 5) fail(`broken anchor ${l.href} on ${l.from}`);
    }
  }
  if (!brokenAnchors) ok(`heading anchors: ${anchorLinks.length} links, all resolve`);
}

// ---- paragraph labels ----
{
  let unlabeled = 0;
  let labeled = 0;
  for (const f of pages) {
    const h = await readFile(f, 'utf8');
    if (h.includes('data-mirror="0"')) continue;
    const a = h.indexOf('<article');
    const b = h.indexOf('</article>');
    if (a === -1 || b === -1) continue;
    const article = h.slice(a, b);
    for (const m of article.matchAll(/<p id="(p-\d+)">([\s\S]*?)<\/p>/g)) {
      if (m[2].includes('para-trans')) labeled++;
      else {
        unlabeled++;
        if (unlabeled <= 5) fail(`paragraph without a translation label: ${path.relative(DOCS, f)} #${m[1]}`);
      }
    }
  }
  if (!unlabeled) ok(`paragraph labels: ${labeled} translated paragraphs, all linked to the original`);
}

// ---- sitemap & robots ----
const sitemap = await readFile(path.join(DOCS, 'sitemap.xml'), 'utf8').catch(() => '');
const urls = (sitemap.match(/<loc>/g) || []).length;
if (urls >= pages.length - 1) ok(`sitemap.xml: ${urls} urls`);
else fail(`sitemap.xml missing or too small (${urls})`);
const robots = await readFile(path.join(DOCS, 'robots.txt'), 'utf8').catch(() => '');
if (robots.includes('Sitemap:')) ok('robots.txt references sitemap');
else fail('robots.txt missing or without Sitemap');

// ---- search index ----
const pf = await readFile(path.join(DOCS, 'pagefind', 'pagefind-entry.json'), 'utf8').catch(() => '');
if (pf) {
  const meta = JSON.parse(pf);
  const langs = Object.entries(meta.languages || {});
  const indexed = langs.reduce((a, [, v]) => a + (v.page_count || 0), 0);
  if (indexed >= pages.length - 5) ok(`search index: ${indexed} pages (${langs.map(([l]) => l).join(', ')})`);
  else fail(`search index covers only ${indexed} of ${pages.length} pages — re-run "npx pagefind --site docs"`);
} else {
  fail('search index missing — run "npm run build"');
}

console.log(failures ? `\n${failures} problem(s) found` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
