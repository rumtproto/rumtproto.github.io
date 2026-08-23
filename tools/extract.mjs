// Extracts main content from raw core.telegram.org HTML pages.
// - Prose pages   -> .extracted/prose/<name>.md  (markdown draft, English)
// - Schema pages  -> .extracted/refs.json        (structured: /constructor, /method, /type)
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const SRC = path.resolve('.source');
const OUT = path.resolve('.extracted');

function extractDiv(html, marker) {
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf('<div', start);
  let i = html.indexOf('>', start) + 1;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith('</div')) depth--;
    else depth++;
    if (depth === 0) return html.slice(tagStart, m.index + 6);
  }
  return null;
}

function extractH1(html) {
  const m = html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
}

function stripNoise(html) {
  let h = html;
  h = h.replace(/<script[\s\S]*?<\/script>/g, '');
  // layer selector dropdown (shared UI noise on schema pages)
  h = h.replace(/<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g, '');
  // anchor icons
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, '');
  return h;
}

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&');
}

// ---- turndown setup ----
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.addRule('preCode', {
  filter: (node) => node.nodeName === 'PRE' || (node.nodeName === 'DIV' && /page_scheme/.test(node.getAttribute('class') || '')),
  replacement: (content, node) => {
    const code = node.nodeName === 'PRE' ? node.textContent : node.textContent;
    return '\n\n```\n' + code.replace(/\n+$/, '') + '\n```\n\n';
  },
});
td.addRule('strikeIgnored', { filter: ['del', 's'], replacement: (c) => c });
// keep tables as markdown
td.keep(['table']);

function htmlToMd(html) {
  return td.turndown(html);
}

// ---- table extraction for schema pages ----
function extractTables(html) {
  const tables = [];
  const tre = /<table[\s\S]*?<\/table>/g;
  let m;
  while ((m = tre.exec(html)) !== null) {
    const rows = [];
    const rre = /<tr>([\s\S]*?)<\/tr>/g;
    let r;
    while ((r = rre.exec(m[0])) !== null) {
      const cells = [];
      const cre = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
      let c;
      while ((c = cre.exec(r[1])) !== null) {
        let cell = c[1]
          .replace(/<br\s*\/?>/g, ' ')
          .replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_x, href, text) => `[${text.replace(/<[^>]+>/g, '').trim()}](INTERNAL:${href})`)
          .replace(/<[^>]+>/g, '');
        cells.push(decodeEntities(cell.trim()).replace(/\s+/g, ' '));
      }
      if (cells.length) rows.push(cells);
    }
    tables.push(rows);
  }
  return tables;
}

function extractTlScheme(html) {
  // TL definition inside <pre class="page_scheme"><code>...</code></pre>
  const m = html.match(/<pre class="page_scheme"><code>([\s\S]*?)<\/code><\/pre>/);
  if (!m) return null;
  let code = m[1].replace(/<[^>]+>/g, '');
  return decodeEntities(code).trim();
}

function schemaSections(html) {
  // split content by h3 headings (Parameters, Result, Type, Possible values, etc.)
  const parts = html.split(/<h3>([\s\S]*?)<\/h3>/);
  // parts: [before, h3#1, body#1, h3#2, body#2, ...]
  const out = [];
  for (let i = 1; i < parts.length; i += 2) {
    const title = decodeEntities(parts[i].replace(/<[^>]+>/g, '').trim());
    out.push({ title, body: parts[i + 1] || '' });
  }
  return out;
}

async function main() {
  await mkdir(path.join(OUT, 'prose'), { recursive: true });
  const urlsTxt = await readFile(path.join(SRC, '_urls.txt'), 'utf8').catch(() => '');
  const urls = urlsTxt.split('\n').filter(Boolean).sort();

  const refs = [];
  const proseIndex = [];
  let schemaCount = 0;

  for (const url of urls) {
    const name = url.replace(/^\/+/, '').replace(/\//g, '__') || 'index';
    const file = path.join(SRC, name + '.raw.html');
    let html;
    try {
      html = await readFile(file, 'utf8');
    } catch {
      console.error('missing raw html for', url);
      continue;
    }
    const h1 = extractH1(html) || name;
    let content = extractDiv(html, '<div id="dev_page_content">');
    if (!content) {
      console.error('no content div for', url);
      continue;
    }
    content = stripNoise(content);

    const isRef = /^\/(constructor|method|type)\//.test(url);
    if (isRef) {
      schemaCount++;
      const kind = url.split('/')[1];
      const tl = extractTlScheme(content);
      // intro paragraphs before first h3 / pre
      const introMatch = content.match(/^<div id="dev_page_content">([\s\S]*?)(<h3>|<pre class="page_scheme">|$)/);
      let introHtml = introMatch ? introMatch[1] : '';
      introHtml = introHtml.replace(/<div class="clearfix">[\s\S]*?<\/div>/g, '');
      const intro = htmlToMd(introHtml).trim();
      const sections = schemaSections(content).map((s) => ({
        title: s.title,
        tables: extractTables(s.body),
        text: htmlToMd(s.body.replace(/<table[\s\S]*?<\/table>/g, '')).trim(),
      }));
      refs.push({ url, kind, title: h1, tl, intro, sections });
    } else {
      const md = htmlToMd(content);
      await writeFile(path.join(OUT, 'prose', name + '.md'), md);
      proseIndex.push({ url, name, title: h1 });
    }
  }

  await writeFile(path.join(OUT, 'refs.json'), JSON.stringify(refs, null, 1));
  await writeFile(path.join(OUT, 'prose-index.json'), JSON.stringify(proseIndex, null, 1));
  console.log('prose pages:', proseIndex.length, '| schema ref pages:', schemaCount);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
