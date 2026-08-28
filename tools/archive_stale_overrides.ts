// @ts-nocheck
// Moves page-local keys no longer present on their current mirror page into a
// reviewable archive. They are never silently deleted: an upstream reversion can
// restore them by hand, while normal builds remain warning-free.

import { existsSync, globSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { segments } from './lib/segment.js';

const archiveFile = 'i18n/retired.json';
const archive = existsSync(archiveFile) ? JSON.parse(readFileSync(archiveFile, 'utf8')) : {};
let moved = 0;
for (const name of globSync('*.json', { cwd: 'i18n/pages' })) {
  const id = name.replace(/\.json$/, '').replace(/__/g, '/');
  const source = `mirror/crawled/${id || 'index'}.md`;
  if (!existsSync(source)) continue;
  const live = new Set(segments(matter(readFileSync(source, 'utf8')).content).map((segment) => segment.text));
  const file = path.join('i18n/pages', name);
  const map = JSON.parse(readFileSync(file, 'utf8'));
  const stale = Object.fromEntries(Object.entries(map).filter(([key]) => !live.has(key)));
  if (!Object.keys(stale).length) continue;
  archive[id] = { ...(archive[id] || {}), ...stale };
  const kept = Object.fromEntries(Object.entries(map).filter(([key]) => live.has(key)));
  if (Object.keys(kept).length) writeFileSync(file, JSON.stringify(kept, null, 1) + '\n');
  else rmSync(file);
  moved += Object.keys(stale).length;
}
writeFileSync(archiveFile, JSON.stringify(archive, null, 1) + '\n');
console.log(`[archive] moved ${moved} stale page override key(s) to ${archiveFile}`);
