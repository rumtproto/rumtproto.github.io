// @ts-nocheck
// Refreshes the vendored *sources* of mirrortproto and writes a translation diff.
// Generated crawled/, compiled .build/ and rendered docs/ are never vendored.
//
//   npm run sync:mirror
//   npm run sync:mirror -- --from /path/to/checkout
//   npm run sync:mirror -- --ref <sha>

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  cpSync,
  existsSync,
  globSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import matter from 'gray-matter';
import { isTranslatable, segments } from './lib/segment.js';

const REPO = 'https://github.com/mirrortproto/mirrortproto.github.io';
const DEST = 'mirror';
const ROOT_INPUTS = [
  'backup',
  'client',
  'site',
  'eleventy.config.ts',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'README.md',
  'LICENSE.md',
];

const argv = process.argv.slice(2);
const arg = (name) => {
  const index = argv.indexOf(name);
  return index === -1 ? null : argv[index + 1];
};
const from = arg('--from');
const ref = arg('--ref');
const hash = (text) => createHash('sha256').update(text).digest('hex');

function contentRoot(root) {
  const generated = path.join(root, 'crawled');
  return existsSync(generated) ? generated : null;
}

function sourceSnapshot(root) {
  const source = contentRoot(root);
  if (!source) return {};
  const pages = {};
  for (const rel of globSync('**/*.md', { cwd: source })) {
    const raw = readFileSync(path.join(source, rel), 'utf8');
    const doc = matter(raw);
    pages[rel] = {
      hash: hash(raw),
      keys: segments(doc.content)
        .filter((segment) => isTranslatable(segment.text))
        .map((segment) => segment.text),
    };
  }
  return pages;
}

function storedTranslationKeys() {
  const keys = new Set();
  const global = 'i18n/segments.json';
  if (existsSync(global)) {
    for (const key of Object.keys(JSON.parse(readFileSync(global, 'utf8')))) keys.add(key);
  }
  for (const file of globSync('*.json', { cwd: 'i18n/pages' })) {
    const local = JSON.parse(readFileSync(path.join('i18n/pages', file), 'utf8'));
    for (const key of Object.keys(local)) keys.add(key);
  }
  return keys;
}

function updateReport(before, after, priorMirror) {
  if (!Object.keys(before).length) return { firstImport: true, pages: Object.keys(after).length };
  const oldPages = new Set(Object.keys(before));
  const newPages = new Set(Object.keys(after));
  const added = [...newPages].filter((page) => !oldPages.has(page)).sort();
  const removed = [...oldPages].filter((page) => !newPages.has(page)).sort();
  const changed = [...newPages]
    .filter((page) => oldPages.has(page) && before[page].hash !== after[page].hash)
    .sort();
  const oldKeys = new Set(Object.values(before).flatMap((page) => page.keys));
  const newKeys = new Set(Object.values(after).flatMap((page) => page.keys));
  const store = storedTranslationKeys();
  const addedKeys = [...newKeys].filter((key) => !oldKeys.has(key)).sort();
  const retiredKeys = [...oldKeys].filter((key) => !newKeys.has(key)).sort();
  return {
    firstImport: false,
    previousMirror: priorMirror || null,
    pages: { added, removed, changed },
    keys: {
      added: addedKeys.length,
      needsTranslation: addedKeys.filter((key) => !store.has(key)),
      alreadyTranslated: addedKeys.filter((key) => store.has(key)).length,
      retired: retiredKeys.length,
      retiredWithTranslation: retiredKeys.filter((key) => store.has(key)),
    },
  };
}

function copyRequired(source, rel) {
  const input = path.join(source, rel);
  if (!existsSync(input)) throw new Error(`Required upstream source is missing: ${rel}`);
  const output = path.join(DEST, rel);
  mkdirSync(path.dirname(output), { recursive: true });
  cpSync(input, output, { recursive: true });
}

let source = from;
let temporary = null;
try {
  if (!source) {
    temporary = mkdtempSync(path.join(tmpdir(), 'mirror-'));
    console.log(`[sync] cloning ${REPO}${ref ? ` @ ${ref}` : ''}`);
    execFileSync('git', ['clone', ...(ref ? [] : ['--depth', '1']), REPO, temporary], { stdio: 'inherit' });
    if (ref) execFileSync('git', ['-C', temporary, 'checkout', ref], { stdio: 'inherit' });
    source = temporary;
  }

  if (!existsSync(path.join(source, 'backup')) || !existsSync(path.join(source, 'site'))) {
    throw new Error('Unsupported upstream layout: expected source backup/ and site/.');
  }

  const sha = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const committed = execFileSync('git', ['-C', source, 'log', '-1', '--format=%cI'], { encoding: 'utf8' }).trim();

  // A clean checkout intentionally has no mirror/crawled. Materialize the
  // currently vendored source first so the update report still compares old and
  // new snapshots rather than degrading to firstImport on every CI run.
  if (!contentRoot(DEST)
    && existsSync(path.join(DEST, 'backup'))
    && existsSync(path.join(DEST, 'site'))) {
    console.log('[sync] materializing previous vendored snapshot for comparison');
    execFileSync(process.execPath, [path.join('.build', 'tools', 'materialize_mirror.js')], { stdio: 'inherit' });
  }
  const before = sourceSnapshot(DEST);
  const priorMirror = existsSync(path.join(DEST, 'mirror.json'))
    ? JSON.parse(readFileSync(path.join(DEST, 'mirror.json'), 'utf8'))
    : null;

  if (!existsSync(path.join(source, 'crawled'))) {
    console.log('[sync] generating temporary upstream crawled/ snapshot for diffing');
    execFileSync('npm', ['ci', '--silent'], { cwd: source, stdio: 'inherit' });
    execFileSync('npm', ['run', 'generate', '--silent'], { cwd: source, stdio: 'inherit' });
  }
  const after = sourceSnapshot(source);
  if (!Object.keys(after).length) throw new Error('Upstream generated no Markdown pages.');
  const backupDate = JSON.parse(readFileSync(path.join(source, 'crawled/_data/site.json'), 'utf8')).backup_date;

  rmSync(DEST, { recursive: true, force: true });
  mkdirSync(DEST, { recursive: true });
  for (const rel of ROOT_INPUTS) copyRequired(source, rel);
  mkdirSync(path.join(DEST, 'tools'), { recursive: true });
  for (const name of globSync('*.{ts,json}', { cwd: path.join(source, 'tools') })) {
    cpSync(path.join(source, 'tools', name), path.join(DEST, 'tools', name));
  }

  // This config is compiled with the Russian project and runs from its root.
  // Config-time asset hashing happens before Eleventy calls can be proxied, so
  // those direct generated-input paths must name build/ rather than crawled/.
  const configFile = path.join(DEST, 'eleventy.config.ts');
  const config = readFileSync(configFile, 'utf8')
    .replaceAll('"crawled/', '"build/')
    .replaceAll("'crawled/", "'build/");
  writeFileSync(configFile, config);

  // The upstream icon helper is Python and is not part of this build. Do not
  // vendor it or leave a dead non-TypeScript command in the source snapshot.
  const packageFile = path.join(DEST, 'package.json');
  const mirrorPackage = JSON.parse(readFileSync(packageFile, 'utf8'));
  delete mirrorPackage.scripts?.icons;
  writeFileSync(packageFile, JSON.stringify(mirrorPackage, null, 2) + '\n');

  const paths = [
    'backup',
    'client',
    'site',
    'tools/*.{ts,json}',
    'eleventy.config.ts',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
  ];
  const meta = {
    repo: REPO,
    commit: sha,
    committed,
    vendored: new Date().toISOString(),
    backup_date: backupDate,
    paths,
  };
  writeFileSync(path.join(DEST, 'mirror.json'), JSON.stringify(meta, null, 1) + '\n');

  const changes = {
    generatedAt: new Date().toISOString(),
    mirror: meta,
    ...updateReport(before, after, priorMirror),
  };
  writeFileSync('i18n/update-report.json', JSON.stringify(changes, null, 1) + '\n');

  console.log(`[sync] vendored source for ${Object.keys(after).length} pages from ${sha.slice(0, 8)} (${committed.slice(0, 10)})`);
  if (!changes.firstImport) {
    console.log(`[sync] ${changes.pages.changed.length} changed page(s); ${changes.keys.needsTranslation.length} new key(s) need translation`);
  }
} finally {
  if (temporary) rmSync(temporary, { recursive: true, force: true });
}
