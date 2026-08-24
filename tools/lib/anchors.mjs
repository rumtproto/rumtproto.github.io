// Heading anchors.
//
// Cross-references in the original documentation point at English heading
// anchors (`/api/config/#restriction-add-platforms`). Those links are copied
// verbatim into the translation, so the translated headings must keep the
// original ids — otherwise every one of the ~40 000 anchor links on the site
// would break. This module computes the exact id markdown-it-anchor assigns to
// each heading of the English page, in document order.
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

// The English mirror slugifies with an ASCII-only rule.
export const slugifyEn = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');

const md = markdownIt({ html: true, breaks: false, linkify: false }).use(markdownItAnchor, {
  slugify: slugifyEn,
  permalink: markdownItAnchor.permalink.linkInsideHeader({
    symbol: '#',
    placement: 'after',
    class: 'header-anchor',
    ariaHidden: true,
  }),
});

/** Heading ids of an English page, in document order. */
export function headingIds(body) {
  const html = md.render(body);
  return [...html.matchAll(/<h[1-6][^>]*\sid="([^"]*)"/g)].map((m) => m[1]);
}

// core.telegram.org uses a slightly different slug rule than markdown-it-anchor:
// punctuation is *dropped* rather than turned into a separator, so "2.3.1 Autofill"
// becomes "231-autofill" and "someone else's upgrade" becomes "someone-elses-upgrade".
// Links inside the documentation use those ids, so every heading also gets the
// original slug as an alias anchor.
export const slugifyOriginal = (s) =>
  s
    .replace(/\\/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');

const plain = (s) =>
  s
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*|__|\*|_/g, '')
    .replace(/&[a-z]+;/g, ' ')
    .trim();

/** Heading texts of a page, in document order (fences ignored). */
export function headingTexts(body) {
  let inFence = false;
  const out = [];
  for (const line of body.split('\n')) {
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = t.match(/^#{1,6}\s+(.*)$/);
    if (m) out.push(plain(m[1]));
  }
  return out;
}

/** Alias ids (original-site slugs) per heading, empty string when identical. */
export function headingAliases(body) {
  const ids = headingIds(body);
  const texts = headingTexts(body);
  const seen = new Map();
  return texts.map((t, i) => {
    let a = slugifyOriginal(t);
    if (!a) return '';
    const n = seen.get(a) || 0;
    seen.set(a, n + 1);
    if (n) a = a + '-' + n;
    return a === ids[i] ? '' : a;
  });
}
