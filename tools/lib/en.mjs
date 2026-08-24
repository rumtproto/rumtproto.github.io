// Shared helper: converts a page of the dated backup into the *English* markdown
// body that mirrortproto.github.io is built from. Used by the translation
// pipeline (tools/gen_en.mjs) and by the coverage audit (tools/audit_pages.mjs).
//
// The conversion rules are kept byte-identical to tools/extract.mjs on purpose:
// the English markdown must be the exact source the mirror renders, otherwise
// the [@t:N] paragraph anchors would drift.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const ROOT = path.resolve('.');

export async function pickBackup(arg) {
  const dir = path.join(ROOT, 'backup');
  if (arg) return path.join(dir, arg);
  const dates = (await readdir(dir)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  if (!dates.length) throw new Error('no backup found: run tools/crawl.mjs first');
  return path.join(dir, dates[dates.length - 1]);
}

export function extractDiv(html, marker) {
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf('<div', start);
  let i = html.indexOf('>', start) + 1;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith('</div')) depth--;
    else depth++;
    if (depth === 0) return html.slice(tagStart, m.index + 6);
  }
  return null;
}

export function extractH1(html) {
  const m =
    html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/) || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return decode(m[1].replace(/<[^>]+>/g, '')).trim();
}

export function extractCrumbs(html) {
  const m = html.match(/<div class="dev_page_bread_crumbs">([\s\S]*?)<\/div>/);
  if (!m) return [];
  const crumbs = [];
  const re = /<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
  let c;
  while ((c = re.exec(m[1])) !== null) {
    crumbs.push({ url: c[1], title: decode(c[2].replace(/<[^>]+>/g, '')).trim() });
  }
  return crumbs;
}

export function decode(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&');
}

function stripNoise(html) {
  let h = html.replace(/<script[\s\S]*?<\/script>/g, '');
  h = h.replace(/<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g, '');
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, '');
  return h;
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.addRule('preCode', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_c, node) => '\n\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n\n',
});
td.addRule('pageSchemeDiv', {
  filter: (node) => node.nodeName === 'DIV' && /page_scheme/.test(node.getAttribute('class') || ''),
  replacement: (_c, node) => '\n\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n\n',
});
td.addRule('imgRaw', { filter: 'img', replacement: (_c, node) => node.outerHTML });
td.addRule('rawMediaDivs', {
  filter: (node) =>
    node.nodeName === 'DIV' &&
    /blog_(image_wrap|video_player_wrap|2images_wrap|3images_wrap|medium_image_wrap)/.test(
      node.getAttribute('class') || ''
    ),
  replacement: (_c, node) => '\n\n' + node.outerHTML + '\n\n',
});
td.keep(['table']);

export function sectionOf(p) {
  if (p === '/methods' || p === '/constructors' || p === '/types') return 'schema';
  if (p.startsWith('/constructor') || p.startsWith('/method') || p.startsWith('/type')) return 'ref';
  if (p.startsWith('/mtproto')) return 'mtproto';
  if (p.startsWith('/schema')) return 'schema';
  if (p.startsWith('/techfaq')) return 'faq';
  if (p === '/faq' || p.startsWith('/faq/')) return 'faq';
  return 'api';
}

export const slugify = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');

export const cleanInline = (s) =>
  s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, '').replace(/`/g, '').replace(/\*\*/g, '');

export function headingSlugs(md) {
  const slugs = new Set();
  let inFence = false;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = t.match(/^#{1,6}\s+(.+)$/);
    if (m) slugs.add(slugify(cleanInline(m[1])));
  }
  return slugs;
}

/**
 * Heading anchors of the ORIGINAL page, in document order.
 * core.telegram.org marks headings with `<a class="anchor" name="…">`, and every
 * cross-reference in the documentation addresses those names, so they are the
 * authoritative anchor ids and must survive translation.
 */
export function originalAnchors(html) {
  const content = extractDiv(html, '<div id="dev_page_content">') || extractDiv(html, '<div class="tl_page">') || html;
  const out = [];
  for (const m of content.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)) {
    const a = m[1].match(/<a[^>]*\s(?:name|id)="([^"]*)"/);
    out.push(a ? a[1] : '');
  }
  return out;
}

/** Convert one backup page to the English markdown body (no front matter). */
export function toMarkdown(html, rel) {
  const trimmed = html.trimStart();
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    return {
      title: rel.split('/').pop(),
      body:
        'Machine-readable data from the original site (JSON). View the [original](https://core.telegram.org/' +
        rel +
        ') for context.\n\n```json\n' +
        html.trim() +
        '\n```',
      crumbs: [],
      json: true,
    };
  }
  let content = extractDiv(html, '<div id="dev_page_content">') || extractDiv(html, '<div class="tl_page">');
  let body;
  if (!content) {
    const m = html.match(/<div class="dev_page_wrap">([\s\S]*?)<div class="footer_wrap">/);
    if (!m) return null;
    let raw = m[1].replace(/<div class="dev_page_head[\s\S]*?<\/div>\s*<\/div>/, '');
    raw = raw.replace(/<[^>]+>/g, '');
    body = '```\n' + decode(raw).trim() + '\n```';
  } else {
    body = td.turndown(stripNoise(content)).trim();
  }
  const title = extractH1(html) || rel.split('/').pop() || 'Telegram';
  return { title, body, crumbs: extractCrumbs(html), json: false };
}

/** Load the backup manifest and return { backup, pages, closure }. */
export async function loadBackup(arg) {
  const backup = await pickBackup(arg);
  const meta = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
  const closure = new Set(meta.pages.map((p) => p.path));
  return { backup, meta, closure };
}
