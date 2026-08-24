import markdownItAnchor from 'markdown-it-anchor';
import { minify as minifyHtml } from 'html-minifier-terser';
import { minify as minifyJs } from 'terser';
import { transform as transformCss } from 'lightningcss';

export default function (eleventyConfig) {
  // style.css is compiled instead of copied, so it can be minified. It is kept
  // out of collections by src/css/css.11tydata.json — otherwise sitemap.njk,
  // which walks collections.all, would list the stylesheet as a page.
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: (inputContent, inputPath) => async () => {
      const { code } = transformCss({
        filename: inputPath,
        code: Buffer.from(inputContent),
        minify: true,
      });
      return code.toString();
    },
  });
  eleventyConfig.addPassthroughCopy({ 'src/favicon.svg': 'favicon.svg' });
  eleventyConfig.addPassthroughCopy({ 'src/favicons': 'favicons' });
  eleventyConfig.addPassthroughCopy({ 'src/icon-64.png': 'icon-64.png' });
  eleventyConfig.addPassthroughCopy({ 'src/apple-touch-icon.png': 'apple-touch-icon.png' });
  eleventyConfig.addPassthroughCopy({ 'src/manifest.webmanifest': 'manifest.webmanifest' });

  // images: every <img> (standalone or linked) is wrapped into a .img-box
  // placeholder that shows a broken-image icon + the original alt/title text
  // until the image actually loads (then JS adds .img-ok and hides the chip).
  const entDecode = (s) =>
    s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
  const entEncode = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // The broken-image glyph used to be inlined into every placeholder chip: four
  // SVG nodes and ~430 bytes duplicated per occurrence. It now lives once in
  // style.css as a mask on .img-alt::before, so the chip carries no icon markup
  // at all and still tints itself with currentColor for the dark theme.

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
    // NOTE: no loading="lazy" here — a lazy image hidden with display:none
    // never starts loading, so the placeholder would never resolve.
    if (!/decoding=/.test(img)) img = img.replace(/^<img/, '<img decoding="async"');
    // Load/failure signals are wired by the capture-phase listener in layout.njk
    // (fires at the same moment an inline on* handler would). Inline handlers are
    // deliberately NOT emitted: Instant View drops nodes carrying inline JS.

    const chip =
      '<span class="img-alt" aria-hidden="true">' +
      (text ? '<span>' + entEncode(text) + '</span>' : '') + '</span>';
    const boxStyle = boxDecls.length ? ' style="' + entEncode(boxDecls.join(';')) + '"' : '';
    return '<span class="img-box' + (icon ? ' img-icon' : '') + '"' + boxStyle + '>' +
      innerHtml.replace(imgTag, img) + chip + '</span>';
  }

  eleventyConfig.addTransform('img-enhance', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    const stash = [];
    // videos: same placeholder principle as images
    let s = content.replace(/<video\b[\s\S]*?<\/video>/g, (v0) => {
      let v = v0.replace(/\s*onclick="[^"]*"/g, ''); // original player JS is not mirrored
      const attr = (n) => {
        const m = v.match(new RegExp('\\s' + n + '="([^"]*)"'));
        return m ? m[1] : null;
      };
      const text = entDecode(attr('title') || attr('alt') || 'Video').trim();
      // signals wired by the capture-phase listener in layout.njk (see boxWrap)
      const chip =
        '<span class="img-alt" aria-hidden="true">' +
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

  // escape for use inside HTML attributes (meta/OG tags)
  eleventyConfig.addFilter('htmlattr', (s) =>
    String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  );

  // A handful of TL pages carry characters that are not URL-safe: `/type/Vector t`
  // has a space and `/type/#` is literally the TL "nat" type. page.url reports
  // them verbatim, which would put a raw space into <link rel="canonical"> and
  // into <loc>, and would cut `/type/#/` short at the fragment. Encoding runs per
  // segment so the separators survive.
  eleventyConfig.addFilter('urlpath', (s) =>
    String(s).split('/').map(encodeURIComponent).join('/')
  );

  // Heading anchors (keep Cyrillic/Latin as-is)
  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      slugify: (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, ''),
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: '#',
        placement: 'after',
        class: 'header-anchor',
        ariaHidden: true,
      }),
    })
  );

  // Paragraph anchors: every <p> inside <article> gets id="p-N" and a ¶ link
  eleventyConfig.addTransform('paragraph-anchors', (content) => {
    if (typeof content !== 'string' || !content.includes('<article>')) return content;
    const start = content.indexOf('<article>');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    let n = 0;
    let article = content.slice(start, end);
    article = article.replace(/<p>([\s\S]*?)<\/p>/g, (_m, inner) => {
      n += 1;
      return `<p id="p-${n}">${inner}<a class="p-anchor" href="#p-${n}" aria-label="Link to this paragraph">¶</a></p>`;
    });
    return content.slice(0, start) + article + content.slice(end);
  });

  // Instant View needs standalone media as a block: a photo cannot live inside a
  // text paragraph. A <p> whose whole content is one media box becomes a <figure>.
  // Runs AFTER paragraph-anchors on purpose, so the p-N numbering, the id and the
  // ¶ link are carried over verbatim and existing #p-N links keep resolving.
  // Inline icons/emoji (.img-icon) stay inline — they belong to the text flow.
  function spanEnd(s) {
    // s starts with "<span"; index just past its matching </span>, or -1
    const re = /<(\/?)span\b[^>]*>/g;
    let depth = 0;
    let m;
    while ((m = re.exec(s))) {
      depth += m[1] ? -1 : 1;
      if (depth === 0) return re.lastIndex;
    }
    return -1;
  }

  eleventyConfig.addTransform('media-block', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    if (!content.includes('<article>') || !content.includes('class="img-box')) return content;
    const start = content.indexOf('<article>');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;

    const article = content.slice(start, end).replace(
      /<p id="(p-\d+)">([\s\S]*?)<\/p>/g,
      (whole, id, inner) => {
        const anchorRe = /<a class="p-anchor"[\s\S]*?<\/a>\s*$/;
        const anchor = (inner.match(anchorRe) || [''])[0];
        const body = inner.replace(anchorRe, '').trim();
        // exactly one media box, nothing else in the paragraph
        if (!/^<span class="img-box(?! img-icon)/.test(body)) return whole;
        if (spanEnd(body) !== body.length) return whole;
        return `<figure id="${id}" class="img-figure">${body}${anchor}</figure>`;
      }
    );
    return content.slice(0, start) + article + content.slice(end);
  });

  // ---- minification -------------------------------------------------------
  // The inline scripts are byte-identical across all ~3200 outputs, so Terser
  // runs once per distinct body and every later page reuses the cached result.
  const JS_CACHE = new Map();
  const SCRIPT_RE = /<script([^>]*)>([\s\S]*?)<\/script>/g;
  // Leave alone anything with a src, and any non-JS payload — notably the
  // application/ld+json breadcrumb blocks, which Terser would reject.
  const isInlineJs = (attrs) =>
    !/\ssrc=/.test(attrs) &&
    (!/\stype=/.test(attrs) ||
      /\stype=(["'])(?:text\/javascript|application\/javascript|module)\1/.test(attrs));

  async function minifyInlineJs(html) {
    const pending = new Set();
    for (const [, attrs, body] of html.matchAll(SCRIPT_RE)) {
      if (isInlineJs(attrs) && body.trim() && !JS_CACHE.has(body)) pending.add(body);
    }
    for (const body of pending) {
      try {
        const { code } = await minifyJs(body, { compress: true, mangle: true });
        JS_CACHE.set(body, typeof code === 'string' ? code : body);
      } catch {
        JS_CACHE.set(body, body); // a minifier failure must never break a page
      }
    }
    return html.replace(SCRIPT_RE, (whole, attrs, body) =>
      isInlineJs(attrs) && JS_CACHE.has(body) ? `<script${attrs}>${JS_CACHE.get(body)}</script>` : whole
    );
  }

  eleventyConfig.addTransform('minify-html', async (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    return minifyHtml(await minifyInlineJs(content), {
      collapseWhitespace: true,
      // Never drop a space outright. Mirrored prose carries meaning in the
      // whitespace between inline <code>/<a>/<strong> runs, and <pre> content
      // is left untouched by html-minifier-terser regardless.
      conservativeCollapse: true,
      removeComments: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: false, // done above, with caching
    });
  });

  eleventyConfig.addCollection('pages', (collectionApi) =>
    collectionApi.getAll().filter((i) => i.data.section && i.inputPath.includes('/src/'))
  );

  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
    // markdown must NOT pass through a templating engine: mirrored content
    // contains literal {{ }} sequences that would break Nunjucks/Liquid.
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
  };
}
