// Segmentation: splits a Markdown page into *translatable segments*.
//
// This is the single definition of "what a translation key is" for the whole
// project. Both halves of the pipeline go through it, so they cannot disagree:
//
//   tools/harvest.mjs  reads mirror + current Russian pages and pairs their
//                      segments positionally to seed the store;
//   tools/apply.mjs    reads mirror pages, looks every segment up in the store
//                      and rewrites the ones that have a translation.
//
// A segment is one *inline run* of the document: the text of a paragraph, of a
// heading, of a list item, of a table cell. Block structure (fences, HTML
// blocks, list markers, table pipes, blockquote markers) is never a segment and
// is therefore copied through byte for byte — which is what keeps a translated
// page structurally identical to its English original.
//
// Keys are the source text verbatim. That is deliberate: a key carries no page,
// no index and no hash, so the same English sentence translated once is
// translated everywhere, and a page that changes upstream loses translations
// only for the segments whose text actually changed.

import markdownIt from 'markdown-it';

const md = markdownIt({ html: true, breaks: false, linkify: false });

// Inline runs that must never be treated as prose. Checked against the *whole*
// trimmed segment: a segment that is nothing but a TL definition, an identifier,
// a URL or a number has no translatable content, and letting it into the store
// would invite a "translation" of something that must stay byte-identical.
// Deliberately permissive: a segment wrongly called prose merely appears in the
// "needs translation" list and stays English until someone adds a key, whereas a
// segment wrongly called an identifier can never be translated at all. An
// earlier version rejected every single word, which silently froze headings such
// as "Parameters" and "Result" in English on thousands of reference pages.
const NOT_PROSE = [
  /^`[^`]*`$/, //                          a single inline-code run
  /^<[^>]+>$/, //                          a bare HTML tag
  /^\W*$/u, //                             punctuation / symbols only
  /^[\d.,\s%+-]+$/, //                     numbers
  /^https?:\/\/\S+$/i, //                  a bare URL
  /^[A-Za-z_][\w.#?]*[._#?][\w.#?]*$/, //  dotted/underscored ids: msg_id, flags.3?true
  /^[a-z]+[A-Z][\w.]*$/, //                camelCase ids: inputPeerUser
];

/** True when a segment contains at least one word worth translating. */
export function isTranslatable(text) {
  const t = String(text).trim();
  if (!t) return false;
  if (NOT_PROSE.some((re) => re.test(t))) return false;
  // Must contain a letter run of 2+ that is not glued inside inline code.
  const bare = t.replace(/`[^`]*`/g, ' ').replace(/<[^>]+>/g, ' ');
  return /\p{L}{2,}/u.test(bare);
}


/**
 * Locates a multi-line inline run whose source lines carry decoration the parser
 * strips (a blockquote marker, or the indent of a list continuation).
 *
 * Returns the byte range of the run together with the decoration to re-apply
 * when writing a translation back, or null when the source cannot be matched —
 * in which case the caller reports a defect rather than losing the text.
 */
function placeMultiline(src, lines, lineStart, firstLine, text) {
  const textLines = text.split('\n');
  const first = lines[firstLine];
  if (first === undefined) return null;
  const offset = first.indexOf(textLines[0]);
  if (offset === -1) return null;
  if (textLines.length === 1) {
    const start = lineStart[firstLine] + offset;
    return { text, start, end: start + text.length, prefix: '' };
  }

  const continuation = lines[firstLine + 1];
  if (continuation === undefined) return null;
  // Only real indentation counts. `\s` would also swallow a non-breaking space,
  // which is content: a continuation line may consist of nothing else.
  const marker = /^(\s*>[ \t]?|[ \t]+)/.exec(continuation);
  const prefix = marker ? marker[1] : '';
  if (!prefix) return null;

  const lastIndex = firstLine + textLines.length - 1;
  if (lines[lastIndex] === undefined) return null;
  const start = lineStart[firstLine] + offset;
  const end = lineStart[lastIndex] + lines[lastIndex].length;
  const rebuilt = src.slice(start, end).split('\n')
    .map((line, i) => (i === 0 ? line : (line.startsWith(prefix) ? line.slice(prefix.length) : null)))
    .join('\n');
  if (rebuilt !== text) return null;
  return { text, start, end, prefix };
}

/**
 * Segments of a Markdown body, in document order.
 *
 * Each segment records the byte range of the inline run inside `body`, so a
 * caller can splice a translation in without re-rendering the document:
 *
 *   { text, start, end, kind, level }
 *
 * `kind` is informational (heading | paragraph | item | cell | html) and is used
 * for reporting and for the review UI, never for key computation.
 */
export function segments(body) {
  const src = String(body);
  const tokens = md.parse(src, {});
  const out = [];

  // An inline token carries the source-line range of its parent block. Its
  // content is present verbatim inside that range; using the range is essential
  // for deeply nested lists, where a global "next occurrence" cursor can jump
  // ahead to a repeated sentence and silently lose later segments.
  let fallbackCursor = 0;
  // Anything the parser produced but this function could not place is a defect,
  // not an acceptable loss: a dropped run is text that can never be translated
  // and never reported as missing. Collected here and surfaced to the caller.
  const dropped = [];
  const lines = src.split('\n');
  const lineStart = [];
  {
    let at = 0;
    for (const l of lines) {
      lineStart.push(at);
      at += l.length + 1;
    }
    lineStart.push(at);
  }

  let kind = 'paragraph';
  let level = 0;
  const stack = [];

  for (const tok of tokens) {
    switch (tok.type) {
      case 'heading_open':
        kind = 'heading';
        level = parseInt(tok.tag.slice(1), 10);
        break;
      case 'paragraph_open':
        kind = stack.includes('list') ? 'item' : 'paragraph';
        break;
      case 'th_open':
      case 'td_open':
        kind = 'cell';
        break;
      case 'bullet_list_open':
      case 'ordered_list_open':
        stack.push('list');
        break;
      case 'bullet_list_close':
      case 'ordered_list_close':
        stack.pop();
        break;
      case 'html_block': {
        // Reference pages carry their parameter tables as raw HTML, which the
        // Markdown parser treats as one opaque block. Without looking inside,
        // every column header and field description would be invisible to the
        // translation layer: never keyed, never translated, and — worse — never
        // reported as missing. Each cell's inner HTML becomes one segment; the
        // table markup itself is never touched.
        if (!tok.map) break;
        const from = lineStart[tok.map[0]];
        const block = src.slice(from, lineStart[tok.map[1]]);
        for (const cell of block.matchAll(/<(td|th)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
          const openLength = cell[0].indexOf('>') + 1;
          const raw = cell[2];
          const lead = raw.length - raw.trimStart().length;
          const text = raw.trim();
          if (!text) continue;
          const start = from + cell.index + openLength + lead;
          out.push({ text, start, end: start + text.length, kind: 'cell', level: 0 });
          fallbackCursor = Math.max(fallbackCursor, start + text.length);
        }
        break;
      }
      case 'inline': {
        const text = tok.content;
        if (text.trim()) {
          const from = tok.map ? lineStart[tok.map[0]] : fallbackCursor;
          const to = tok.map ? lineStart[tok.map[1]] : src.length;
          let idx = src.indexOf(text, from);
          // Markdown-it normally preserves inline content exactly. The fallback
          // handles rare normalisations while still refusing a match outside the
          // token's own block range.
          if (idx === -1 || idx + text.length > to) {
            idx = src.indexOf(text, fallbackCursor);
            if (idx === -1 || idx + text.length > to) idx = -1;
          }
          if (idx !== -1) {
            out.push({ text, start: idx, end: idx + text.length, kind, level, prefix: '' });
            fallbackCursor = Math.max(fallbackCursor, idx + text.length);
          } else if (tok.map) {
            // A run spanning several source lines is stored with decoration the
            // parser strips: `> ` for a blockquote, an indent for a list
            // continuation. The content therefore never appears verbatim. Recover
            // the range from the line span and remember the decoration, so a
            // translation can be written back with the same shape.
            const placed = placeMultiline(src, lines, lineStart, tok.map[0], text);
            if (placed) {
              out.push({ ...placed, kind, level });
              fallbackCursor = Math.max(fallbackCursor, placed.end);
            } else {
              dropped.push(text);
            }
          } else {
            dropped.push(text);
          }
        }
        kind = 'paragraph';
        level = 0;
        break;
      }
      default:
        break;
    }
  }
  if (dropped.length) {
    const error = new Error(`segmentation lost ${dropped.length} inline run(s); first: ${JSON.stringify(dropped[0].slice(0, 80))}`);
    error.dropped = dropped;
    throw error;
  }
  return out;
}

/**
 * Rewrites a Markdown body, replacing each segment with `map(segment)` when that
 * returns a string. Ranges are spliced back to front so earlier offsets stay
 * valid, and everything outside a segment is preserved byte for byte.
 */
export function rewrite(body, map) {
  const src = String(body);
  const segs = segments(src);
  let out = src;
  for (let i = segs.length - 1; i >= 0; i -= 1) {
    const rep = map(segs[i], i);
    if (typeof rep === 'string' && rep !== segs[i].text) {
      // A blockquote's marker belongs to the structure, not to the sentence, so
      // it is re-applied to every line the translation occupies.
      const value = segs[i].prefix ? rep.split('\n').join(`\n${segs[i].prefix}`) : rep;
      out = out.slice(0, segs[i].start) + value + out.slice(segs[i].end);
    }
  }
  return out;
}
