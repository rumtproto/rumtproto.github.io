// Carries translations across a purely mechanical upstream link-format change.
//
// When the mirror rewrites `[text](target)` to `[text](/new/target/)`, the key
// changes although the prose does not, so a finished translation would silently
// fall back to English. This tool moves such a translation onto the new key and
// rewrites the link targets inside the translation to match.
//
// Deliberately narrow. A pair is migrated only when the two keys are identical
// once every link target is removed, and only when the old key no longer occurs
// anywhere in the current mirror. Any difference in wording is left alone: that
// is a real content change and must be retranslated, not carried over.

import { globSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { isTranslatable, segments } from './lib/segment.mjs';

const STORE = 'i18n/segments.json';
const store = JSON.parse(readFileSync(STORE, 'utf8'));

const skeleton = (text) => text.replace(/\]\([^)]*\)/g, ']()').trim();
const targetsOf = (text) => [...text.matchAll(/\]\(([^)]*)\)/g)].map((m) => m[1]);

// Every segment the updated mirror renders, and which of them still lack a key.
const live = new Set();
for (const rel of globSync('**/*.md', { cwd: 'mirror/src' })) {
  const doc = matter(readFileSync(path.join('mirror/src', rel), 'utf8'));
  for (const segment of segments(doc.content)) {
    if (isTranslatable(segment.text)) live.add(segment.text);
  }
}

// Candidate sources: keys that no longer occur upstream.
const retiredBySkeleton = new Map();
for (const key of Object.keys(store)) {
  if (live.has(key)) continue;
  const shape = skeleton(key);
  if (!retiredBySkeleton.has(shape)) retiredBySkeleton.set(shape, []);
  retiredBySkeleton.get(shape).push(key);
}

let migrated = 0;
let ambiguous = 0;
const changes = [];
for (const newKey of live) {
  if (Object.hasOwn(store, newKey)) continue;
  const candidates = retiredBySkeleton.get(skeleton(newKey));
  if (!candidates || !candidates.length) continue;
  if (candidates.length > 1) { ambiguous += 1; continue; }

  const oldKey = candidates[0];
  const oldTargets = targetsOf(oldKey);
  const newTargets = targetsOf(newKey);
  if (oldTargets.length !== newTargets.length) { ambiguous += 1; continue; }

  // Apply the same target substitutions to the translation, so its links point
  // where the updated original points.
  const mapping = new Map();
  oldTargets.forEach((from, i) => { if (from !== newTargets[i]) mapping.set(from, newTargets[i]); });
  const translation = store[oldKey].replace(/\]\(([^)]*)\)/g, (whole, target) =>
    mapping.has(target) ? `](${mapping.get(target)})` : whole);

  store[newKey] = translation;
  delete store[oldKey];
  migrated += 1;
  if (changes.length < 8) changes.push([...mapping.entries()].map(([a, b]) => `${a} → ${b}`).join(', '));
}

writeFileSync(STORE, JSON.stringify(store, null, 1) + '\n');
console.log(`[remap] moved ${migrated} translation(s) onto their new keys; ${ambiguous} left for manual review`);
for (const change of changes) if (change) console.log(`         ${change}`);
console.log(`[remap] store now has ${Object.keys(store).length} keys`);
