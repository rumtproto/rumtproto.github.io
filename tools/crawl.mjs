// Crawls the 2-level link closure of https://core.telegram.org/mtproto
// restricted to core.telegram.org HTML pages. Saves raw HTML under .source/.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://core.telegram.org';
const ROOT = '/mtproto';
const SRC_DIR = path.resolve('.source');
const QUEUE_FILE = path.resolve('.source/_urls.txt');

// Prefixes that are not documentation HTML pages.
const SKIP_PREFIXES = ['/css/', '/js/', '/img/', '/file/', '/fonts/'];
const SKIP_EXACT = new Set(['/favicon.ico']);

function isDocLink(href) {
  if (!href) return null;
  let url;
  try {
    url = new URL(href, BASE);
  } catch {
    return null;
  }
  if (url.host !== 'core.telegram.org') return null;
  let p = decodeURIComponent(url.pathname);
  if (SKIP_EXACT.has(p)) return null;
  for (const pref of SKIP_PREFIXES) if (p.startsWith(pref)) return null;
  if (/\.(png|jpe?g|gif|svg|ico|css|js|webp|mp4|pdf|json|xml)$/i.test(p)) return null;
  if (p === '/') return null; // home page is a site index, not part of docs closure
  if (!p.startsWith('/')) return null;
  return p;
}

function extractLinks(html) {
  const out = new Set();
  const re = /<a\s[^>]*href\s*=\s*"([^"]*)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const p = isDocLink(m[1]);
    if (p) out.add(p);
  }
  return out;
}

async function fetchPage(p, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(BASE + p, {
        headers: { 'User-Agent': 'Mozilla/5.0 (docs-mirror crawler; personal offline translation)', 'Accept': 'text/html' },
        redirect: 'follow',
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
}

function safeName(p) {
  return p.replace(/^\/+/, '').replace(/\//g, '__') || 'index';
}

async function run() {
  await mkdir(SRC_DIR, { recursive: true });
  const seen = new Set(); // paths already fetched
  const level1 = new Set();
  const level2 = new Set();

  async function grab(p) {
    if (seen.has(p)) return null;
    seen.add(p);
    const file = path.join(SRC_DIR, safeName(p) + '.raw.html');
    let html;
    try {
      const existing = await readFile(file, 'utf8');
      if (existing.length > 500) {
        html = existing;
        console.log('cached', p, html.length);
      } else throw new Error('too small');
    } catch {
      html = await fetchPage(p);
      await writeFile(file, html);
      console.log('fetched', p, html.length);
    }
    return html;
  }

  // Level 0: the mtproto page itself (already downloaded, but re-check links).
  const rootHtml = await readFile(path.join(SRC_DIR, safeName(ROOT) + '.raw.html'), 'utf8').catch(() => null);
  const l0 = rootHtml ?? (await grab(ROOT));
  for (const p of extractLinks(l0)) level1.add(p);
  console.log('level1 count:', level1.size);

  // Level 1 pages.
  for (const p of [...level1].sort()) {
    try {
      const html = await grab(p);
      if (html) for (const q of extractLinks(html)) level2.add(q);
    } catch (e) {
      console.error('FAILED level1', p, String(e));
    }
  }
  for (const p of seen) level2.delete(p);
  console.log('level2 count:', level2.size);

  // Level 2 pages (no further link extraction).
  const failed = [];
  for (const p of [...level2].sort()) {
    try {
      await grab(p);
    } catch (e) {
      console.error('FAILED level2', p, String(e));
      failed.push(p);
    }
  }

  const all = [...seen].sort();
  await writeFile(QUEUE_FILE, all.join('\n') + '\n');
  console.log('TOTAL pages:', all.length);
  if (failed.length) console.log('FAILED:', JSON.stringify(failed));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
