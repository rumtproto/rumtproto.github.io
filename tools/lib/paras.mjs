// Paragraph numbering helper.
//
// The built pages give every <p> inside <article> a sequential id="p-N"
// (see the `paragraph-anchors` transform in eleventy.config.mjs). The English
// mirror numbers its paragraphs the same way, so [@t:N] markers must use the
// number the *mirror* assigns. This module reproduces that numbering from a
// markdown body by rendering it with the same markdown-it configuration
// Eleventy uses, then walking the resulting <p> elements in document order.
import markdownIt from 'markdown-it';

// Eleventy 3.x default markdown-it options.
export const md = markdownIt({ html: true, breaks: false, linkify: false });

/** Render a markdown body exactly like Eleventy does. */
export function render(body) {
  return md.render(body);
}

/**
 * Paragraph texts of a rendered markdown body, in the order the
 * `paragraph-anchors` transform numbers them (1-based).
 */
export function paragraphsOfHtml(html) {
  const out = [];
  const re = /<p>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  return out;
}

export function paragraphsOf(body) {
  return paragraphsOfHtml(render(body));
}

/** Strip tags/entities down to comparable plain text. */
export function plain(s) {
  return s
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Split a markdown body into top-level blocks, tagging which ones become a
 * <p> (and therefore consume a paragraph number). Fenced code, tables, lists,
 * headings and raw HTML blocks are returned untouched.
 */
export function blocks(body) {
  const lines = body.split('\n');
  const out = [];
  let buf = [];
  let inFence = false;
  let fence = '';
  const flush = () => {
    if (buf.length) out.push(buf.join('\n'));
    buf = [];
  };
  for (const line of lines) {
    const t = line.trim();
    const fm = t.match(/^(```+|~~~+)/);
    if (fm && !inFence) {
      flush();
      inFence = true;
      fence = fm[1][0].repeat(3);
      buf.push(line);
      continue;
    }
    if (inFence) {
      buf.push(line);
      if (t.startsWith(fence)) {
        inFence = false;
        flush();
      }
      continue;
    }
    // a line holding only a non-breaking space is content, not a separator
    if (/^[ \t]*$/.test(line)) {
      flush();
      continue;
    }
    buf.push(line);
  }
  flush();
  return out;
}
