// Merges translated chunks into final Eleventy markdown pages under src/.
// - Adds front matter (title, original URL, section, layout)
// - Rewrites internal links /path -> /path/ (Eleventy directory URLs)
// - Rewrites relative image URLs to absolute core.telegram.org URLs
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const TR = path.resolve('.translated/chunks');
const SRC = path.resolve('src');

const proseIndex = JSON.parse(await readFile(path.join(EX, 'prose-index.json'), 'utf8'));
const urlByName = Object.fromEntries(proseIndex.map((p) => [p.name, { url: p.url, title: p.title }]));
const manifest = JSON.parse(await readFile(path.join(EX, 'chunk-manifest.json'), 'utf8'));

const byPage = new Map();
for (const c of manifest) {
  if (!byPage.has(c.name)) byPage.set(c.name, []);
  byPage.get(c.name).push(c);
}

function rewriteLinks(md) {
  let out = md;
  // images first: ![alt](src) — make absolute
  out = out.replace(/!\[([^\]]*)\]\((\/file\/[^)\s]*)/g, '![\$1](https://core.telegram.org/$2'.replace('$2', ''));
  out = out.replace(/!\[([^\]]*)\]\(\/file\//g, '![$1](https://core.telegram.org/file/');
  out = out.replace(/!\[([^\]]*)\]\(\/img\//g, '![$1](https://core.telegram.org/img/');
  out = out.replace(/!\[([^\]]*)\]\(\/\//g, '![$1](https://');
  // links: [text](/path...) but not already-absolute
  out = out.replace(/\]\((?!https?:|INTERNAL:|#)(\/[^)#]*)(#[^)]*)?\)/g, (_m, p, a) => {
    const base = p.endsWith('/') ? p : p + '/';
    return `](${base}${a || ''})`;
  });
  // INTERNAL: markers from extraction
  out = out.replace(/INTERNAL:\//g, '/');
  return out;
}

function sectionOf(url) {
  if (url.startsWith('/mtproto')) return 'mtproto';
  if (url.startsWith('/api')) return 'api';
  if (url.startsWith('/schema')) return 'schema';
  if (url.startsWith('/bots')) return 'bots';
  return 'other';
}

function fmEscape(s) {
  return String(s).replace(/"/g, '\\"');
}

let written = 0;
let missing = [];
for (const [name, chunks] of byPage) {
  chunks.sort((a, b) => a.part - b.part);
  const parts = [];
  for (const c of chunks) {
    const id = chunks.length === 1 ? name : `${name}.part${String(c.part).padStart(2, '0')}`;
    try {
      parts.push(await readFile(path.join(TR, id + '.md'), 'utf8'));
    } catch {
      missing.push(id);
    }
  }
  if (missing.length) continue;
  let body = parts.map((p) => p.trim()).join('\n\n');
  body = rewriteLinks(body);
  // derive title from first H1
  const h1 = body.match(/^#\s+(.+)$/m);
  const meta = urlByName[name] || { url: '/' + name.replace(/__/g, '/'), title: name };
  const title = h1 ? h1[1].trim() : meta.title;
  const fm = [
    '---',
    `title: "${fmEscape(title)}"`,
    `original: "https://core.telegram.org${meta.url}"`,
    `section: ${sectionOf(meta.url)}`,
    'layout: layout.njk',
    'translated: true',
    '---',
    '',
  ].join('\n');
  const rel = name.replace(/__/g, '/');
  const dest = path.join(SRC, rel + '.md');
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, fm + '\n' + body + '\n');
  written++;
}

console.log('pages written:', written);
if (missing.length) console.log('MISSING translations:', missing.length, missing.slice(0, 20).join(', '));
