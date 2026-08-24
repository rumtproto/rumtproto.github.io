// Builds .extracted/refs.json from the dated backup (structured schema reference
// data for /constructor, /method, /type pages). No network access.
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const ROOT = path.resolve('.');
const EX = path.resolve('.extracted');

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

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—').replace(/&amp;/g, '&');
}

function extractH1(html) {
  const m = html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return decodeEntities(m[1].replace(/<[^>]+>/g, '')).trim();
}

function stripNoise(html) {
  let h = html.replace(/<script[\s\S]*?<\/script>/g, '');
  h = h.replace(/<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g, '');
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, '');
  return h;
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
td.keep(['table']);

function extractTl(html) {
  const m = html.match(/<pre class="page_scheme"><code>([\s\S]*?)<\/code><\/pre>/);
  if (!m) return null;
  return decodeEntities(m[1].replace(/<[^>]+>/g, '')).trim();
}

function cellText(c) {
  return decodeEntities(
    c.replace(/<br\s*\/?>/g, ' ')
      .replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_x, href, t) => `[${t.replace(/<[^>]+>/g, '').trim()}](INTERNAL:${href})`)
      .replace(/<[^>]+>/g, '')
  ).replace(/\s+/g, ' ').trim();
}

function extractTables(html) {
  const out = [];
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
      while ((c = cre.exec(r[1])) !== null) cells.push(cellText(c[1]));
      if (cells.length) rows.push(cells);
    }
    out.push(rows);
  }
  return out;
}

function sections(html) {
  const parts = html.split(/<h3>([\s\S]*?)<\/h3>/);
  const out = [];
  for (let i = 1; i < parts.length; i += 2) {
    const title = decodeEntities(parts[i].replace(/<[^>]+>/g, '')).trim();
    const body = parts[i + 1] || '';
    out.push({ title, tables: extractTables(body), text: td.turndown(body.replace(/<table[\s\S]*?<\/table>/g, '')).trim() });
  }
  return out;
}

async function pickBackup() {
  const dir = path.join(ROOT, 'backup');
  const dates = (await readdir(dir)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  return path.join(dir, dates[dates.length - 1]);
}

async function main() {
  const backup = await pickBackup();
  const meta = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
  const refs = [];
  for (const pg of meta.pages) {
    if (!/^\/(constructor|method|type)\//.test(pg.path)) continue;
    const html = await readFile(path.join(backup, pg.file), 'utf8');
    const kind = pg.path.split('/')[1];
    const content = extractDiv(html, '<div id="dev_page_content">');
    if (!content) continue;
    const cleaned = stripNoise(content);
    const introMatch = cleaned.match(/^<div id="dev_page_content">([\s\S]*?)(<h3>|<pre class="page_scheme">|$)/);
    let intro = introMatch ? td.turndown(introMatch[1].replace(/<div class="clearfix">[\s\S]*?<\/div>/g, '')).trim() : '';
    refs.push({
      url: pg.path,
      kind,
      title: extractH1(html) || pg.path.split('/')[2],
      intro,
      tl: extractTl(cleaned),
      sections: sections(cleaned),
    });
  }
  await mkdir(EX, { recursive: true });
  await writeFile(path.join(EX, 'refs.json'), JSON.stringify(refs, null, 1));
  console.log('refs.json:', refs.length, 'entries');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
