// Generates `build/` from the vendored mirror plus i18n/.
//
// No translation is ever written back into mirror/: it remains a clean pinned
// upstream snapshot. No generated file is a source of truth either. On every
// build this tool starts from the same English source and substitutes only exact
// keys found in i18n/segments.json (or a page override). A missing key remains
// byte-for-byte English; it can never become an empty paragraph.

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { isTranslatable, rewrite, segments } from './lib/segment.mjs';
import { isSchemaName } from './lib/schema-names.mjs';
import { isNeverTranslated } from './lib/never-translate.mjs';

const MIRROR = 'mirror/src';
const STORE = 'i18n';
const OUT = 'build';
const SITE = 'site';

const load = (file, fallback = {}) => existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : fallback;
const tm = load(path.join(STORE, 'segments.json'));
const fm = load(path.join(STORE, 'frontmatter.json'));
const annotations = load(path.join(STORE, 'annotations.json'));
const pageId = (rel) => rel.replace(/\.md$/, '').replace(/\/index$/, '') || 'index';
const routeFor = (rel) => {
  const bare = rel.replace(/\.md$/, '').replace(/\/index$/, '');
  return bare && bare !== 'index' ? `/${bare}/` : '/';
};
const mirrorRoutes = new Set(globSync('**/*.md', { cwd: MIRROR }).map(routeFor));
const readPageMap = (id) => load(path.join(STORE, 'pages', `${id.replace(/\//g, '__')}.json`));
const json = (file, value) => writeFileSync(file, JSON.stringify(value, null, 1) + '\n');

if (!existsSync(MIRROR) || !existsSync(path.join(STORE, 'segments.json'))) {
  throw new Error('Missing mirror or translation store. Run sync_mirror and harvest_translations first.');
}

rmSync(OUT, { recursive: true, force: true });
cpSync(MIRROR, OUT, { recursive: true });
// Site-owned templates/styles/pages deliberately overlay the mirror only after
// it has been copied. They are the small, explicit layer where this Russian
// publication differs from a direct upstream translation.
// Additive assets only: the mirror's own css/ is copied first, so these sit
// beside it rather than replacing it.
if (existsSync(path.join(SITE, 'css'))) cpSync(path.join(SITE, 'css'), path.join(OUT, 'css'), { recursive: true });
if (existsSync(path.join(SITE, 'js'))) cpSync(path.join(SITE, 'js'), path.join(OUT, 'js'), { recursive: true });
mkdirSync(path.join(OUT, '_data'), { recursive: true });

const report = { pages: 0, segments: 0, translated: 0, untranslated: {}, annotations: 0, stalePageOverrides: [], normalizedLinks: 0, schemaNamesKept: 0, byDefinition: 0 };

// The upstream Markdown has a small number of relative references intended as
// section siblings (e.g. `TL` from /mtproto/TL-formal/). Static-directory URLs
// make those links resolve below the current page instead. Resolve only when an
// unambiguous mirror route exists; index links keep their natural child routes.
function resolveRelativeLink(rel, destination) {
  if (/^(?:\/|#|\?|https?:|mailto:|tel:|data:)/i.test(destination)) return destination;
  const hash = destination.indexOf('#');
  const stem = hash === -1 ? destination : destination.slice(0, hash);
  const fragment = hash === -1 ? '' : destination.slice(hash);
  if (!stem) return destination;
  const current = routeFor(rel).replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  const targetParts = stem.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  for (let depth = current.length; depth >= 0; depth -= 1) {
    const candidate = '/' + [...current.slice(0, depth), ...targetParts].join('/') + '/';
    if (mirrorRoutes.has(candidate)) return candidate + fragment;
  }
  return destination;
}
function normalizeRelativeLinks(body, rel) {
  let fenced = false;
  return body.split('\n').map((line) => {
    if (/^\s*(```|~~~)/.test(line)) { fenced = !fenced; return line; }
    if (fenced) return line;
    return line.replace(/(\]\()([^\s)]+)(\))/g, (_all, open, destination, close) => {
      const resolved = resolveRelativeLink(rel, destination);
      if (resolved !== destination) report.normalizedLinks += 1;
      return open + resolved + close;
    });
  }).join('\n');
}

for (const rel of globSync('**/*.md', { cwd: MIRROR }).sort()) {
  const id = pageId(rel);
  const input = readFileSync(path.join(MIRROR, rel), 'utf8');
  const doc = matter(input);
  const local = readPageMap(id);
  const usedLocal = new Set();
  const usedAnnotations = new Set();
  const ann = annotations[id] || {};
  const notesAfter = new Map();
  for (const note of ann.notes || []) {
    if (note.after) {
      const list = notesAfter.get(note.after) || [];
      list.push(note.text);
      notesAfter.set(note.after, list);
    }
  }
  let translated = 0;

  const body = rewrite(doc.content, (segment) => {
    report.segments += 1;
    if (!isTranslatable(segment.text)) return segment.text;
    // Hard guard: a constructor/method/type name is an identifier. Even if some
    // page once translated it, substituting here would rename an API entity.
    if (isSchemaName(segment.text)) {
      report.schemaNamesKept += 1;
      return segment.text;
    }
    const value = local[segment.text] ?? tm[segment.text];
    let output = segment.text;
    if (typeof value === 'string' && value.trim() && value !== segment.text) {
      translated += 1;
      if (Object.hasOwn(local, segment.text)) usedLocal.add(segment.text);
      // The marker is consumed by the Eleventy transform; it is never served.
      // A translated segment alone receives the translation-link label. This is
      // Markdown text rather than an HTML comment because the mirror minifier
      // correctly removes comments before our final label transform runs.
      const terms = ann.terms && ann.terms[segment.text];
      output = '[@i18n] ' + (terms && terms.length ? terms.map((term) => `[@term:${term}]`).join(' ') + ' ' : '') + value;
    } else if (isNeverTranslated(segment.text)) {
      // Has no translation by definition (schema name, type expression,
      // formula, abbreviation). Not outstanding work, so not counted.
      report.byDefinition += 1;
    } else {
      report.untranslated[segment.text] = (report.untranslated[segment.text] || 0) + 1;
    }
    const notes = notesAfter.get(segment.text);
    if (notes && notes.length) {
      // A blank line inside a tight/nested list ends the list and changes the
      // document tree. Keep such notes inline; ordinary paragraphs receive a
      // standalone note block (later converted to n-N before p-N numbering).
      const separator = segment.kind === 'paragraph' ? '\n\n' : ' <br>';
      output += notes.map((note) => `${separator}[@note] ${note}`).join('');
      usedAnnotations.add(segment.text);
    }
    return output;
  });

  const data = { ...doc.data, ...(fm[id] || {}), layout: 'layout.njk' };
  // Breadcrumb text is global Russian i18n data keyed by page URL; remove the
  // mirror's per-page English array so it cannot shadow that data in Eleventy.
  delete data.crumbs;
  // Section names must follow the mirror's values; the Russian layout translates
  // their presentation, but Pagefind filters retain stable machine identifiers.
  if (data.section === 'schema') data.section = 'schema';
  writeFileSync(path.join(OUT, rel), matter.stringify(normalizeRelativeLinks(body, rel), data));
  report.pages += 1;
  report.translated += translated;

  if (Object.keys(ann).length) {
    for (const source of Object.keys(ann.terms || {})) {
      if (segments(doc.content).some((s) => s.text === source)) usedAnnotations.add(source);
    }
    report.annotations += usedAnnotations.size;
  }
  const stale = Object.keys(local).filter((key) => !usedLocal.has(key));
  if (stale.length) report.stalePageOverrides.push({ page: id, keys: stale.length });
}

// Do NOT expose the complete memory as Eleventy global data: it is only needed
// while generating Markdown and making it page data would retain megabytes for
// every one of ~3,200 render contexts. The report is intentionally small and
// gives the rendered build an immutable provenance record.
json(path.join(OUT, '_data', 'translation-report.json'), {
  generatedAt: new Date().toISOString(),
  mirror: load('mirror/mirror.json'),
  pages: report.pages,
  segments: report.segments,
  translated: report.translated,
  normalizedRelativeLinks: report.normalizedLinks,
  translatableSegments: report.translated + Object.values(report.untranslated).reduce((a, b) => a + b, 0),
  neverTranslatedByDefinition: report.byDefinition,
  untranslatedUnique: Object.keys(report.untranslated).length,
  untranslatedOccurrences: Object.values(report.untranslated).reduce((a, b) => a + b, 0),
  stalePageOverrides: report.stalePageOverrides,
});
json(path.join(STORE, 'coverage.json'), {
  generatedAt: new Date().toISOString(),
  mirror: load('mirror/mirror.json'),
  untranslated: Object.fromEntries(Object.entries(report.untranslated).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))),
});

{
  const outstanding = Object.values(report.untranslated).reduce((a, b) => a + b, 0);
  const translatable = report.translated + outstanding;
  const percent = translatable ? ((report.translated / translatable) * 100).toFixed(1) : '100.0';
  console.log(`[apply] ${report.pages} pages; ${report.translated}/${translatable} translatable segments translated (${percent}%); `
    + `${Object.keys(report.untranslated).length} key(s) awaiting translation; `
    + `${report.byDefinition} segment(s) excluded by definition`);
}
if (report.stalePageOverrides.length) console.warn(`[apply] ${report.stalePageOverrides.length} page override file(s) contain stale keys`);
