// @ts-nocheck
// Segments that must never be translated, and must not be counted as missing.
//
// These are not "not translated yet" — they are text that has no translation by
// definition: schema entity names, TL type expressions, formulas and protocol
// abbreviations. Counting them as outstanding work hides the real backlog.
//
// The rules are deliberately narrow. Ordinary prose that merely mentions an
// identifier or contains a formula is still prose and stays in the statistics;
// only segments with no translatable words at all are excluded.

import { existsSync, readFileSync } from 'node:fs';
import { isSchemaName, schemaNames } from './schema-names.js';

let manual = null;
function manualList() {
  if (manual) return manual;
  manual = new Set();
  const file = 'i18n/never-translate.json';
  if (existsSync(file)) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    for (const entry of data.manual || []) manual.add(entry);
  }
  return manual;
}

const schemaLink = () => /\[[^\]]+\]\(\/(?:type|method|constructor)\/[^)]*\)/g;

/** A single link that points at a schema page: `[User](/type/User/)`. */
const isSchemaLink = (text) => /^\[[^\]]+\]\(\/(?:type|method|constructor)\/[^)]*\)$/.test(text.trim());

/**
 * A TL type expression: at least one schema link, and nothing but links and the
 * punctuation joining them, e.g. `[Vector](/type/Vector t/)<[int](/type/int/)>`.
 */
function isTypeExpression(text) {
  // Both spellings occur: Markdown links in prose, HTML links inside table cells.
  const htmlLink = /<a\s[^>]*href="\/(?:type|method|constructor)\/[^"]*"[^>]*>[\s\S]*?<\/a>/gi;
  if (!schemaLink().test(text) && !htmlLink.test(text)) return false;
  // A schema link whose label is a phrase is prose that happens to point at a
  // reference page — `<a href="/constructor/…">Leave events</a>` is a table cell
  // the reader reads, not a type. Only identifier labels make a type expression.
  const labels = [
    ...[...text.matchAll(/<a\s[^>]*href="\/(?:type|method|constructor)\/[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => m[1]),
    ...[...text.matchAll(/\[([^\]]+)\]\(\/(?:type|method|constructor)\/[^)]*\)/g)].map((m) => m[1]),
  ];
  if (labels.some((label) => !/^[A-Za-z_%#][\w.%#?]*$/.test(label.replace(/<[^>]+>/g, '').trim()))) return false;
  const rest = text
    .replace(schemaLink(), ' ')
    .replace(/<a\s[^>]*href="\/(?:type|method|constructor)\/[^"]*"[^>]*>[\s\S]*?<\/a>/gi, ' ')
    // A conditional field is written `flags.N?Type`, where `flags` links to the
    // TL documentation rather than to a schema page. It is still an identifier.
    .replace(/<a\s[^>]*href="[^"]*TL-combinators[^"]*"[^>]*>[\s\S]*?<\/a>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/[\\<>,;:()[\]{}|*_`\s.-]/gu, '');
  return !/\p{L}/u.test(rest);
}

/**
 * A formula or code line: once inline code, links and identifier-shaped tokens
 * are removed, no word of three or more letters remains. Catches lines such as
 * `msg_key = substr (msg_key_large, 8, 16);` while leaving prose alone.
 */
function isFormula(text) {
  const stripped = text
    .replace(/`[^`]*`/g, ' ')
    // A link to a schema page is an identifier and carries no prose. Every other
    // link keeps its label: `[Telegram Passport Encryption Details](/passport/…)`
    // is a translatable heading, not a formula, and deleting the label wholesale
    // silently froze thousands of link-only headings and list items in English.
    .replace(/\[[^\]]*\]\(\/(?:type|method|constructor)\/[^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, ' $1 ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/[A-Za-z_][A-Za-z0-9_.]*(?:\\?_[A-Za-z0-9_.]*)+/g, ' ') // msg\_key, dh_prime
    .replace(/\b[a-z]+\d[\w]*\b/gi, ' '); //                            sha256, int128
  // Two letters are already a word: `No`, `On`, `Up`. Requiring three silently
  // classified every short answer cell as a formula.
  const words = stripped.match(/\p{L}{2,}/gu) || [];
  if (words.length === 0) return true;
  // An assignment line: begins with an identifier and `=`, and the only words
  // left are call names such as `substr`. Prose that merely contains `p = q`
  // does not start that way and keeps its sentence vocabulary.
  const assignment = /^[A-Za-z_\\][\w\\.]*\s*:?=\s/.test(text.trim());
  return assignment && words.length <= 4;
}

/** An abbreviation such as HTTP, TCP, UDP, JSON — identical in Russian. */
const isAbbreviation = (text) => /^[A-Z][A-Z0-9]{1,5}$/.test(text.trim());

// Table cells arrive as raw HTML, so the same identifier appears wrapped in
// markup: `<strong>user_id</strong>`, `<a href="/type/long/">long</a>`. Strip the
// markup before judging, or those would look like prose.
const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim();
const isIdentifier = (s) => /^[A-Za-z_][\w.#?]*[._#?][\w.#?]*$/.test(s) || /^[a-z]+[A-Z][\w.]*$/.test(s);

export function isNeverTranslated(text) {
  const value = String(text).trim();
  if (!value) return true;
  if (manualList().has(value)) return true;
  if (isSchemaName(value)) return true;

  // The Name column of a parameter table is always a single bolded field name:
  // `<strong>flags</strong>`. It is an identifier even though it reads as a word.
  // TL field names are lower-case; a capitalised bold cell is a column heading
  // (`<strong>Writable</strong>`) and is ordinary prose.
  if (/^<strong>[a-z_][a-z0-9_.]*<\/strong>$/.test(value)) return true;

  // A cell that is nothing but inline code: parameter names, constants,
  // enumerated values — `<code>slug</code>`, `<code>files</code>, <code>mode</code>`.
  if (/^(?:<code>[^<]*<\/code>|[,;\s]|and|or)+$/i.test(value) && /<code>/.test(value)) return true;

  const bare = stripTags(value);
  if (bare && bare !== value) {
    if (manualList().has(bare)) return true;
    if (isSchemaName(bare)) return true;
    if (isAbbreviation(bare)) return true;
  }
  if (bare && isIdentifier(bare)) return true;
  if (isSchemaLink(value)) return true;
  if (isAbbreviation(value)) return true;
  if (isTypeExpression(value)) return true;
  if (isFormula(value)) return true;

  // Formal grammar of TL, written in BNF: `_combinator-decl_ ::= ...`.
  if (value.includes('::=')) return true;
  // A block of TL schema, with or without its comments: `boolFalse = Bool;`.
  if (/=\s*[A-Za-z][\w.]*\s*;/.test(value)) return true;
  // A function signature used as a heading: `**encrypt_data(payload, secret)**`.
  if (/^\*\*[A-Za-z_\\][\w\\_]*\s*\([^)]*\)\*\*$/.test(value)) return true;
  // TL shorthand for a bare type: `%(resPQ)`.
  if (/^%\([^)]*\)$/.test(value)) return true;
  // An RPC/HTTP status line used as a label: `403 FORBIDDEN`.
  if (/^\d{3}\s+[A-Z][A-Z_%\d]*$/.test(value)) return true;
  // A file-source entry left dangling by its table: `fileSourceMessage -`.
  if (/^[A-Za-z][\w.]*\s+-$/.test(value)) return true;
  // A polymorphic TL declaration: `vector {t:Type} # [t] = Vector t;`.
  if (/\{\s*\w+\s*:\s*(?:Type|#)\s*\}/.test(value)) return true;
  // Image markup, sometimes truncated mid-attribute: the mirror derives a page
  // description from an image-only paragraph, so the "text" is a tag, not prose.
  if (/^\[?<img\s/.test(value)) return true;
  // A palette entry: one or more RGB hex triplets, with or without the 0x prefix.
  if (/^(?:0x)?[0-9A-Fa-f]{6}(?:\s+(?:0x)?[0-9A-Fa-f]{6})*$/.test(value)) return true;
  // A price with its currency symbol: `AU$1.58`, `CN¥73,484.60`, `€400`.
  if (/^(?:[A-Z]{0,2}[$€£¥₽₹¢]|[A-Z]{3}\s?)[\d.,\s]+$/.test(value)) return true;
  // A data-centre alias row: `` `pluto` => DC 1 ``.
  if (/^`[a-z]+`\s*=>\s*DC\s*\d+$/.test(value)) return true;
  // A hex dump row: `**0000**: 3a2f9be2 ...`.
  if (/^\*\*\d{4}\*\*:/.test(value)) return true;
  // A block of hexadecimal constants, one per inline-code run.
  if (/<code>[0-9A-F]{8,}<\/code>/.test(value) && !/\p{L}{4,}/u.test(stripTags(value).replace(/[0-9A-F]/g, ''))) return true;
  // A lone link is exactly as translatable as its own label. `[User](/type/User/)`
  // and `[Telegram Stars](/api/stars/)` are an identifier and a product name; a
  // heading like `[Telegram Bot Features](/bots/features/)` is prose.
  // Emphasis may wrap the link (`**[Telegram Stars](…)**`) or sit inside it
  // (`[**Telegram Stars**](…)`); a leading dash belongs to the list, not the name.
  const stripped = value.replace(/^\s*\*\*([\s\S]*)\*\*\s*$/, '$1').replace(/^\s*[—–-]\s*/, '').trim();
  const lone = /^\[([^\]]+)\]\([^)]*\)$/.exec(stripped) || /^<a\s[^>]*>([\s\S]*?)<\/a>$/.exec(stripped);
  if (lone) {
    const label = lone[1].replace(/^\*\*|\*\*$/g, '').replace(/^\s*[—–-]\s*/, '').trim();
    if (label && label !== value && (/^[A-Za-z][\w.]*$/.test(stripTags(label)) || isNeverTranslated(label))) return true;
  }

  return false;
}

export { schemaNames };
