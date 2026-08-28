// @ts-nocheck
// Russian build configuration.
//
// The English mirror owns the baseline implementation. We register that exact
// configuration through a small path-rewriting proxy, so transforms (image
// handling, media blocks, CSS/JS/HTML minification, Pagefind-friendly markup)
// stay in lockstep with mirrortproto while inputs come from generated `build/`.
// The additions below only add Russian presentation: original heading anchors
// and non-invasive translation / term / note labels.

import path from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import mirrorConfig from './mirror/eleventy.config.js';

const MIRROR = 'https://mirrortproto.github.io';
const readJson = (file, fallback = {}) => existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : fallback;
const ANCHORS = readJson('build/_data/anchors.json');
const TERMS = readJson('i18n/terms.json');
const TERMS_CI = new Map(Object.entries(TERMS).map(([key, value]) => [key.toLowerCase(), value]));

const ICON_TRANS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M3 8l3-3M3 8l3 3M13 8l-3-3M13 8l-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_TERM = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5h10v13l-5-3.5-5 3.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const ICON_NOTE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a4.2 4.2 0 0 1 2.6 7.5c-.5.4-.6.8-.6 1.4h-4c0-.6-.1-.6-1.1-1.4A4.2 4.2 0 0 1 8 2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.6 13.5h2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const attrEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function remapPaths(value) {
  if (typeof value === 'string') return value.replace(/^(?:src|crawled)(?=\/|$)/, 'build');
  if (Array.isArray(value)) return value.map(remapPaths);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, val]) => [remapPaths(key), remapPaths(val)]));
  return value;
}

function pageUrl(page) {
  // Eleventy v3 passes either a page object or just outputPath depending on the
  // transform hook. Support both forms; otherwise labels silently disappear.
  const raw = typeof page === 'string' ? page : String(page?.inputPath || '');
  const input = raw.replace(/\\/g, '/');
  const marker = input.includes('/docs/') ? '/docs/' : '/build/';
  const at = input.lastIndexOf(marker);
  let rel = at === -1 ? input.replace(/^\.?\/?(?:build|docs)\//, '') : input.slice(at + marker.length);
  rel = rel.replace(/(?:\.md|\/index\.html|\.html)$/, '');
  if (rel === 'index' || !rel) return '/';
  return '/' + rel.replace(/\/index$/, '') + '/';
}

const htmlOutput = (page) => {
  const out = typeof page === 'string' ? page : page?.outputPath;
  return typeof out === 'string' && out.endsWith('.html');
};

export default function russianConfig(eleventyConfig) {
  // build/ is deliberately Git-ignored because it is generated, but it is also
  // Eleventy's only input. Do not let the default Git-ignore integration hide
  // every template during a clean production build.
  eleventyConfig.setUseGitIgnore(false);

  // Browser code is authored in client/*.ts, bundled into build/js by esbuild,
  // and copied by the mirror's existing JavaScript passthrough rule.

  // This has to run *before* the mirror's paragraph-anchor transform. A note is
  // translator-owned content and must receive n-N rather than consume p-N, or a
  // single explanation would shift every subsequent original paragraph link.
  eleventyConfig.addTransform('extract-translator-notes', (content, page) => {
    if (typeof content !== 'string' || !htmlOutput(page)) return content;
    const start = content.indexOf('<article');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    let n = 0;
    const article = content.slice(start, end).replace(/<p>\s*\[@note\]\s*([\s\S]*?)<\/p>/g, (_all, body) => {
      n += 1;
      return `<aside id="n-${n}" class="translator-note">[@note] ${body}<a class="p-anchor" href="#n-${n}" aria-label="Ссылка на пояснение переводчика">¶</a></aside>`;
    });
    return content.slice(0, start) + article + content.slice(end);
  });

  // The vendored config hard-codes `src/...` only in its explicit passthrough
  // paths. Rewrite those paths, retain every other method unchanged and use its
  // tested build transforms verbatim.
  const proxy = new Proxy(eleventyConfig, {
    get(target, prop, receiver) {
      if (prop === 'addPassthroughCopy') return (entry) => target.addPassthroughCopy(remapPaths(entry));
      if (prop === 'addCollection') return (name, factory) => target.addCollection(name, (api) => factory(new Proxy(api, {
        get(collection, key, apiReceiver) {
          if (key === 'getAll') return () => collection.getAll().map((item) => Object.create(item, {
            inputPath: {
              value: item.inputPath.replace('/build/', '/crawled/'),
              enumerable: true,
            },
          }));
          const value = Reflect.get(collection, key, apiReceiver);
          return typeof value === 'function' ? value.bind(collection) : value;
        },
      })));
      const value = Reflect.get(target, prop, receiver);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });
  mirrorConfig(proxy);

  // Translate labels produced by upstream transforms (and the generated search
  // page) after registering the mirror configuration. These strings are hidden
  // visually but remain part of the Russian interface for screen-reader users.
  eleventyConfig.addTransform('russian-upstream-accessibility', (content, page) => {
    if (typeof content !== 'string' || !htmlOutput(page)) return content;
    return content
      .replaceAll('aria-label="Link to this paragraph"', 'aria-label="Ссылка на этот абзац"')
      .replaceAll('aria-label="View image"', 'aria-label="Открыть изображение"')
      .replaceAll('aria-label="Search result pages"', 'aria-label="Страницы результатов поиска"');
  });

  // Upstream's helper embeds its own host. The Russian breadcrumb data uses the
  // same shape, but JSON-LD items must advertise this publication's canonical URL.
  eleventyConfig.addFilter('breadcrumbJson', (trail) => JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.title,
      item: crumb.url.startsWith('http') ? crumb.url : `https://rumtproto.github.io${crumb.url}`,
    })),
  }).replace(/</g, '\\u003c'));

  // Reattach original English heading ids. The mirror source determines the
  // ordered ids, so translation wording can never alter cross-site deep links.
  eleventyConfig.addTransform('russian-heading-anchors', (content, page) => {
    if (typeof content !== 'string' || !htmlOutput(page)) return content;
    const anchorData = ANCHORS[pageUrl(page)] || {};
    const ids = anchorData.ids;
    const aliases = anchorData.aliases || [];
    if (!ids?.length) return content;
    const start = content.indexOf('<article');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    let index = 0;
    let article = content.slice(start, end);
    const headings = article.match(/<h[1-6][^>]*\sid="[^"]*"/g) || [];
    if (headings.length !== ids.length) return content; // verifier reports it
    article = article.replace(/<h([1-6])([^>]*?)\sid="([^"]*)"([^>]*)>([\s\S]*?)<\/h\1>/g, (_all, level, before, generated, after, inner) => {
      const position = index++;
      const original = ids[position];
      const extra = new Set([generated, ...(Array.isArray(aliases[position]) ? aliases[position] : [aliases[position]])].filter((id) => id && id !== original));
      const alias = [...extra].map((id) => `<span class="heading-alias" id="${attrEsc(id)}"></span>`).join('');
      const body = inner.replace(/(<a class="header-anchor" href=")[^"]*(")/, `$1#${attrEsc(original)}$2`);
      return `${alias}<h${level}${before} id="${attrEsc(original)}"${after}>${body}</h${level}>`;
    });
    return content.slice(0, start) + article + content.slice(end);
  });

  // The marker protocol is deliberately generated-only:
  // [@i18n] confirms a real lookup was applied; [@term:X] and [@note] originate
  // from i18n/annotations.json. All three are removed before the page is served.
  eleventyConfig.addTransform('russian-translation-labels', (content, page) => {
    if (typeof content !== 'string' || !htmlOutput(page)) return content;
    const start = content.indexOf('<article');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    const url = pageUrl(page);
    // Exactly one tooltip per label: `data-tip` is rendered by our stylesheet,
    // and the accessible name is carried by aria-label. A `title` here would
    // make the browser draw a second, native tooltip on top of ours.
    const trans = (n) => {
      const tip = `Перевод: абзац ${n} английского зеркала. Открыть исходный текст.`;
      return `<a class="para-label para-trans" href="${MIRROR}${url}#p-${n}" rel="noopener" aria-label="${tip}" data-tip="${tip}">${ICON_TRANS}</a>`;
    };
    const term = (name) => {
      const gloss = TERMS_CI.get(String(name).trim().toLowerCase());
      const tip = gloss ? `Термин: ${attrEsc(name)} — ${attrEsc(gloss)}` : `Термин: ${attrEsc(name)}`;
      return `<span class="para-label para-term" tabindex="0" role="note" aria-label="${tip}" data-tip="${tip}">${ICON_TERM}</span>`;
    };
    const note = () => {
      const tip = 'Пояснение переводчика: этого фрагмента нет в английском оригинале.';
      return `<span class="para-label para-note" tabindex="0" role="note" aria-label="${tip}" data-tip="${tip}">${ICON_NOTE}</span>`;
    };
    let article = content.slice(start, end);
    article = article.replace(/<(p|figure|aside)([^>]*\bid="([pn])-([0-9]+)"[^>]*)>([\s\S]*?)<\/\1>/g, (whole, tag, attrs, family, number, inner) => {
      let body = inner;
      const markers = [...body.matchAll(/^\s*\[@(i18n|note|term:([^\]]+))\]\s*/g)];
      if (!markers.length) return whole;
      let cursor = 0;
      const labels = [];
      for (const match of markers) {
        if (match.index !== cursor) break;
        cursor += match[0].length;
        if (match[1] === 'i18n' && family === 'p') labels.push(trans(number));
        else if (match[1] === 'note') labels.push(note());
        else if (match[2]) labels.push(term(match[2]));
      }
      body = body.slice(cursor);
      return `<${tag}${attrs}><span class="para-labels">${labels.join('')}</span>${labels.length ? ' ' : ''}${body}</${tag}>`;
    });
    // Tight list items and table cells are not paragraph-anchored by the mirror;
    // they still receive term/note labels, while [@i18n] is simply removed.
    article = article.replace(/\[@i18n\]\s*/g, '');
    article = article.replace(/\[@term:([^\]]+)\]\s*/g, (_all, name) => `<span class="para-labels">${term(name)}</span> `);
    article = article.replace(/\[@note\]\s*/g, `<span class="para-labels">${note()}</span> `);
    return content.slice(0, start) + article + content.slice(end);
  });

  return {
    dir: { input: 'build', output: 'docs', includes: '_includes', data: '_data' },
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
  };
}
