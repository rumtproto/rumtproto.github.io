// @ts-nocheck
// Materialises the never-translated inventory into i18n/never-translate.json.
//
// The classifier in tools/lib/never-translate.ts is the authority at build
// time; this file is the reviewable snapshot of what it currently excludes, so
// the decision is visible in the repository instead of hidden in code. The
// `manual` list is preserved across runs and is the place to add entries by
// hand (proper nouns, standard terms).

import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { isTranslatable, segments } from './lib/segment.js';
import { isNeverTranslated } from './lib/never-translate.js';
import { schemaNames } from './lib/schema-names.js';

const OUT = 'i18n/never-translate.json';
const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {};

const buckets = { schemaNames: [], schemaLinks: [], typeExpressions: [], formulas: [], abbreviations: [] };
const names = schemaNames();
const seen = new Set();

for (const rel of globSync('**/*.md', { cwd: 'mirror/crawled' })) {
  const doc = matter(readFileSync(path.join('mirror/crawled', rel), 'utf8'));
  for (const segment of segments(doc.content)) {
    const text = segment.text.trim();
    if (!text || seen.has(text) || !isTranslatable(text) || !isNeverTranslated(text)) continue;
    seen.add(text);
    if (names.has(text)) buckets.schemaNames.push(text);
    else if (/^\[[^\]]+\]\(\/(?:type|method|constructor)\/[^)]*\)$/.test(text)) buckets.schemaLinks.push(text);
    else if (/^[A-Z][A-Z0-9]{1,5}$/.test(text)) buckets.abbreviations.push(text);
    else if (/\[[^\]]+\]\(\/(?:type|method|constructor)\//.test(text)) buckets.typeExpressions.push(text);
    else buckets.formulas.push(text);
  }
}

for (const list of Object.values(buckets)) list.sort((a, b) => a.localeCompare(b));

const output = {
  generated: new Date().toISOString(),
  note: 'Segments that have no translation by definition. Excluded from coverage statistics. Edit "manual" to add entries by hand; the other lists are derived from the mirror on every run.',
  manual: previous.manual || [],
  counts: Object.fromEntries(Object.entries(buckets).map(([name, list]) => [name, list.length])),
  ...buckets,
};
writeFileSync(OUT, JSON.stringify(output, null, 1) + '\n');
console.log(`[never] ${seen.size} segment(s) excluded by definition: ${Object.entries(output.counts).map(([k, v]) => `${k} ${v}`).join(', ')}`);
