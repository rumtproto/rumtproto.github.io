// @ts-nocheck
// Removes translations whose source text no longer occurs anywhere in the
// mirror, and page overrides for pages that no longer exist.
//
// Nothing is discarded silently: every removed pair is appended to
// i18n/retired.json, so an upstream reversion can restore it by hand.

import { existsSync, globSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { segments } from './lib/segment.js';

const MIRROR = 'mirror/crawled';
const STORE = 'i18n/segments.json';
const ARCHIVE = 'i18n/retired.json';

// Every segment the mirror currently renders.
const live = new Set();
const livePages = new Set();
for (const rel of globSync('**/*.md', { cwd: MIRROR })) {
  livePages.add(rel.replace(/\.md$/, '').replace(/\/index$/, '') || 'index');
  const doc = matter(readFileSync(path.join(MIRROR, rel), 'utf8'));
  for (const segment of segments(doc.content)) live.add(segment.text);
}

const store = JSON.parse(readFileSync(STORE, 'utf8'));
const archive = existsSync(ARCHIVE) ? JSON.parse(readFileSync(ARCHIVE, 'utf8')) : {};
archive.segments = archive.segments || {};

let removed = 0;
for (const [source, translation] of Object.entries(store)) {
  if (live.has(source)) continue;
  archive.segments[source] = translation;
  delete store[source];
  removed += 1;
}

let pageFiles = 0;
let pageKeys = 0;
for (const name of globSync('*.json', { cwd: 'i18n/pages' })) {
  const id = name.replace(/\.json$/, '').replace(/__/g, '/');
  const file = path.join('i18n/pages', name);
  const map = JSON.parse(readFileSync(file, 'utf8'));
  if (!livePages.has(id)) {
    archive.segments = { ...archive.segments, ...map };
    rmSync(file);
    pageFiles += 1;
    continue;
  }
  const kept = Object.fromEntries(Object.entries(map).filter(([key]) => live.has(key)));
  const dropped = Object.keys(map).length - Object.keys(kept).length;
  if (!dropped) continue;
  for (const [key, value] of Object.entries(map)) if (!live.has(key)) archive.segments[key] = value;
  pageKeys += dropped;
  if (Object.keys(kept).length) writeFileSync(file, JSON.stringify(kept, null, 1) + '\n');
  else { rmSync(file); pageFiles += 1; }
}

writeFileSync(STORE, JSON.stringify(store, null, 1) + '\n');
writeFileSync(ARCHIVE, JSON.stringify(archive, null, 1) + '\n');
console.log(`[prune] removed ${removed} unused translation(s), ${pageKeys} stale override key(s), ${pageFiles} empty override file(s)`);
console.log(`[prune] store now has ${Object.keys(store).length} keys; archived in ${ARCHIVE}`);
