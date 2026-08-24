// Derives the Russian templates directly from the vendored mirror templates.
//
// Constrained replacements instead of a fork: mirror DOM, CSS classes and inline
// scripts stay byte-identical, so upstream visual and behavioural fixes arrive
// unchanged. Only user-visible strings and the site's own host are replaced, and
// the Russian additions are linked as separate assets (translation.css / .js).
//
// Every replacement must match exactly once. An upstream template change fails
// the build loudly instead of silently degrading the page.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const MIRROR_HOST = 'https://mirrortproto.github.io';
const SITE_HOST = 'https://rumtproto.github.io';

function patcher(file) {
  let text = readFileSync(file, 'utf8');
  const problems = [];
  return {
    // Mismatches are collected rather than thrown one at a time: after an
    // upstream template change the whole list of things to review should be
    // visible in a single run.
    once(from, to, label) {
      const count = text.split(from).length - 1;
      if (count !== 1) problems.push(`${label}: expected 1 match, got ${count}`);
      else text = text.replace(from, to);
      return this;
    },
    verify() {
      if (problems.length) {
        throw new Error(`${file} no longer matches ${problems.length} expected fragment(s):\n`
          + problems.map((p) => `  - ${p}`).join('\n')
          + '\n\nUpstream changed this template. Review the diff and update tools/generate_russian_templates.mjs.');
      }
      return this;
    },
    all(from, to) {
      text = text.split(from).join(to);
      return this;
    },
    get value() {
      return text;
    },
  };
}

// ---------------------------------------------------------------- layout.njk
const layout = patcher('mirror/src/_includes/layout.njk');

layout
  .once('<html lang="en">', '<html lang="ru">', 'document language')
  .once('<title>{{ title }} — MTProto Mirror</title>', '<title>{{ title }} — MTProto по-русски</title>', 'title')
  .once('<meta property="og:site_name" content="MTProto Mirror">', '<meta property="og:site_name" content="MTProto по-русски">\n<meta property="og:locale" content="ru_RU">', 'Open Graph site')
  .once(`<meta property="og:url" content="${MIRROR_HOST}{{ page.url | urlpath }}">`, `<meta property="og:url" content="${SITE_HOST}{{ page.url | urlpath }}">`, 'Open Graph URL')
  .once(`<meta property="og:image" content="${MIRROR_HOST}/apple-touch-icon.png">`, `<meta property="og:image" content="${SITE_HOST}/apple-touch-icon.png">`, 'Open Graph image')
  .once(`<link rel="canonical" href="${MIRROR_HOST}{{ page.url | urlpath }}">`, `<link rel="canonical" href="${SITE_HOST}{{ page.url | urlpath }}">\n<link rel="alternate" hreflang="en" href="${MIRROR_HOST}{{ page.url | urlpath }}">\n<link rel="alternate" hreflang="ru" href="${SITE_HOST}{{ page.url | urlpath }}">`, 'canonical and alternates')
  // Our stylesheet is linked after the mirror's, so it can only add rules.
  .once('<link rel="stylesheet" href="/css/style.css">', '<link rel="stylesheet" href="/css/style.css">\n<link rel="stylesheet" href="/css/translation.css">', 'translation stylesheet')
  // Breadcrumb wording is Russian i18n data keyed by URL, not per-page front matter.
  .once(`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{% for c in crumbs %}{"@type":"ListItem","position":{{ loop.index }},"name":"{{ c.title | htmlattr }}","item":"{% if c.url.startsWith('http') %}{{ c.url }}{% else %}${MIRROR_HOST}{{ c.url }}{% endif %}"}{% if not loop.last %},{% endif %}{% endfor %}]}`,
    `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{% for c in trail %}{"@type":"ListItem","position":{{ loop.index }},"name":"{{ c.title | htmlattr }}","item":"{% if c.url.startsWith('http') %}{{ c.url }}{% else %}${SITE_HOST}{{ c.url | urlpath }}{% endif %}"}{% if not loop.last %},{% endif %}{% endfor %}]}`,
    'breadcrumb metadata')
  .once('{% if crumbs and crumbs.length %}\n<script type="application/ld+json">', '{% set trail = crumbs[page.url] %}\n{% if trail and trail.length %}\n<script type="application/ld+json">', 'breadcrumb metadata condition')
  .once('<a class="skip-link" href="#content">Skip to content</a>', '<a class="skip-link" href="#content">К содержанию</a>', 'skip link')
  .once('<a class="brand" href="/">MTProto&nbsp;<span>Mirror</span></a>', '<a class="brand" href="/">MTProto&nbsp;<span>по-русски</span></a>', 'brand')
  .once('<nav class="top-nav" aria-label="Sections">', '<nav class="top-nav" aria-label="Разделы">', 'top nav label')
  .once('>Schema</a>', '>Схема</a>', 'top nav schema')
  .once('placeholder="Search" aria-label="Search (press / to focus)"', 'placeholder="Поиск" aria-label="Поиск (нажмите / для фокуса)"', 'search field')
  .once('<a class="search-button" href="/search/" aria-label="Search">', '<a class="search-button" href="/search/" aria-label="Поиск">', 'search button')
  .once('href="https://github.com/mirrortproto/mirrortproto.github.io"', 'href="https://github.com/rumtproto/rumtproto.github.io"', 'repository link')
  .once('<span class="source-link-text">Site Source Code</span>', '<span class="source-link-text">Исходный код</span>', 'repository label')
  .once('aria-label="Color theme"', 'aria-label="Цветовая тема"', 'theme group label')
  .once('title="System theme"', 'title="Системная тема"', 'system theme')
  .once('title="Light theme"', 'title="Светлая тема"', 'light theme')
  .once('title="Dark theme"', 'title="Тёмная тема"', 'dark theme')
  .once('title="Color theme: auto"', 'title="Цветовая тема: системная"', 'theme toggle')
  .once('<nav class="sidebar" aria-label="Pages in this section">', '<nav class="sidebar" aria-label="Страницы раздела">', 'sidebar label')
  // Menu keeps the mirror's groups, order and links; only the wording is Russian.
  .once('<span>{{ group.title }}</span>', '<span>{{ group.ruTitle or group.title }}</span>', 'group title')
  .once('>{{ item.title }}</a></li>', '>{{ item.ruTitle or item.title }}</a></li>', 'item title')
  .once('{% if crumbs and crumbs.length %}\n    <div class="crumbs">', '{% if trail and trail.length %}\n    <div class="crumbs">', 'visible breadcrumb condition')
  .once('{% for c in crumbs %}<a href="{{ c.url }}">{{ c.title }}</a>', '{% for c in trail %}<a href="{{ c.url }}">{{ c.title }}</a>', 'visible breadcrumbs')
  // Upstream marks the pages it generates itself (schema indexes, search, 404,
  // home) and points them at the nearest original instead of a counterpart.
  .once('<p class="generated-note">This page is generated by the mirror for convenience: the original documentation has no page like it.</p>',
    '<p class="generated-note">Эта страница создана зеркалом для удобства: в оригинальной документации такой страницы нет.</p>',
    'generated-page note')
  .once('{{ "Closest original" if generated else "Original" }}: <a href="{{ original }}" rel="noopener">{{ original }}</a>',
    '{{ "Ближайший оригинал" if generated else "Оригинал" }}: <a href="{{ original }}" rel="noopener">{{ original }}</a>',
    'source note')
  .once(`  A mirror of <a href="https://core.telegram.org" rel="noopener">core.telegram.org</a> (Telegram API, MTProto, Schema).
  Content snapshot: {{ site.backup_date }}.`,
    `  Русский перевод документации <a href="https://core.telegram.org" rel="noopener">core.telegram.org</a> (Telegram API, MTProto, схема TL).
  Снимок содержимого: {{ site.backup_date }}.`,
    'footer')
  // The mirror's inline scripts are NOT modified. Russian-only behaviour is
  // appended as a separate deferred file so mirror logic stays reusable as is.
  .once('</body>', '<script src="/js/translation.js" defer></script>\n</body>', 'translation script')
  .verify();

// Absolute mirror URLs are easy to miss when upstream adds a tag. Only two
// deliberate outbound references may keep one — the English alternate and the
// authored-page notice; anything else would publish the mirror's address as
// this site's own canonical URL.
{
  const allowed = ['hreflang="en"'];
  const stray = layout.value
    .split('\n')
    .filter((line) => line.includes(MIRROR_HOST) && !allowed.some((marker) => line.includes(marker)));
  if (stray.length) {
    throw new Error(`layout still points at the mirror host:\n${stray.map((l) => `  ${l.trim()}`).join('\n')}`);
  }
}

mkdirSync('build/_includes', { recursive: true });
writeFileSync('build/_includes/layout.njk', layout.value);

// ------------------------------------------------- sitemap.njk / robots.njk
// These carry an absolute host, so a verbatim copy would advertise the mirror's
// URLs as this site's canonical ones.
const sitemap = patcher('mirror/src/sitemap.njk').all(MIRROR_HOST, SITE_HOST);
writeFileSync('build/sitemap.njk', sitemap.value);
const robots = patcher('mirror/src/robots.njk').all(MIRROR_HOST, SITE_HOST);
writeFileSync('build/robots.njk', robots.value);

console.log('[templates] generated Russian layout, sitemap and robots from the mirror templates');
