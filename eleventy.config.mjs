import markdownItAnchor from 'markdown-it-anchor';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const MIRROR = 'https://mirrortproto.github.io';

// Heading ids of the English originals, in document order (tools/genanchors.mjs).
// Reusing them keeps every `#anchor` link of the original documentation working
// after translation, and makes deep links interchangeable with the mirror.
let EN_ANCHORS = {};
try {
  EN_ANCHORS = JSON.parse(readFileSync('src/_data/anchors.json', 'utf8'));
} catch {}

// Short Russian explanations of the untranslatable terms, shown in the tooltip
// of a «термин» label wherever that term is introduced (src/_data/terms.json).
let TERMS = {};
try {
  TERMS = JSON.parse(readFileSync('src/_data/terms.json', 'utf8'));
} catch {}
const TERMS_CI = new Map(Object.entries(TERMS).map(([k, v]) => [k.toLowerCase(), v]));

// paragraph label icons (compact line glyphs, currentColor)
const ICON_TRANS =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M3 8l3-3M3 8l3 3M13 8l-3-3M13 8l-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_TERM =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5h10v13l-5-3.5-5 3.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const ICON_NOTE =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a4.2 4.2 0 0 1 2.6 7.5c-.5.4-.6.8-.6 1.4h-4c0-.6-.1-1-.6-1.4A4.2 4.2 0 0 1 8 2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.6 13.5h2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon.svg': 'favicon.svg' });
  eleventyConfig.addPassthroughCopy({ 'src/favicons': 'favicons' });
  eleventyConfig.addPassthroughCopy({ 'src/icon-64.png': 'icon-64.png' });
  eleventyConfig.addPassthroughCopy({ 'src/apple-touch-icon.png': 'apple-touch-icon.png' });
  eleventyConfig.addPassthroughCopy({ 'src/manifest.webmanifest': 'manifest.webmanifest' });

  eleventyConfig.addFilter('htmlattr', (s) =>
    String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  );

  // heading anchors (keep Cyrillic as-is)
  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      slugify: (s) => s.trim().toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/^-+|-+$/g, ''),
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: '#',
        placement: 'after',
        class: 'header-anchor',
        ariaHidden: true,
      }),
    })
  );

  const attrEsc = (s) =>
    String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Restore the original (English) heading ids on translated pages. Cross-links
  // in the documentation address headings by their English slug, so a page whose
  // heading count matches the original gets its ids replaced one for one; the
  // Cyrillic slug produced by markdown-it-anchor is kept as a secondary id so
  // links written against the Russian headings keep working too.
  const anchorWarnings = [];
  eleventyConfig.addTransform('heading-anchors', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    let rel = path.relative(path.resolve('docs'), out).replace(/\\/g, '/').replace(/index\.html$/, '');
    const urlPath = rel === '' ? '/' : '/' + rel;
    const entry = EN_ANCHORS[urlPath];
    const ids = entry && entry.ids;
    const aliases = (entry && entry.aliases) || [];
    if (!ids || !ids.length) return content;
    const start = content.indexOf('<article');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    let article = content.slice(start, end);
    const found = article.match(/<h[1-6][^>]*\sid="[^"]*"/g) || [];
    if (found.length !== ids.length) {
      anchorWarnings.push(`${urlPath}: ${found.length} headings, original has ${ids.length} — ids left as generated`);
      return content;
    }
    let i = 0;
    article = article.replace(
      /<h([1-6])([^>]*)\sid="([^"]*)"([^>]*)>([\s\S]*?)<\/h\1>/g,
      (_m, level, pre, ruId, post, inner) => {
        const k = i++;
        const enId = ids[k];
        const body = inner.replace(
          /(<a class="header-anchor" href=")#[^"]*(")/,
          (_a, a, b) => a + '#' + enId + b
        );
        // secondary anchors: the Cyrillic slug and the original-site slug, so
        // links written against either form still land on this heading
        const extra = new Set();
        if (ruId && ruId !== enId) extra.add(ruId);
        for (const a of aliases[k] || []) if (a && a !== enId) extra.add(a);
        const alias = [...extra].map((id) => `<span class="heading-alias" id="${id}"></span>`).join('');
        return `${alias}<h${level}${pre} id="${enId}"${post}>${body}</h${level}>`;
      }
    );
    return content.slice(0, start) + article + content.slice(end);
  });

  eleventyConfig.on('eleventy.after', () => {
    if (anchorWarnings.length) {
      console.warn(`[anchors] ${anchorWarnings.length} page(s) kept generated heading ids:`);
      for (const w of anchorWarnings.slice(0, 10)) console.warn('  ' + w);
    }
  });

  // Paragraph anchors + labels, in one pass over the <p> elements of <article>.
  //
  // Every mirrored page of this site is a faithful, paragraph-for-paragraph
  // translation of the corresponding page of the English mirror, so paragraph
  // numbering is shared between the two sites: paragraph #7 here is paragraph #7
  // there, and /api/config/#p-7 and mirrortproto.github.io/api/config/#p-7 point
  // at the same piece of text. Numbering is therefore computed at build time
  // instead of being written by hand — it cannot drift out of sync with the page.
  //
  // Markers understood at the start of a paragraph (several may be combined):
  //   [@note]    paragraph added by the translator — gets id="n-K" and is skipped
  //              by the translation counter, so it never shifts the numbers of
  //              the paragraphs that follow it
  //   [@term:X]  this paragraph introduces the untranslatable term X
  //   [@t:N]     explicit override: this paragraph translates original #N and
  //              re-syncs the counter for the rest of the page
  eleventyConfig.addTransform('paragraph-labels', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    const start = content.indexOf('<article');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;

    let rel = path.relative(path.resolve('docs'), out).replace(/\\/g, '/');
    rel = rel.replace(/index\.html$/, '');
    const urlPath = rel === '' ? '/' : '/' + rel;
    const mirrorBase = MIRROR + (urlPath === '/' ? '' : urlPath);
    // pages with no counterpart on the mirror carry `mirror: false` in front matter
    const linked = !content.includes('data-mirror="0"');

    const transLabel = (n) =>
      `<a class="para-label para-trans" href="${mirrorBase}#p-${n}" rel="noopener"` +
      ` title="Перевод абзаца ${n}"` +
      ` data-tip="Перевод: абзац ${n} оригинала. Нажмите, чтобы открыть исходный текст на mirrortproto.github.io">` +
      `${ICON_TRANS}</a>`;
    const termLabel = (term) => {
      const gloss = TERMS_CI.get(String(term).trim().toLowerCase());
      const tip = gloss
        ? `Термин: ${attrEsc(term)} — ${attrEsc(gloss)}`
        : `Термин: здесь вводится непереводимый термин «${attrEsc(term)}» — далее в тексте он используется без пояснений`;
      return (
        `<span class="para-label para-term" tabindex="0" role="note" title="Термин: ${attrEsc(term)}"` +
        ` data-tip="${tip}">${ICON_TERM}</span>`
      );
    };
    const noteLabel = () =>
      `<span class="para-label para-note" tabindex="0" role="note" title="Пояснение переводчика"` +
      ` data-tip="Пояснение: примечание переводчика или более понятное объяснение, которого нет в оригинале">` +
      `${ICON_NOTE}</span>`;

    let n = 0; // translated-paragraph counter (shared with the mirror)
    let k = 0; // translator-note counter
    let article = content.slice(start, end);
    article = article.replace(/<p>([\s\S]*?)<\/p>/g, (_m, inner) => {
      let body = inner;
      let isNote = false;
      let explicit = null;
      const terms = [];
      for (;;) {
        const m = body.match(/^\s*\[@(note|term:([^\]]*)|t:(\d+))\]/);
        if (!m) break;
        if (m[1] === 'note') isNote = true;
        else if (m[2] !== undefined) terms.push(m[2]);
        else explicit = parseInt(m[3], 10);
        body = body.slice(m[0].length).replace(/^\s+/, '');
      }
      const labels = [];
      let id;
      if (isNote) {
        k += 1;
        id = 'n-' + k;
        labels.push(noteLabel());
        for (const t of terms) labels.push(termLabel(t));
      } else {
        if (explicit !== null) n = explicit;
        else n += 1;
        id = 'p-' + n;
        if (linked) labels.push(transLabel(n));
        for (const t of terms) labels.push(termLabel(t));
      }
      const prefix = labels.length ? `<span class="para-labels">${labels.join('')}</span> ` : '';
      const anchor = `<a class="p-anchor" href="#${id}" aria-label="Ссылка на этот абзац">¶</a>`;
      // an illustration on its own line becomes a <figure>, not a paragraph —
      // same as the mirror, which keeps the paragraph number on the figure
      const media = body.replace(/<a\b[^>]*>|<\/a>|<img\b[^>]*>|<video\b[\s\S]*?<\/video>|<br\s*\/?>|\s+/g, '');
      if (media === '' && /<(img|video)\b/.test(body)) {
        return `<figure id="${id}" class="img-figure">${prefix}${body}${anchor}</figure>`;
      }
      return `<p id="${id}">${prefix}${body}${anchor}</p>`;
    });

    // A term or a note may also be introduced inside a list item or a table cell,
    // which markdown renders without a <p> wrapper. Those markers do not consume
    // a paragraph number; they only produce their icon in place.
    article = article.replace(/((?:\[@(?:note|term:[^\]]*)\]\s*)+)/g, (markers) => {
      const labels = [];
      for (const m of markers.matchAll(/\[@(note|term:([^\]]*))\]/g)) {
        labels.push(m[2] !== undefined ? termLabel(m[2]) : noteLabel());
      }
      return `<span class="para-labels">${labels.join('')}</span> `;
    });

    return content.slice(0, start) + article + content.slice(end);
  });

  // images/videos: placeholder boxes (same principle as the mirror)
  const entDecode = (s) =>
    s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
  const entEncode = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const BROKEN_SVG =
    '<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">' +
    '<rect x="1.75" y="2.75" width="12.5" height="10.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>' +
    '<path d="M2 10.5l3.2-2.8 2.6 2.2 3.4-3 2.8 2.6" fill="none" stroke="currentColor" stroke-width="1.3"/>' +
    '<line x1="4.2" y1="4.2" x2="11.8" y2="11.8" stroke="currentColor" stroke-width="1.3"/></svg>';

  function boxWrap(innerHtml, imgTag) {
    const attr = (n) => {
      const m = imgTag.match(new RegExp('\\s' + n + '="([^"]*)"'));
      return m ? m[1] : null;
    };
    const width = parseInt(attr('width') || '', 10);
    const height = parseInt(attr('height') || '', 10);
    const cls = attr('class') || '';
    const style = attr('style') || '';
    const text = entDecode(attr('alt') || attr('title') || '').trim();
    const icon = /(^|\s)(icon|emoji)(\s|$)/.test(cls) || (width > 0 && width <= 40);
    const boxDecls = [];
    const imgDecls = [];
    for (const d of style.split(';').map((s) => s.trim()).filter(Boolean)) {
      const prop = d.split(':')[0].trim().toLowerCase();
      if (/^(float|max-width|margin|margin-(top|bottom|left|right))$/.test(prop)) boxDecls.push(d);
      else imgDecls.push(d);
    }
    if (width > 0 && !icon) boxDecls.push('width:' + width + 'px');
    if (height > 0) boxDecls.push('height:' + height + 'px');
    let img = imgTag.replace(/\s*(width|height|style)="[^"]*"/g, '');
    if (imgDecls.length) {
      const st = ' style="' + entEncode(imgDecls.join(';')) + '"';
      img = img.endsWith('/>') ? img.slice(0, -2) + st + '/>' : img.slice(0, -1) + st + '>';
    }
    if (!/decoding=/.test(img)) img = img.replace(/^<img/, '<img decoding="async"');
    if (!/onload=/.test(img)) {
      img = img.replace(/^<img/,
        '<img onload="var b=this.closest(\'.img-box\');if(b)b.classList.add(\'img-ok\')" ' +
        'onerror="var b=this.closest(\'.img-box\');if(b)b.classList.add(\'img-broken\')"');
    }
    const chip =
      '<span class="img-alt" aria-hidden="true">' + BROKEN_SVG +
      (text ? '<span>' + entEncode(text) + '</span>' : '') + '</span>';
    const boxStyle = boxDecls.length ? ' style="' + entEncode(boxDecls.join(';')) + '"' : '';
    return '<span class="img-box' + (icon ? ' img-icon' : '') + '"' + boxStyle + '>' +
      innerHtml.replace(imgTag, img) + chip + '</span>';
  }

  eleventyConfig.addTransform('img-enhance', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    const stash = [];
    let s = content.replace(/<video\b[\s\S]*?<\/video>/g, (v0) => {
      let v = v0.replace(/\s*onclick="[^"]*"/g, '');
      const attr = (n) => {
        const m = v.match(new RegExp('\\s' + n + '="([^"]*)"'));
        return m ? m[1] : null;
      };
      const text = entDecode(attr('title') || attr('alt') || 'Видео').trim();
      if (!/onloadeddata=/.test(v)) {
        v = v.replace(/^<video/,
          '<video onloadeddata="var b=this.closest(\'.img-box\');if(b)b.classList.add(\'img-ok\')" ' +
          'onerror="var b=this.closest(\'.img-box\');if(b)b.classList.add(\'img-broken\')"');
      }
      const chip =
        '<span class="img-alt" aria-hidden="true">' + BROKEN_SVG +
        '<span>' + entEncode(text) + '</span></span>';
      stash.push('<span class="img-box img-video">' + v + chip + '</span>');
      return '\x00' + (stash.length - 1) + '\x00';
    });
    s = s.replace(/<a\b[^>]*><img\b[^>]*><\/a>/g, (m0) => {
      const img = m0.match(/<img\b[^>]*>/)[0];
      stash.push(boxWrap(m0, img));
      return '\x00' + (stash.length - 1) + '\x00';
    });
    s = s.replace(/<img\b[^>]*>/g, (img) => {
      stash.push(boxWrap(img, img));
      return '\x00' + (stash.length - 1) + '\x00';
    });
    return s.replace(/\x00(\d+)\x00/g, (_m, i) => stash[+i]);
  });

  // HTML minification (preserve <pre>/<script>)
  eleventyConfig.addTransform('minify-html', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    const parts = content.split(/(<pre[\s\S]*?<\/pre>|<script[\s\S]*?<\/script>)/g);
    return parts
      .map((part, i) => (i % 2 === 1 ? part : part.replace(/\s*\n+\s*/g, ' ').replace(/ {2,}/g, ' ')))
      .join('');
  });

  eleventyConfig.addCollection('pages', (collectionApi) =>
    collectionApi.getAll().filter((i) => i.data.section && i.inputPath.includes('/src/'))
  );

  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
  };
}
