// Repairs translation link targets using the pre-migration tree as ground truth.
//
// Link ORDER belongs to the translation: Russian word order differs, so the same
// links may appear in a different sequence. Link SPELLING belongs to the mirror:
// `/api/config` must become `/api/config/`. An earlier tool conflated the two and
// reassigned targets by position, which pointed links at the wrong entity.
//
// Here each legacy translation is restored verbatim, and only the spelling of
// each of its targets is corrected — matched by identity, never by position.
//
//   node tools/repair_link_targets.mjs <legacy-tree>

import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { segments, isTranslatable } from './lib/segment.mjs';
import { isNeverTranslated } from './lib/never-translate.mjs';

const LEGACY = process.argv[2] || '/tmp/legacy-src';
const MIRROR = 'mirror/src';
const STORE = 'i18n/segments.json';
if (!existsSync(LEGACY)) throw new Error(`Legacy tree not found: ${LEGACY}`);
const store = JSON.parse(readFileSync(STORE, 'utf8'));

const LINK = /(href=")([^"]*)(")|(\]\()([^)]*)(\))/g;
const canonical = (t) => {
  let v = String(t);
  try { v = decodeURIComponent(v); } catch {}
  // The legacy pages linked to core.telegram.org paths relatively; the mirror
  // spells them absolutely. Treat both as the same destination.
  v = v.replace(/^https?:\/\/core\.telegram\.org/i, '');
  return v.replace(/\/+(?=#|$)/, '').replace(/\/$/, '').toLowerCase();
};

// Legacy anchors were sometimes truncated (`#q-are-you-...-and-enc`). Accept a
// source anchor that the legacy one is a prefix of, when it is unambiguous.
const prefixMatch = (current, sources) => {
  const c = canonical(current);
  const [cPath, cHash] = c.split('#');
  if (!cHash) return null;
  const hits = sources.filter((t) => {
    const [sPath, sHash] = canonical(t).split('#');
    return sPath === cPath && sHash && sHash.startsWith(cHash);
  });
  return hits.length === 1 ? hits[0] : null;
};
const clean = (s) => s.replace(/^\s*(?:\[@(?:note|term:[^\]]*|t:\d+)\]\s*)+/g, '').trim();

let repaired = 0;
const seen = new Map();

for (const rel of globSync('**/*.md', { cwd: MIRROR })) {
  const legacyPath = path.join(LEGACY, rel);
  if (!existsSync(legacyPath)) continue;
  const en = segments(matter(readFileSync(path.join(MIRROR, rel), 'utf8')).content);
  const ru = segments(matter(readFileSync(legacyPath, 'utf8')).content).filter((s) => !/^\s*\[@note\]/.test(s.text));
  if (en.length !== ru.length) continue;

  for (let i = 0; i < en.length; i += 1) {
    const source = en[i].text;
    if (!isTranslatable(source) || isNeverTranslated(source)) continue;
    const legacy = clean(ru[i].text);
    if (!legacy || legacy === source) continue;

    // Correct only the spelling of each target, keeping the translation's own
    // order. A target is rewritten when exactly one source target matches it.
    const sourceTargets = [...source.matchAll(LINK)].map((m) => m[2] ?? m[5]);
    const fixed = legacy.replace(LINK, (whole, hOpen, hTarget, hClose, mOpen, mTarget, mClose) => {
      const current = hTarget ?? mTarget;
      const matches = sourceTargets.filter((t) => canonical(t) === canonical(current));
      const chosen = matches.length === 1 ? matches[0] : prefixMatch(current, sourceTargets);
      if (!chosen || chosen === current) return whole;
      return hOpen !== undefined ? `${hOpen}${chosen}${hClose}` : `${mOpen}${chosen}${mClose}`;
    });
    if (!seen.has(source)) seen.set(source, new Map());
    const variants = seen.get(source);
    variants.set(fixed, (variants.get(fixed) || 0) + 1);
  }
}

for (const [source, variants] of seen) {
  const best = [...variants.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ru'))[0][0];
  if (store[source] !== best) { store[source] = best; repaired += 1; }
}
writeFileSync(STORE, JSON.stringify(store, null, 1) + '\n');
console.log(`[repair] restored ${repaired} translation(s) from the legacy tree with spelling-only link fixes`);
