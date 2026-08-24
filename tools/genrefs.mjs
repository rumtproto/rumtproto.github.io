// Generates the Russian schema reference (/constructor, /method, /type) from the
// English pages in .extracted/en/ plus the translation memory .extracted/tm/map.json.
//
// The English markdown is transformed *in place*: only human-readable text is
// replaced, every tag, link, TL definition and table cell of identifiers is left
// byte-identical. That guarantees the Russian page has exactly the same block and
// paragraph structure as the original, so the build-time paragraph numbering
// matches the English mirror on all 3000+ reference pages.
//
// Usage: node tools/genrefs.mjs [--report]
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const SRC = path.join(ROOT, 'src');
const TM = path.join(ROOT, '.extracted', 'tm');
const reportOnly = process.argv.includes('--report');

const KIND_RU = { constructor: 'конструктор', method: 'метод', type: 'тип' };

async function walk(dir, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, base)));
    else if (e.name.endsWith('.md')) out.push(path.relative(base, p).replace(/\.md$/, ''));
  }
  return out;
}

const tm = JSON.parse(await readFile(path.join(TM, 'map.json'), 'utf8'));

// Untranslatable terms worth flagging on a reference page. The first place a
// term appears on the page gets a [@term:…] marker, whose tooltip carries the
// explanation from src/_data/terms.json.
const GLOSSARY = JSON.parse(await readFile(path.join(SRC, '_data', 'terms.json'), 'utf8'));
const REF_TERMS = [
  'file_reference', 'access_hash', 'random_id', 'next_offset', 'short_name', 'msg_id',
  'long polling', 'inline query', 'message entity', 'deep link', 'Mini App', 'rate limit',
  'collectible username', 'takeout', 'emoticon', 'flags', 'peer', 'layer', 'slug',
  'pts', 'qts', 'hash', 'min', 'TTL', 'boost', 'monoforum', 'passkey', 'bare', 'boxed',
].filter((t) => GLOSSARY[t]);
const MAX_TERMS_PER_PAGE = 4;

// Some terms survive only in translated form on a reference page («голый тип»
// for `bare`), so they are also recognised by their Russian wording.
const RU_TRIGGERS = {
  bare: /гол(ый|ого|ым|ые|ых) тип/i,
  boxed: /об[её]рнут(ый|ого|ым|ые|ых) тип/i,
  hash: /хеш выборки/i,
  'long polling': /длинн(ый|ого|ым) опрос/i,
};

/** Does a piece of text introduce this term? */
function mentions(text, term) {
  const ru = RU_TRIGGERS[term];
  if (ru && ru.test(text.replace(/<[^>]+>/g, ' '))) return true;
  if (/^[a-z_]+$/.test(term)) {
    // schema identifier: only count it when written as code
    return new RegExp('<code>' + term + '</code>|`' + term + '`').test(text);
  }
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('(^|[^\\wА-Яа-яЁё-])' + esc + '($|[^\\wА-Яа-яЁё-])', 'i').test(
    text.replace(/<[^>]+>/g, ' ')
  );
}
const missing = new Map();
const tr = (s) => {
  const key = s.trim();
  if (!key) return s;
  if (tm[key] !== undefined) return tm[key];
  if (!/[A-Za-z]{3}/.test(key)) return s;
  missing.set(key, (missing.get(key) || 0) + 1);
  return s;
};

// Titles of the already-translated article pages, used for "Related pages" links.
// Pages outside the mirror (core.telegram.org/bots, /passport, …) are not part of
// this site, so their titles come from a small hand-kept list.
const titleByUrl = new Map(
  Object.entries(JSON.parse(await readFile(path.join(TM, 'external-titles.json'), 'utf8')))
);
for (const rel of await walk(SRC)) {
  if (/^(constructor|method|type)\//.test(rel)) continue;
  const text = await readFile(path.join(SRC, rel + '.md'), 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  const t = m[1].match(/^title:\s*"?(.*?)"?\s*$/m);
  if (!t) continue;
  const url = rel === 'index' ? '/' : '/' + rel + '/';
  titleByUrl.set(url, t[1].replace(/\\"/g, '"'));
}

function fmEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

/** Translate the description column of every row of a raw HTML table. */
function translateTable(html) {
  return html.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, inner) => {
    if (/<th/i.test(inner)) {
      return '<tr>' + inner.replace(/(<th[^>]*>)([\s\S]*?)(<\/th>)/g, (_m, a, text, b) => a + tr(text) + b) + '</tr>';
    }
    // only the last column holds prose; the others are identifiers and type links
    const cells = [...inner.matchAll(/<td[^>]*>[\s\S]*?<\/td>/g)];
    if (cells.length < 2) return row;
    const last = cells[cells.length - 1];
    const translated = last[0].replace(/^(<td[^>]*>)([\s\S]*)(<\/td>)$/, (_m, a, text, b) => a + tr(text) + b);
    return '<tr>' + inner.slice(0, last.index) + translated + inner.slice(last.index + last[0].length) + '</tr>';
  });
}

const pages = (await walk(EN)).filter((p) => /^(constructor|method|type)\//.test(p));
let written = 0;
const stats = { intro: 0, heading: 0, cell: 0, blurb: 0 };

for (const rel of pages) {
  const md = await readFile(path.join(EN, rel + '.md'), 'utf8');
  const kind = rel.split('/')[0];
  const name = rel.slice(kind.length + 1);
  const lines = md.split('\n');
  const out = [];

  let seenH1 = false;
  let inFence = false;
  let afterFenceOrHeading = false;
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    const block = buf.join('\n');
    if (block.trim()) out.push(tr(block));
    else out.push(block);
    buf = [];
  };

  for (const line of lines) {
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      flush();
      out.push(line);
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    if (/^#\s/.test(t) && !seenH1) {
      flush();
      seenH1 = true;
      out.push(line); // the h1 is the schema identifier — never translated
      continue;
    }
    const h = t.match(/^(#{2,6})\s+(.*)$/);
    if (h) {
      flush();
      const title = h[2].trim();
      const linked = title.match(/^\[([\s\S]*)\]\(([^)]*)\)$/);
      if (linked) {
        const ru = titleByUrl.get(linked[2]);
        out.push(`${h[1]} [${ru || linked[1]}](${linked[2]})`);
      } else {
        out.push(`${h[1]} ${tr(title)}`);
        stats.heading++;
      }
      continue;
    }
    if (/^<table/i.test(t)) {
      flush();
      out.push(translateTable(line));
      stats.cell++;
      continue;
    }
    if (t === '') {
      flush();
      out.push(line);
      continue;
    }
    buf.push(line);
  }
  flush();

  let body = out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  body = markTerms(body);

  // links to mirrored pages keep the trailing slash used across the site
  const description = (() => {
    const m = body.match(/^#\s+.*\n+([^\n#`<-][^\n]*)/m);
    if (!m) return '';
    let s = m[1]
      .replace(/^\s*(?:\[@(?:term:[^\]]*|note|t:\d+)\]\s*)+/, '')
      .replace(/\[@(?:term:[^\]]*|note|t:\d+)\]\s*/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/`/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (s.length > 180) s = s.slice(0, 180).replace(/\s\S*$/, '') + '…';
    return s;
  })();

  const fm = [
    '---',
    `title: "${fmEscape(name)}"`,
    `original: "https://core.telegram.org/${rel}"`,
    'section: ref',
    `kind: ${kind}`,
    ...(description ? [`description: "${fmEscape(description)}"`] : []),
    'layout: layout.njk',
    '---',
    '',
    '',
  ].join('\n');

  if (!reportOnly) {
    const dest = path.join(SRC, rel + '.md');
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + body);
  }
  written++;
}

function markTerms(md) {
  const used = new Set();
  const lines = md.split('\n');
  let inFence = false;
  let seenH1 = false;
  const take = (term) => {
    if (used.size >= MAX_TERMS_PER_PAGE || used.has(term)) return false;
    used.add(term);
    return true;
  };
  for (let i = 0; i < lines.length && used.size < MAX_TERMS_PER_PAGE; i++) {
    const line = lines[i];
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (inFence || !t) continue;
    if (/^#\s/.test(t)) {
      seenH1 = true;
      continue;
    }
    if (/^#{2,6}\s/.test(t)) continue;
    if (!seenH1) continue;

    if (/^<table/i.test(t)) {
      // A parameter row explains the field named in its first cell: when that
      // name is a known term, its description cell introduces the term.
      lines[i] = line.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, inner) => {
        if (used.size >= MAX_TERMS_PER_PAGE || /<th/i.test(inner)) return row;
        const cells = [...inner.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)];
        if (cells.length < 2) return row;
        const name = cells[0][1].replace(/<[^>]+>/g, '').trim();
        const last = cells[cells.length - 1];
        const term =
          (REF_TERMS.includes(name) && name) ||
          REF_TERMS.find((x) => !used.has(x) && mentions(last[1], x));
        if (!term || !take(term)) return row;
        const marked = last[0].replace(/^(<td[^>]*>)/, (a) => a + `[@term:${term}] `);
        return '<tr>' + inner.slice(0, last.index) + marked + inner.slice(last.index + last[0].length) + '</tr>';
      });
      continue;
    }
    const hit = REF_TERMS.find((term) => !used.has(term) && mentions(line, term));
    if (hit && take(hit)) {
      // the marker must open the block *after* any list bullet or quote marker,
      // otherwise it would turn a list item into a paragraph
      const pre = line.match(/^(\s*(?:>\s*)*(?:[-*+]\s+|\d+[.)]\s+)?)/)[1];
      lines[i] = pre + `[@term:${hit}] ` + line.slice(pre.length);
    }
  }
  return lines.join('\n');
}

console.log(`reference pages written: ${written}`);
if (missing.size) {
  const list = [...missing.entries()].sort((a, b) => b[1] - a[1]);
  await writeFile(path.join(TM, 'missing.json'), JSON.stringify(list.map(([text, n]) => ({ text, n })), null, 1));
  console.log(`untranslated strings: ${missing.size} (see .extracted/tm/missing.json)`);
  for (const [text, n] of list.slice(0, 10)) console.log(`  ${n}× ${text.slice(0, 90)}`);
} else {
  console.log('every string resolved through the translation memory');
}
