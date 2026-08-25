// End-to-end verification for the mirror-derived translation build.
// Run after `npm run build`. The checks intentionally distinguish an absent
// translation (valid: English remains) from a broken translation (invalid:
// source structure, anchors, links or marker protocol changed).

import { existsSync, globSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { segments } from './lib/segment.mjs';
import { schemaNames } from './lib/schema-names.mjs';

const ROOT = process.cwd();
const MIRROR = path.join(ROOT, 'mirror', 'src');
const BUILD = path.join(ROOT, 'build');
const DOCS = path.join(ROOT, 'docs');
const I18N = path.join(ROOT, 'i18n');
let failures = 0;
const sampleLimit = 12;
const samples = new Map();
function fail(group, message) {
  failures += 1;
  const rows = samples.get(group) || [];
  if (rows.length < sampleLimit) rows.push(message);
  samples.set(group, rows);
}
function ok(message) { console.log(`ok  : ${message}`); }

// Defects copied verbatim from upstream are reported, but do not fail the build:
// this site mirrors the original faithfully and must not silently retarget its
// links. Anything not present upstream is our own regression and does fail.
const warnings = [];
function warn(message) { warnings.push(message); }
const mirrorSourceByUrl = new Map();
function inheritedFromMirror(pageUrl, href) {
  const file = mirrorSourceByUrl.get(pageUrl);
  if (!file || !existsSync(file)) return false;
  const source = readFileSync(file, 'utf8');
  // A Markdown link may carry a title — `](/file/... "Click for hi-res image")` —
  // so the destination is not always followed by the closing parenthesis.
  return source.includes(`](${href})`) || source.includes(`](${href} `) || source.includes(`href="${href}"`);
}
function read(file) { return readFileSync(file, 'utf8'); }
const asPosix = (p) => p.replace(/\\/g, '/');
const encodePath = (url) => url.split('/').map((part) => encodeURIComponent(decodeURIComponent(part))).join('/');

function outputFor(rel, sourceRoot = MIRROR) {
  const doc = matter(read(path.join(sourceRoot, rel)));
  let url = doc.data.permalink;
  if (!url) {
    const bare = rel.replace(/\.md$/, '').replace(/\/index$/, '');
    url = !bare || bare === 'index' ? '/' : `/${bare}/`;
  }
  url = String(url).split('?')[0];
  if (!url.startsWith('/')) url = `/${url}`;
  // The generated filesystem retains raw names (# and spaces); browsers address
  // them percent-encoded, and byUrl stores both representations.
  if (url.endsWith('/')) return path.join(DOCS, url, 'index.html');
  return path.join(DOCS, url);
}
function sourceSignature(body) {
  return segments(body)
    .filter((segment) => !/^\s*\[@note\]/.test(segment.text))
    .map((segment) => `${segment.kind}:${segment.level}`)
    .join('|');
}
function urlForFile(file) {
  const rel = asPosix(path.relative(DOCS, file));
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}
function normalizeUrl(url) {
  try { return decodeURIComponent(url); } catch { return url; }
}

if (!existsSync(MIRROR) || !existsSync(BUILD) || !existsSync(DOCS)) {
  throw new Error('Missing mirror/, build/ or docs/. Run npm run build first.');
}

// 1. Generated Markdown must contain every mirror page and preserve its complete
// block sequence. This is the central invariant: prose can change, structure may
// not. Site-owned pages are explicitly declared instead of being silent drift.
const mirrorPages = globSync('**/*.md', { cwd: MIRROR }).sort();
for (const rel of mirrorPages) {
  const bare = rel.replace(/\.md$/, '').replace(/\/index$/, '');
  mirrorSourceByUrl.set(!bare || bare === 'index' ? '/' : `/${bare}/`, path.join(MIRROR, rel));
}
let structural = 0;
for (const rel of mirrorPages) {
  const buildFile = path.join(BUILD, rel);
  const output = outputFor(rel);
  if (!existsSync(buildFile)) { fail('inventory', `missing generated input: ${rel}`); continue; }
  if (!existsSync(output)) { fail('inventory', `missing rendered page: ${rel}`); continue; }
  const upstream = matter(read(path.join(MIRROR, rel))).content;
  const generated = matter(read(buildFile)).content;
  if (sourceSignature(upstream) !== sourceSignature(generated)) {
    structural += 1;
    fail('structure', `Markdown block sequence differs: ${rel}`);
  }
}
if (!structural) ok(`mirror structure: ${mirrorPages.length} pages identical at block level`);

// 2. Translation values must be non-empty. A missing key is intentionally not an
// error because apply_translations leaves exact English source text in place.
let emptyValues = 0;
for (const file of [path.join(I18N, 'segments.json'), ...globSync('*.json', { cwd: path.join(I18N, 'pages') }).map((name) => path.join(I18N, 'pages', name))]) {
  const map = JSON.parse(read(file));
  for (const [key, value] of Object.entries(map)) {
    if (!String(key).trim() || !String(value).trim()) {
      emptyValues += 1;
      fail('memory', `empty key/value in ${asPosix(path.relative(ROOT, file))}`);
    }
  }
}
if (!emptyValues) ok('translation memory: no empty translations (unknown keys fall back to English)');

// No key may be a schema entity name: translating one would rename an API
// constructor, method or type everywhere it is referenced.
{
  const names = schemaNames(MIRROR);
  let renamed = 0;
  for (const file of [path.join(I18N, 'segments.json'), ...globSync('*.json', { cwd: path.join(I18N, 'pages') }).map((n) => path.join(I18N, 'pages', n))]) {
    for (const key of Object.keys(JSON.parse(read(file)))) {
      if (names.has(key.trim())) {
        renamed += 1;
        fail('schema-names', `translation memory would rename the schema entity "${key}"`);
      }
    }
  }
  if (!renamed) ok(`schema names: ${names.size} entity names kept verbatim`);
}

// 3. Rendered-page baseline, marker protocol, Instant View and media safety.
const htmlFiles = globSync('**/*.html', { cwd: DOCS }).map((rel) => path.join(DOCS, rel));
const byUrl = new Map();
let badH1 = 0, badMeta = 0, leakedMarkers = 0, inlineMedia = 0, translatedLabels = 0, badLabels = 0;
for (const file of htmlFiles) {
  const html = read(file);
  const rel = asPosix(path.relative(DOCS, file));
  const url = urlForFile(file);
  byUrl.set(url, file);
  byUrl.set(normalizeUrl(url), file);
  try { byUrl.set(encodePath(url), file); } catch {}
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) { badH1 += 1; fail('render', `h1 count != 1: ${rel}`); }
  const required = [
    '<html lang="ru">', 'class="skip-link"', 'rel="canonical"', 'property="og:url"',
    'property="al:android:app_name" content="Medium"', 'property="article:published_time"',
    '<meta name="author" content="Telegram">', 'hreflang="en"', 'hreflang="ru"',
  ];
  if (!required.every((needle) => html.includes(needle))) { badMeta += 1; fail('metadata', `missing required metadata: ${rel}`); }
  if (/\[@(?:i18n|term:[^\]]*|note)\]/.test(html)) { leakedMarkers += 1; fail('markers', `unconsumed translation marker: ${rel}`); }
  if (/<(?:img|video)\b[^>]*\son(?:load|error|loadeddata)=/i.test(html)) { inlineMedia += 1; fail('instant-view', `inline media event handler: ${rel}`); }
  for (const match of html.matchAll(/<a class="para-label para-trans" href="([^"]+)"/g)) {
    translatedLabels += 1;
    if (!/^https:\/\/mirrortproto\.github\.io\/.*#p-\d+$/.test(match[1])) {
      badLabels += 1; fail('labels', `invalid original-paragraph link in ${rel}: ${match[1]}`);
    }
  }
  // A label carrying both `title` and `data-tip` would show two tooltips: the
  // browser's native one plus ours.
  for (const match of html.matchAll(/<(?:a|span) class="para-label[^"]*"[^>]*>/g)) {
    if (match[0].includes('data-tip=') && match[0].includes(' title=')) {
      badLabels += 1;
      fail('labels', `label has both title and data-tip (double tooltip) in ${rel}`);
      break;
    }
  }
}
if (!badH1) ok(`rendering: exactly one h1 on ${htmlFiles.length} pages`);
if (!badMeta) ok('metadata: canonical, OG, hreflang and Instant View metadata present');
if (!leakedMarkers) ok('marker protocol: no generated marker leaked into HTML');
if (!inlineMedia) ok('Instant View safety: no inline image/video event handlers');
if (!badLabels) ok(`translation labels: ${translatedLabels} valid original-paragraph links`);

// 4. Heading anchors copied from the English mirror must exist on every regular
// page; then resolve every local href/fragment in the finished site.
const anchors = JSON.parse(read(path.join(BUILD, '_data', 'anchors.json')));
let missingAnchorIds = 0;
for (const rel of mirrorPages) {
  const output = outputFor(rel);
  if (!existsSync(output)) continue;
  const rawUrl = rel === 'index.md' ? '/' : `/${rel.replace(/\.md$/, '').replace(/\/index$/, '')}/`;
  // An empty id is not an anchor: markdown-it-anchor produces one for a heading
  // with no sluggable character ("# #", a Persian title), nothing can link to
  // it, and `id=""` does not survive minification. It stays in the positional
  // inventory the renderer uses, but no page is expected to carry it.
  const expected = (anchors[rawUrl]?.ids || []).filter(Boolean);
  const html = read(output);
  const article = html.slice(html.indexOf('<article'), html.indexOf('</article>'));
  const ids = new Set([...article.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  for (const id of expected) if (!ids.has(id)) { missingAnchorIds += 1; fail('anchors', `missing original heading #${id} in ${rel}`); }
}
if (!missingAnchorIds) ok('original heading anchors: all present');

let brokenLinks = 0, brokenFragments = 0;
function resolve(fromUrl, href) {
  const hashAt = href.indexOf('#');
  const targetPart = hashAt === -1 ? href : href.slice(0, hashAt);
  const fragment = hashAt === -1 ? '' : href.slice(hashAt + 1);
  let target;
  if (!targetPart) target = fromUrl;
  else if (targetPart.startsWith('/')) target = targetPart;
  else {
    const parent = fromUrl.endsWith('/') ? fromUrl : path.posix.dirname(fromUrl) + '/';
    target = path.posix.normalize(path.posix.join(parent, targetPart));
    if (!target.startsWith('/')) target = '/' + target;
  }
  target = target.split('?')[0];
  if (target !== '/' && !/\.[A-Za-z0-9]+$/.test(target) && !target.endsWith('/')) target += '/';
  return { target: normalizeUrl(target), fragment };
}
for (const [fromUrl, file] of byUrl) {
  // byUrl has decoded aliases too; only process canonical map keys once.
  if (urlForFile(file) !== fromUrl) continue;
  const html = read(file);
  const articleStart = html.indexOf('<article');
  const articleEnd = html.indexOf('</article>');
  const body = articleStart === -1 || articleEnd === -1 ? html : html.slice(articleStart, articleEnd);
  for (const match of body.replace(/&lt;[\s\S]*?&gt;/g, ' ').matchAll(/\shref="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href) || href.startsWith('//')) continue;
    const { target, fragment } = resolve(fromUrl, href);
    const targetFile = byUrl.get(target) || byUrl.get(encodePath(target)) || (target.endsWith('/') ? byUrl.get(target.slice(0, -1)) : null);
    // Assets are valid internal hrefs too (e.g. downloads); do not require HTML.
    const asset = path.join(DOCS, target.replace(/^\//, ''));
    if (!targetFile && !existsSync(asset)) {
      if (inheritedFromMirror(fromUrl, href)) warn(`link inherited unresolved from the mirror: ${fromUrl} -> ${href}`);
      else { brokenLinks += 1; fail('links', `${fromUrl} -> ${href}`); }
      continue;
    }
    if (fragment && targetFile) {
      let id;
      try { id = decodeURIComponent(fragment); } catch { id = fragment; }
      if (!new RegExp(`\\sid="${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(read(targetFile))) {
        if (inheritedFromMirror(fromUrl, href)) warn(`fragment inherited unresolved from the mirror: ${fromUrl} -> ${href}`);
        else { brokenFragments += 1; fail('fragments', `${fromUrl} -> ${href}`); }
      }
    }
  }
}
if (!brokenLinks) ok('internal links: all resolve');
if (!brokenFragments) ok('internal fragments: all resolve');

// 5. Search and bilingual navigation are runtime features, not visual promises.
const pagefind = path.join(DOCS, 'pagefind', 'pagefind-entry.json');
if (!existsSync(pagefind)) fail('search', 'docs/pagefind/pagefind-entry.json missing');
else {
  const meta = JSON.parse(read(pagefind));
  const indexed = Object.values(meta.languages || {}).reduce((sum, language) => sum + (language.page_count || 0), 0);
  if (indexed < htmlFiles.length - 2) fail('search', `Pagefind has ${indexed}/${htmlFiles.length} pages`);
  else ok(`search: Pagefind indexes ${indexed} pages`);
}
// Absolute URLs must advertise this site, not the mirror it is derived from.
// Only hreflang="en" may legitimately point at the mirror.
{
  const sitemap = read(path.join(DOCS, 'sitemap.xml'));
  const robots = read(path.join(DOCS, 'robots.txt'));
  const locs = (sitemap.match(/<loc>/g) || []).length;
  if (sitemap.includes('mirrortproto.github.io')) fail('host', 'sitemap.xml advertises the mirror host');
  else if (locs < htmlFiles.length - 2) fail('host', `sitemap.xml lists only ${locs} of ${htmlFiles.length} pages`);
  else ok(`sitemap: ${locs} URLs on this site's host`);
  if (robots.includes('mirrortproto.github.io') || !robots.includes('Sitemap:')) fail('host', 'robots.txt does not reference this site\'s sitemap');
  else ok('robots.txt references this site\'s sitemap');

  let strayHost = 0, missingAssets = 0;
  for (const file of htmlFiles) {
    const html = read(file);
    const rel = asPosix(path.relative(DOCS, file));
    for (const match of html.matchAll(/https:\/\/mirrortproto\.github\.io[^"']*/g)) {
      const context = html.slice(Math.max(0, match.index - 140), match.index);
      // Legitimate: the English alternate, per-paragraph original links, and a
      // site-owned page that deliberately cites the mirror as its source.
      if (/hreflang="en"|para-trans|source-note|href="/.test(context)) continue;
      strayHost += 1;
      if (strayHost <= 3) fail('host', `unexpected mirror URL in ${rel}: ${match[0]}`);
      break;
    }
    if (!html.includes('/css/style.css') || !html.includes('/css/translation.css') || !html.includes('/js/translation.js')) {
      missingAssets += 1;
      fail('assets', `mirror stylesheet or translation assets not linked: ${rel}`);
    }
  }
  if (!strayHost) ok('canonical host: no unexpected mirror URLs');
  if (!missingAssets) ok('assets: mirror style.css reused, translation.css/js linked on every page');
}

// The menu must keep the mirror's original entries — same groups, same pages, in
// the same order — while displaying Russian wording. A lost entry would drop a
// documentation page out of navigation entirely.
const nav = JSON.parse(read(path.join(BUILD, '_data', 'nav.json')));
const mirrorNav = JSON.parse(read(path.join(MIRROR, '_data', 'nav.json')));
const signature = (data) => (data.sections || [])
  .map((group) => `${group.key}:${(group.items || []).map((item) => item.url).join(',')}`)
  .join('|');
if (signature(nav) !== signature(mirrorNav)) fail('menu', 'menu entries or their order differ from the mirror');
else ok(`menu: mirror entries preserved (${(nav.sections || []).reduce((n, g) => n + (g.items || []).length, 0)} pages)`);

// Breadcrumb trails must keep the mirror's shape: same entries, same order,
// including the current page. Only the wording may differ.
{
  const ours = JSON.parse(read(path.join(BUILD, '_data', 'crumbs.json')));
  let mismatched = 0;
  for (const rel of mirrorPages) {
    const doc = matter(read(path.join(MIRROR, rel)));
    if (!Array.isArray(doc.data.crumbs)) continue;
    const url = rel === 'index.md' ? '/' : `/${rel.replace(/\.md$/, '').replace(/\/index$/, '')}/`;
    const expected = doc.data.crumbs.map((crumb) => crumb.url).join(' > ');
    const actual = (ours[url] || []).map((crumb) => crumb.url).join(' > ');
    if (expected !== actual) {
      mismatched += 1;
      fail('breadcrumbs', `trail differs from the mirror on ${url}`);
    }
  }
  if (!mismatched) ok('breadcrumbs: trails match the mirror on every page');
}

let untranslatedNav = 0;
for (const group of nav.sections || []) {
  if (!String(group.ruTitle || '').trim()) untranslatedNav += 1;
  for (const item of group.items || []) if (!String(item.ruTitle || '').trim()) untranslatedNav += 1;
}
if (untranslatedNav) fail('menu', `${untranslatedNav} menu entries have no Russian wording`);
else ok('menu: every entry has Russian wording');

// The interface itself is Russian. English survives only as untranslated
// documentation text inside articles, never as site chrome.
const home = read(path.join(DOCS, 'index.html'));
const leftovers = ['Skip to content', 'Site Source Code', 'aria-label="Sections"', 'aria-label="Color theme"', 'aria-label="Pages in this section"']
  .filter((needle) => home.includes(needle));
if (leftovers.length) fail('interface', `English interface strings remain: ${leftovers.join(', ')}`);
else ok('interface: site chrome is Russian');

// Every page is a segment-for-segment translation of a mirror page, so a page
// with real prose must carry translation labels. A page without them would give
// the reader no way to tell translated text from anything else.
{
  let unmarked = 0;
  for (const file of htmlFiles) {
    const html = read(file);
    const rel = asPosix(path.relative(DOCS, file));
    const article = html.slice(html.indexOf('<article'), html.indexOf('</article>'));
    if (!article) continue;
    // A short reference page may legitimately have no translated paragraph yet;
    // only pages with several paragraphs are expected to show labels.
    const paragraphs = (article.match(/<p id="p-\d+"/g) || []).length;
    if (paragraphs >= 3 && !article.includes('para-trans')) {
      unmarked += 1;
      if (unmarked <= 5) fail('provenance', `page has prose but no translation labels: ${rel}`);
    }
  }
  if (!unmarked) ok('provenance: every page with prose carries translation labels');
}

if (warnings.length) {
  console.log(`\n${warnings.length} inherited upstream defect(s), reproduced faithfully and not treated as regressions:`);
  for (const message of warnings.slice(0, 10)) console.log(`WARN ${message}`);
}

if (failures) {
  console.error(`\n${failures} verification failure(s):`);
  for (const [group, rows] of samples) for (const row of rows) console.error(`FAIL [${group}] ${row}`);
  process.exit(1);
}
console.log('\nAll mirror-derived translation checks passed.');
