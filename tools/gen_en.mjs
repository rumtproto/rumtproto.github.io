// Generates the English markdown bodies (the mirror's sources) into
// .extracted/en/<path>.md together with a paragraph map .extracted/en/<path>.json.
//
// This never touches src/ — it only materialises the translation input, so the
// translator (human or agent) can see exactly which original paragraph number
// each block corresponds to.
//
// Usage: node tools/gen_en.mjs [--only <path-prefix>] [date]
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadBackup, toMarkdown, sectionOf, headingSlugs, slugify, cleanInline, originalAnchors } from './lib/en.mjs';
import { paragraphsOf, plain } from './lib/paras.mjs';
import { headingIds, headingAliases } from './lib/anchors.mjs';

const ROOT = path.resolve('.');
const OUT = path.join(ROOT, '.extracted', 'en');

const args = process.argv.slice(2);
let only = null;
const rest = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--only') only = args[++i];
  else rest.push(args[i]);
}

const { backup, meta, closure } = await loadBackup(rest[0]);
console.log('backup:', backup, 'pages:', meta.pages.length);

// ---- pass 1: markdown for every page (needed for anchor validation) ----
const records = [];
for (const pg of meta.pages) {
  const html = await readFile(path.join(backup, pg.file), 'utf8');
  const normPath = pg.path.replace(/\/+$/, '');
  const rel = normPath.replace(/^\/+/, '');
  const conv = toMarkdown(html, rel);
  if (!conv) continue;
  records.push({ pg, normPath, rel, ...conv, origAnchors: originalAnchors(html), origin: pg.site || 'https://core.telegram.org' });
}
const slugsByPath = new Map(records.map((r) => [r.normPath, headingSlugs(r.body)]));

const resolveAnchor = (targetSlugs, anchor) => {
  const a = anchor.slice(1);
  if (targetSlugs.has(a)) return a;
  if (a.startsWith('q-') && targetSlugs.has(a.slice(2))) return a.slice(2);
  return null;
};

const rewriteLinks = (md, ownPath, origin) =>
  md
    .replace(/<img([^>]*?)src="\/file\//g, `<img$1src="${origin}/file/`)
    .replace(/<img([^>]*?)src="\/img\//g, `<img$1src="${origin}/img/`)
    .replace(/<img([^>]*?)src="\/\//g, '<img$1src="https://')
    .replace(/(<a[^>]*?)href="\/file\//g, `$1href="${origin}/file/`)
    .replace(/(<a[^>]*?)href="\/img\//g, `$1href="${origin}/img/`)
    .replace(/(<a[^>]*?)href="\/\//g, '$1href="https://')
    .replace(/(<(?:source|video|img)[^>]*?)src="\/file\//g, `$1src="${origin}/file/`)
    .replace(/(<video[^>]*?)poster="\/file\//g, `$1poster="${origin}/file/`)
    .replace(/!\[([^\]]*)\]\(\/file\//g, `![$1](${origin}/file/`)
    .replace(/!\[([^\]]*)\]\(\/img\//g, `![$1](${origin}/img/`)
    .replace(/!\[([^\]]*)\]\(\/\//g, '![$1](https://')
    .replace(/\]\((#[^)\s]+)\)/g, (m0, anchor) => {
      const a = resolveAnchor(slugsByPath.get(ownPath) || new Set(), anchor);
      return a === null ? m0 : `](#${a})`;
    })
    .replace(/\]\(https:\/\/core\.telegram\.org(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
      const np = (p || '/').replace(/\/+$/, '');
      if (!closure.has(np)) return m0;
      if (anchor) {
        const a = resolveAnchor(slugsByPath.get(np) || new Set(), anchor);
        if (a === null) return m0;
        return `](${np}/#${a})`;
      }
      return `](${np}/)`;
    })
    .replace(/\]\((?!https?:|#)(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
      if (!closure.has(p.replace(/\/+$/, ''))) return `](${origin}${p}${anchor || ''})`;
      if (!anchor) return `](${p.endsWith('/') ? p : p + '/'})`;
      const a = resolveAnchor(slugsByPath.get(p.replace(/\/+$/, '')) || new Set(), anchor);
      if (a === null) return `](${origin}${p}${anchor})`;
      return `](${p.endsWith('/') ? p : p + '/'}#${a})`;
    });

// ---- pass 2: write English markdown + paragraph map ----
let written = 0;
for (const r of records) {
  if (only && !r.normPath.startsWith(only)) continue;
  let body = rewriteLinks(r.body, r.normPath, r.origin);
  let inFence = false;
  let hasH1 = false;
  for (const line of body.split('\n')) {
    const t = line.trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && /^#\s/.test(t)) {
      hasH1 = true;
      break;
    }
  }
  if (!hasH1) body = `# ${r.title}\n\n` + body;
  body = body.replace(/<th(\s|>)/g, '<th scope="col"$1');

  const dest = path.join(OUT, r.rel + '.md');
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, body + '\n');

  // Paragraph inventory. The whole body must be rendered in one go: markdown-it
  // only wraps list items in <p> when the *surrounding* list is loose, so
  // counting block by block would undercount every page that has a loose list.
  const paras = paragraphsOf(body).map((p, i) => ({ n: i + 1, text: plain(p) }));
  await writeFile(
    path.join(OUT, r.rel + '.json'),
    JSON.stringify(
      {
        path: r.normPath,
        title: r.title,
        section: sectionOf(r.normPath),
        paragraphs: paras.length,
        headings: countHeadings(body),
        // ids the English page assigns to its headings, in document order —
        // the translation must reuse them so cross-page anchors keep working
        anchors: headingIds(body),
        anchorAliases: headingAliases(body),
        // anchor names used by the original page itself (authoritative)
        anchorOriginals: r.origAnchors,
        paras,
      },
      null,
      1
    )
  );
  written++;
}
console.log('english pages written:', written, '→', path.relative(ROOT, OUT));

function countHeadings(md) {
  let inFence = false;
  let n = 0;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && /^#{1,6}\s/.test(t)) n++;
  }
  return n;
}
