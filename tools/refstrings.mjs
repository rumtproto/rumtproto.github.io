// Extracts every translatable string of the schema reference (/constructor,
// /method, /type) into a deduplicated translation memory.
//
//   .extracted/tm/keys.json     unique strings, ordered by how often they occur
//   .extracted/tm/stats.json    per-kind counts
//
// The reference is extremely repetitive — the same parameter description or
// error message appears on hundreds of pages — so translating the *unique*
// strings once and reapplying them is both far cheaper and far more consistent
// than translating 3000 pages independently.
//
// Usage: node tools/refstrings.mjs
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const OUT = path.join(ROOT, '.extracted', 'tm');

async function walk(dir, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, base)));
    else if (e.name.endsWith('.md')) out.push(path.relative(base, p).replace(/\.md$/, ''));
  }
  return out;
}

/**
 * Split a reference page into pieces and return the translatable ones.
 * Emits { kind, text } where kind is one of:
 *   intro   – the description under the <h1>
 *   heading – an h3/h4 title
 *   cell    – the description column of a table row
 *   blurb   – the one-line summary under a "Related pages" entry
 */
export function refPieces(md) {
  const pieces = [];
  const lines = md.split('\n');
  let i = 0;
  // h1
  while (i < lines.length && !/^#\s/.test(lines[i])) i++;
  i++;
  // intro paragraphs, up to the TL fence or the first h3
  let buf = [];
  for (; i < lines.length; i++) {
    const t = lines[i];
    if (/^(```|~~~)/.test(t.trim()) || /^#{2,4}\s/.test(t)) break;
    if (t.trim() === '') {
      if (buf.length) pieces.push({ kind: 'intro', text: buf.join('\n').trim() });
      buf = [];
      continue;
    }
    buf.push(t);
  }
  if (buf.length) pieces.push({ kind: 'intro', text: buf.join('\n').trim() });

  // rest of the page
  let inFence = false;
  let relatedTitle = null;
  buf = [];
  const flushBlurb = () => {
    if (buf.length) {
      const text = buf.join('\n').trim();
      if (text) pieces.push({ kind: relatedTitle ? 'blurb' : 'para', text });
    }
    buf = [];
  };
  for (; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      flushBlurb();
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const h = t.match(/^(#{2,4})\s+(.*)$/);
    if (h) {
      flushBlurb();
      const title = h[2].trim();
      const linked = title.match(/^\[([\s\S]*)\]\(([^)]*)\)$/);
      if (linked) relatedTitle = linked[2];
      else {
        relatedTitle = null;
        pieces.push({ kind: 'heading', text: title });
      }
      continue;
    }
    if (/^<table/i.test(t)) {
      flushBlurb();
      for (const row of line.matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
        const cells = [...row[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((m) => m[1]);
        if (!cells.length) continue;
        if (/<th/i.test(row[1])) {
          for (const c of cells) pieces.push({ kind: 'th', text: c.trim() });
        } else if (cells.length >= 2) {
          pieces.push({ kind: 'cell', text: cells[cells.length - 1].trim() });
        }
      }
      continue;
    }
    if (t === '') {
      flushBlurb();
      continue;
    }
    buf.push(line);
  }
  flushBlurb();
  return pieces.filter((p) => p.text && /[A-Za-z]{3}/.test(p.text));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const pages = (await walk(EN)).filter((p) => /^(constructor|method|type)\//.test(p));
  const freq = new Map();
  const kinds = new Map();
  for (const rel of pages) {
    const md = await readFile(path.join(EN, rel + '.md'), 'utf8');
    for (const p of refPieces(md)) {
      const key = p.text;
      freq.set(key, (freq.get(key) || 0) + 1);
      if (!kinds.has(key)) kinds.set(key, p.kind);
    }
  }
  const keys = [...freq.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([text, n]) => ({ text, n, kind: kinds.get(text) }));
  await mkdir(OUT, { recursive: true });
  await writeFile(path.join(OUT, 'keys.json'), JSON.stringify(keys, null, 1));
  const byKind = {};
  for (const k of keys) byKind[k.kind] = (byKind[k.kind] || 0) + 1;
  const chars = keys.reduce((a, k) => a + k.text.length, 0);
  await writeFile(path.join(OUT, 'stats.json'), JSON.stringify({ pages: pages.length, unique: keys.length, chars, byKind }, null, 1));
  console.log(`reference pages: ${pages.length}`);
  console.log(`unique strings : ${keys.length}  (${Math.round(chars / 1024)} KB)`);
  console.log('by kind        :', byKind);
}
