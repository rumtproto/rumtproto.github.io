// @ts-nocheck
// Generates build-time data from the pinned mirror + i18n.
// Kept separate from apply_translations.ts so the output is inspectable and
// so every regenerated datum has one clear source.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'node:fs';
import matter from 'gray-matter';
import { headingAliases, headingIds, headingTexts } from './lib/anchors.js';

const json = (file, data) => writeFileSync(file, JSON.stringify(data, null, 1) + '\n');
const pageId = (rel) => rel.replace(/\.md$/, '').replace(/\/index$/, '') || 'index';
// Historic core.telegram.org table-of-contents links encoded apostrophes as
// "-39". Keep this compatibility form even where current headings use a literal
// apostrophe (e.g. q-i-39m rather than q-im).
const numericEntitySlug = (text) => String(text)
  .replace(/[’']/g, ' 39')
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-+|-+$/g, '');

const anchors = {};
const pageBodies = {};
const mirrorCrumbs = {};
const mirrorTitles = {};
for (const rel of globSync('**/*.md', { cwd: 'mirror/crawled' })) {
  const doc = matter(readFileSync(path.join('mirror/crawled', rel), 'utf8'));
  const id = pageId(rel);
  const url = rel === 'index.md' ? '/' : '/' + id + '/';
  if (Array.isArray(doc.data.crumbs)) mirrorCrumbs[url] = doc.data.crumbs;
  if (typeof doc.data.title === 'string') mirrorTitles[url] = doc.data.title;
  const ids = headingIds(doc.content);
  const sourceAliases = headingAliases(doc.content);
  const texts = headingTexts(doc.content);
  // Some upstream TOCs use numeric HTML entities in a fragment while the
  // heading itself carries a literal apostrophe (q-i-39m… vs q-im…). Preserve
  // both historic spellings as compatibility anchors.
  const aliases = ids.map((id, i) => [...new Set([
    sourceAliases[i],
    numericEntitySlug(texts[i] || ''),
  ].filter((alias) => alias && alias !== id))]);
  // The inventory stays positional: the Eleventy transform reattaches ids by
  // heading index, so a heading whose text has no sluggable character ("#" on
  // the schema index, a Persian title on the Iranian CDN FAQ) keeps its empty
  // slot here. The verifier is what knows an empty id is not an anchor.
  anchors[url] = { ids, aliases };
  pageBodies[url] = doc.content;
}
// Some historic TOCs truncate long fragment ids. If a same-page reference is an
// unambiguous prefix of one heading id (or a compatibility alias), retain that
// exact spelling as another zero-height target rather than leaving a dead link.
for (const [url, body] of Object.entries(pageBodies)) {
  const entry = anchors[url];
  const fragments = new Set([
    ...[...body.matchAll(/\]\(#([^)\s]+)\)/g)].map((match) => match[1]),
    ...[...body.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]),
  ]);
  for (const fragment of fragments) {
    const candidates = entry.ids.map((id, i) => ({ i, values: [id, ...entry.aliases[i] || []] }))
      .filter(({ values }) => values.some((value) => value.startsWith(fragment)));
    if (candidates.length === 1) entry.aliases[candidates[0].i].push(fragment);
  }
  entry.aliases = entry.aliases.map((list) => [...new Set(list)]);
}
json('build/_data/anchors.json', anchors);

// `nav.json` stays structurally identical to the mirror data. The only added
// presentation fields are translations harvested by URL from the legacy site;
// callers display both title (the original) and ruTitle (the translation).
const nav = JSON.parse(readFileSync('mirror/crawled/_data/nav.json', 'utf8'));
const navTranslations = JSON.parse(readFileSync('i18n/nav.json', 'utf8'));
const ruByUrl = new Map(Object.entries(navTranslations.items || {}));
const groupRu = navTranslations.groups || { api: 'API', mtproto: 'MTProto', schema: 'Схема', other: 'Прочее' };
for (const group of nav.sections || []) {
  group.ruTitle = groupRu[group.key] || group.title;
  for (const item of group.items || []) item.ruTitle = ruByUrl.get(item.url) || item.title;
}
json('build/_data/nav.json', nav);

// Breadcrumbs: the trail itself (which entries, their URLs, their order,
// including the current page as the last entry) is the mirror's. Only the
// wording is Russian, resolved by URL. A URL without a translation keeps the
// mirror's English label rather than losing the entry.
const legacyCrumbs = JSON.parse(readFileSync('i18n/crumbs.json', 'utf8'));
const frontmatter = JSON.parse(readFileSync('i18n/frontmatter.json', 'utf8'));
const labels = new Map();
for (const [id, entry] of Object.entries(frontmatter)) {
  if (entry && typeof entry.title === 'string') labels.set(id === 'index' ? '/' : `/${id}/`, entry.title);
}
for (const [url, title] of ruByUrl) labels.set(url, title);
// Curated breadcrumb wording wins: it was written specifically for this strip.
for (const trail of Object.values(legacyCrumbs)) {
  for (const crumb of trail || []) if (crumb && crumb.url && crumb.title) labels.set(crumb.url, crumb.title);
}
// A schema identifier (inputPeerUser, User, messages.getHistory…) is a name, not
// prose: it must stay verbatim, so it is not counted as a missing translation.
const isIdentifier = (text) => /^[A-Za-z_][\w.]*$/.test(String(text));
const crumbs = {};
let translatedCrumbs = 0;
let identifierCrumbs = 0;
let untranslatedCrumbs = 0;
for (const [url, trail] of Object.entries(mirrorCrumbs)) {
  crumbs[url] = trail.map((crumb) => {
    const russian = labels.get(crumb.url);
    if (russian) translatedCrumbs += 1;
    else if (isIdentifier(crumb.title)) identifierCrumbs += 1;
    else untranslatedCrumbs += 1;
    return { url: crumb.url, title: russian || crumb.title };
  });
}
json('build/_data/crumbs.json', crumbs);

json('build/_data/site.json', {
  ...JSON.parse(readFileSync('mirror/crawled/_data/site.json', 'utf8')),
  mirror: JSON.parse(readFileSync('mirror/mirror.json', 'utf8')),
  language: 'ru',
});

console.log(`[data] ${Object.keys(anchors).length} anchor inventories; ${[...ruByUrl].length} menu translations; ${Object.keys(crumbs).length} breadcrumb trails (${translatedCrumbs} Russian, ${identifierCrumbs} schema identifiers, ${untranslatedCrumbs} untranslated)`);
