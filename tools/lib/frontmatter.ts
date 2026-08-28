// @ts-nocheck
// Russian <title> and <meta description> for every mirror page.
//
// The mirror's front matter is metadata *derived from the page itself*: `title`
// is the H1, `description` is the opening paragraph, shortened to 180 characters
// at a word boundary. Both are therefore already present in the translation
// memory as ordinary segments — they must not be translated a second time, and
// they must never be left in English while the visible page is Russian.
//
// This module reconstructs the same derivation on the Russian side:
//
//   title        H1 translation, or the schema entity name kept verbatim
//   description  translation of the exact paragraph the mirror shortened,
//                shortened again by the identical rule
//
// Anything that cannot be derived is reported, never guessed.

import { segments } from './segment.js';
import { isNeverTranslated } from './never-translate.js';

/** The mirror's shortening rule, reproduced exactly (verified on all 161 cases). */
export const LIMIT = 180;
export function shorten(text) {
  const value = String(text).replace(/\s+/g, ' ').trim();
  if (value.length <= LIMIT) return value;
  return value.slice(0, LIMIT).replace(/\s+\S*$/, '') + '…';
}

const squash = (s) => String(s).replace(/\s+/g, ' ').trim();
const stripLinks = (s) => s
  .replace(/!\[([^\]]*)\]\([^)]*(?:\s+"[^"]*")?\)/g, '$1')
  .replace(/\[([^\]]*)\]\([^)]*(?:\s+"[^"]*")?\)/g, '$1');
const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const stripEmphasis = (s) => s.replace(/\*\*|__/g, '').replace(/[*`]/g, '');
const unescape = (s) => s.replace(/\\([\\`*_{}[\]()#+\-.!>|~])/g, '$1');
const firstLine = (s) => s.split('\n')[0];

/**
 * Every plain-text shape the mirror may have derived a description from. The
 * source segment keeps its Markdown, the description does not — but which parts
 * were removed varies (some keep `_emphasis_`, some do not), so each shape is
 * tried and the one that matched is applied to the Russian text as well.
 */
function shapes(text) {
  const out = [];
  const add = (label, fn) => { out.push({ label, fn }); };
  add('raw', (s) => squash(s));
  add('links', (s) => squash(stripLinks(s)));
  add('tags', (s) => squash(stripTags(stripLinks(s))));
  add('plain', (s) => squash(stripEmphasis(stripTags(stripLinks(s)))));
  add('plain+unescape', (s) => unescape(squash(stripEmphasis(stripTags(stripLinks(s))))));
  add('tags+unescape', (s) => unescape(squash(stripTags(stripLinks(s)))));
  add('line', (s) => squash(stripTags(stripLinks(firstLine(s)))));
  add('line-plain', (s) => squash(stripEmphasis(stripTags(stripLinks(firstLine(s))))));
  add('line-plain+unescape', (s) => unescape(squash(stripEmphasis(stripTags(stripLinks(firstLine(s)))))));
  return out.map((shape) => ({ ...shape, value: shape.fn(text) }));
}

/**
 * Locates the segment the mirror derived `description` from and returns the same
 * derivation applied to that segment's Russian translation.
 *
 * Returns null when no segment matches or the matching segment has no
 * translation yet: an English description is a visible gap to be reported, not
 * something to paper over with a machine guess.
 */
export function deriveDescription(description, body, translate) {
  const target = squash(description);
  if (!target) return null;
  const truncated = target.endsWith('…') ? target.slice(0, -1) : null;
  for (const segment of segments(body)) {
    for (const shape of shapes(segment.text)) {
      const matches = shape.value === target
        || (truncated !== null && shape.value.length > target.length && shape.value.startsWith(truncated));
      if (!matches) continue;
      const russian = translate(segment.text);
      if (typeof russian !== 'string' || !russian.trim() || russian === segment.text) return null;
      return shorten(shape.fn(russian));
    }
  }
  return null;
}

/**
 * Russian front matter for one page.
 *
 * `overrides` wins over everything (site-owned pages, proper nouns). Otherwise
 * the title comes from the memory and the description is re-derived. `keepTitle`
 * marks pages whose title is a schema entity name and must stay verbatim.
 */
export function russianFrontMatter({ data, content, translate, override = {}, keepTitle = false }) {
  const result = { title: null, description: null, missing: [] };
  const title = String(data.title || '').trim();
  if (override.title) result.title = override.title;
  else if (!title) result.title = null;
  // A schema entity, a file name or a product name is the same string in both
  // languages; the same inventory that governs the body governs the tab title.
  else if (keepTitle || isNeverTranslated(title)) result.title = title;
  else {
    const russian = translate(title);
    if (typeof russian === 'string' && russian.trim() && russian !== title) result.title = russian;
    else result.missing.push({ field: 'title', text: title });
  }

  const description = String(data.description || '').trim();
  if (override.description) result.description = override.description;
  else if (!description) result.description = null;
  else if (isNeverTranslated(description)) result.description = description;
  else {
    const direct = translate(description);
    if (typeof direct === 'string' && direct.trim() && direct !== description) result.description = shorten(direct);
    else {
      const derived = deriveDescription(description, content, translate);
      if (derived) result.description = derived;
      else result.missing.push({ field: 'description', text: description });
    }
  }
  return result;
}
