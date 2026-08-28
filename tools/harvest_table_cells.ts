// @ts-nocheck
// One-time recovery of table-cell translations from the pre-migration tree.
//
// Reference pages keep their parameter tables as raw HTML, which the segmenter
// used to skip, so those cells never entered the translation memory. They are
// recovered here from the legacy Russian pages held in Git history: for each
// page the mirror's cells and the legacy cells are paired by position, and only
// exact, unambiguous pairs are kept.
//
//   node tools/harvest_table_cells.ts <legacy-tree>
//
// The legacy tree is expected to be a checkout of the old `src/` directory, e.g.
//   git worktree / git archive HEAD src | tar -x -C /tmp/legacy

import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { segments } from './lib/segment.js';
import { isNeverTranslated } from './lib/never-translate.js';

const LEGACY = process.argv[2] || '/tmp/legacy-src';
const MIRROR = 'mirror/crawled';
const STORE = 'i18n/segments.json';
if (!existsSync(LEGACY)) throw new Error(`Legacy tree not found: ${LEGACY}`);

const store = JSON.parse(readFileSync(STORE, 'utf8'));
const choices = new Map();
let pagesPaired = 0;
let pagesSkipped = 0;

for (const rel of globSync('**/*.md', { cwd: MIRROR })) {
  const legacyPath = path.join(LEGACY, rel);
  if (!existsSync(legacyPath)) { pagesSkipped += 1; continue; }

  const enCells = segments(matter(readFileSync(path.join(MIRROR, rel), 'utf8')).content).filter((s) => s.kind === 'cell');
  const ruCells = segments(matter(readFileSync(legacyPath, 'utf8')).content).filter((s) => s.kind === 'cell');
  // Different cell counts mean the tables are not the same table any more;
  // pairing by position would then invent wrong translations.
  if (!enCells.length || enCells.length !== ruCells.length) { if (enCells.length) pagesSkipped += 1; continue; }
  pagesPaired += 1;

  for (let i = 0; i < enCells.length; i += 1) {
    const source = enCells[i].text;
    const translation = ruCells[i].text;
    if (!translation || translation === source) continue;
    if (isNeverTranslated(source)) continue;
    if (!choices.has(source)) choices.set(source, new Map());
    const variants = choices.get(source);
    variants.set(translation, (variants.get(translation) || 0) + 1);
  }
}

let added = 0;
let conflicts = 0;
for (const [source, variants] of choices) {
  if (Object.hasOwn(store, source)) continue;
  const ranked = [...variants.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ru'));
  if (ranked.length > 1) conflicts += 1;
  store[source] = ranked[0][0];
  added += 1;
}

writeFileSync(STORE, JSON.stringify(store, null, 1) + '\n');
console.log(`[cells] paired ${pagesPaired} page(s), skipped ${pagesSkipped}; recovered ${added} cell translation(s) (${conflicts} had context variants)`);
console.log(`[cells] store now has ${Object.keys(store).length} keys`);
