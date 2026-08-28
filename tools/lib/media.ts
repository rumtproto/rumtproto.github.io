// @ts-nocheck
// Translation of the text carried by media attributes.
//
// The mirror does not hide `alt`/`title`: its image and video placeholders paint
// that text into the page as a visible caption chip (`.img-alt`), and screen
// readers announce it. An untranslated attribute is therefore untranslated
// *page content*, not metadata — on a Russian page it reads as a defect.
//
// Attributes are handled as a separate pass rather than as segments, because a
// segment must stay a whole inline run: splitting one would change the document
// structure the whole build is built to preserve. Only the value inside
// `alt="…"` / `title="…"` of a raw-HTML `<img>` or `<video>` is ever rewritten,
// so markup, ordering and every byte outside the quotes are untouched.
//
// Markdown images (`![alt](src)`) are deliberately NOT handled here: their text
// is part of the surrounding inline run and is translated with that segment.

const MEDIA_TAG = /<(?:img|video|source)\b[^>]*>/gi;
const ATTRIBUTE = /\s(alt|title)="([^"]*)"/gi;

const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const encode = (s) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * True when an attribute value has no translatable text: emoji, punctuation,
 * numbers, a bare identifier, a file name, or an upstream placeholder such as
 * `TITLE`. These are reported by nobody and translated by nobody.
 */
export function isDecorative(value) {
  const text = decode(String(value)).trim();
  if (!text) return true;
  // No Latin or Cyrillic letter run of two: emoji, arrows, digits, "2️⃣".
  if (!/[A-Za-z\u0400-\u04FF]{2}/.test(text)) return true;
  // Already Russian: the caption lives inside an inline run whose translation
  // rewrote it in place, so there is nothing left for this pass to do.
  if (/[А-Яа-яЁё]/.test(text)) return true;
  if (/^(?:TITLE|YYY|XXX|IMAGE|PHOTO|VIDEO|LOGO|ICON|GIF)$/i.test(text)) return true;
  if (/^[A-Za-z_][\w.-]*$/.test(text) && !/^[A-Za-z]+$/.test(text)) return true; // file.png, icon_2x
  if (/^[a-z]+[A-Z][\w.]*$/.test(text)) return true; //                            camelCase
  if (/^https?:\/\//i.test(text)) return true;
  return false;
}

/**
 * Rewrites `alt`/`title` values of raw-HTML media tags using `translate`.
 *
 * `onMissing` is called with every value that has real text but no translation,
 * so the gap is counted instead of disappearing.
 */
export function translateMedia(body, translate, onMissing = () => {}) {
  return String(body).replace(MEDIA_TAG, (tag) => tag.replace(ATTRIBUTE, (whole, name, value) => {
    if (isDecorative(value)) return whole;
    const russian = translate(value);
    if (typeof russian === 'string' && russian.trim() && russian !== value) {
      return ` ${name}="${encode(decode(russian))}"`;
    }
    onMissing(value, name);
    return whole;
  }));
}

// A few pages carry prose inside a raw HTML block instead of Markdown: a figure
// caption in `<div class="blog_image_wrap">`, the `<p class="page_layer">Layer
// 223</p>` line on every schema page. Markdown-it treats such a block as one
// opaque node, so its text is not an inline run and never becomes a segment —
// yet the reader sees it. It is translated here, as text nodes, leaving every
// tag, attribute and byte of markup untouched.
const OPAQUE = /<(pre|code|script|style|textarea)\b[\s\S]*?<\/\1>/gi;
const TEXT_NODE = />([^<>]+)</g;

/** True when a text node is markup furniture rather than something to read. */
function isStructural(text) {
  const value = text.trim();
  if (value.length < 3) return true;
  if (!/[A-Za-z]{3}/.test(value)) return true;
  if (/^[\w.]+$/.test(value)) return true; //            a bare identifier or type name
  if (/^[\w.]+:\s*$/.test(value)) return true; //        `date:` inside a TL signature
  if (/[{};=]|=&gt;|\bfunction\b/.test(value)) return true; // inline script leftovers
  return false;
}

/**
 * Rewrites readable text nodes of raw-HTML blocks.
 *
 * `blocks` are the byte ranges markdown-it reported as html_block. A block that
 * contains a table cell is skipped whole: those cells are already segments, and
 * shifting their offsets here would desynchronise the segment pass.
 */
export function translateHtmlText(body, blocks, translate, onMissing = () => {}) {
  let out = '';
  let cursor = 0;
  for (const [start, end] of blocks) {
    out += body.slice(cursor, start);
    const block = body.slice(start, end);
    cursor = end;
    if (/<t[dh]\b/i.test(block)) { out += block; continue; }
    const stash = [];
    let text = block.replace(OPAQUE, (m) => { stash.push(m); return `\u0000${stash.length - 1}\u0000`; });
    text = text.replace(TEXT_NODE, (whole, inner) => {
      const value = inner.trim();
      if (isStructural(value)) return whole;
      const russian = translate(value);
      if (typeof russian === 'string' && russian.trim() && russian !== value) {
        return whole.replace(inner, inner.replace(value, russian));
      }
      onMissing(value);
      return whole;
    });
    out += text.replace(/\u0000(\d+)\u0000/g, (_, i) => stash[Number(i)]);
  }
  return out + body.slice(cursor);
}

/** Every translatable media attribute value in a page body, in document order. */
export function mediaValues(body) {
  const out = [];
  for (const tag of String(body).matchAll(MEDIA_TAG)) {
    for (const attribute of tag[0].matchAll(ATTRIBUTE)) {
      if (!isDecorative(attribute[2])) out.push({ name: attribute[1], value: attribute[2] });
    }
  }
  return out;
}
