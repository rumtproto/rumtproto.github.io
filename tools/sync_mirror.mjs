// Vendors the English mirror into `mirror/`.
//
// The mirror is this project's *structural source of truth*: page inventory,
// front matter, headings, tables, code blocks and links all come from it, and
// the translation layer only ever swaps prose. Keeping a pinned copy in-tree
// means a build is reproducible offline and a `git diff` after a refresh shows
// exactly what upstream changed — which is also the list of what to re-translate.
//
//   node tools/sync_mirror.mjs                 # clone the pinned repo
//   node tools/sync_mirror.mjs --from /path    # copy from a local checkout
//   node tools/sync_mirror.mjs --ref <sha>     # pin a specific commit
//
// Only inputs are vendored: the mirror's own build output (docs/) and its
// dependencies are not copied.

import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, globSync, mkdirSync, mkdtempSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import matter from 'gray-matter';
import { isTranslatable, segments } from './lib/segment.mjs';

const REPO = 'https://github.com/mirrortproto/mirrortproto.github.io';
const DEST = 'mirror';

// What the translation build actually reads. `docs/` (the mirror's rendered
// site) and `backup/` (its upstream snapshot) are deliberately excluded: this
// project renders its own pages and never serves the mirror's HTML.
const VENDOR = [
  'src', //                 English Markdown, layout, CSS, icons
  'eleventy.config.mjs', // the build this project must reproduce
  'package.json', //        the exact toolchain versions the mirror builds with
  'tools/verify.mjs', //    reference checks, ported in tools/verify.mjs
];

const argv = process.argv.slice(2);
const arg = (name) => {
  const i = argv.indexOf(name);
  return i === -1 ? null : argv[i + 1];
};

const from = arg('--from');
const ref = arg('--ref');

const hash = (s) => createHash('sha256').update(s).digest('hex');
function sourceSnapshot(root) {
  const src = path.join(root, 'src');
  if (!existsSync(src)) return {};
  const pages = {};
  for (const rel of globSync('**/*.md', { cwd: src })) {
    const raw = readFileSync(path.join(src, rel), 'utf8');
    const doc = matter(raw);
    pages[rel] = {
      hash: hash(raw),
      keys: segments(doc.content).filter((segment) => isTranslatable(segment.text)).map((segment) => segment.text),
    };
  }
  return pages;
}
function storedTranslationKeys() {
  const keys = new Set();
  const global = 'i18n/segments.json';
  if (existsSync(global)) for (const key of Object.keys(JSON.parse(readFileSync(global, 'utf8')))) keys.add(key);
  for (const file of globSync('*.json', { cwd: 'i18n/pages' })) {
    for (const key of Object.keys(JSON.parse(readFileSync(path.join('i18n/pages', file), 'utf8')))) keys.add(key);
  }
  return keys;
}
function updateReport(before, after, priorMirror) {
  if (!Object.keys(before).length) return { firstImport: true, pages: Object.keys(after).length };
  const oldPages = new Set(Object.keys(before));
  const newPages = new Set(Object.keys(after));
  const addedPages = [...newPages].filter((page) => !oldPages.has(page)).sort();
  const removedPages = [...oldPages].filter((page) => !newPages.has(page)).sort();
  const changedPages = [...newPages].filter((page) => oldPages.has(page) && before[page].hash !== after[page].hash).sort();
  const oldKeys = new Set(Object.values(before).flatMap((page) => page.keys));
  const newKeys = new Set(Object.values(after).flatMap((page) => page.keys));
  const store = storedTranslationKeys();
  const addedKeys = [...newKeys].filter((key) => !oldKeys.has(key)).sort();
  const retiredKeys = [...oldKeys].filter((key) => !newKeys.has(key)).sort();
  return {
    firstImport: false,
    previousMirror: priorMirror || null,
    pages: { added: addedPages, removed: removedPages, changed: changedPages },
    keys: {
      added: addedKeys.length,
      needsTranslation: addedKeys.filter((key) => !store.has(key)),
      alreadyTranslated: addedKeys.filter((key) => store.has(key)).length,
      retired: retiredKeys.length,
      retiredWithTranslation: retiredKeys.filter((key) => store.has(key)),
    },
  };
}

let source = from;
let tmp = null;
try {
  if (!source) {
    tmp = mkdtempSync(path.join(tmpdir(), 'mirror-'));
    console.log(`[sync] cloning ${REPO}${ref ? ` @ ${ref}` : ''}`);
    execFileSync('git', ['clone', ...(ref ? [] : ['--depth', '1']), REPO, tmp], { stdio: 'inherit' });
    if (ref) execFileSync('git', ['-C', tmp, 'checkout', ref], { stdio: 'inherit' });
    source = tmp;
  }

  const sha = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const when = execFileSync('git', ['-C', source, 'log', '-1', '--format=%cI'], { encoding: 'utf8' }).trim();
  const before = sourceSnapshot(DEST);
  const priorMirror = existsSync(path.join(DEST, 'mirror.json')) ? JSON.parse(readFileSync(path.join(DEST, 'mirror.json'), 'utf8')) : null;
  const after = sourceSnapshot(source);

  rmSync(DEST, { recursive: true, force: true });
  mkdirSync(DEST, { recursive: true });
  for (const rel of VENDOR) {
    const src = path.join(source, rel);
    if (!existsSync(src)) {
      console.warn(`[sync] missing in upstream, skipped: ${rel}`);
      continue;
    }
    mkdirSync(path.dirname(path.join(DEST, rel)), { recursive: true });
    cpSync(src, path.join(DEST, rel), { recursive: true });
  }

  // The mirror's content snapshot date is shown in this site's footer too, so
  // both sites always name the same upstream capture.
  let backupDate = null;
  try {
    backupDate = JSON.parse(readFileSync(path.join(DEST, 'src/_data/site.json'), 'utf8')).backup_date;
  } catch {}

  const meta = { repo: REPO, commit: sha, committed: when, vendored: new Date().toISOString(), backup_date: backupDate, paths: VENDOR };
  writeFileSync(path.join(DEST, 'mirror.json'), JSON.stringify(meta, null, 1) + '\n');

  const changes = { generatedAt: new Date().toISOString(), mirror: meta, ...updateReport(before, after, priorMirror) };
  mkdirSync('i18n', { recursive: true });
  writeFileSync('i18n/update-report.json', JSON.stringify(changes, null, 1) + '\n');

  const pages = Object.keys(after).length;
  console.log(`[sync] vendored ${pages} pages from ${sha.slice(0, 8)} (${when.slice(0, 10)})`);
  if (!changes.firstImport) console.log(`[sync] ${changes.pages.changed.length} changed page(s); ${changes.keys.needsTranslation.length} new key(s) need translation`);
} finally {
  if (tmp) rmSync(tmp, { recursive: true, force: true });
}
