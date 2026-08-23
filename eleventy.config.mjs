import markdownItAnchor from 'markdown-it-anchor';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/img': 'img' });

  // Heading anchors for in-page links (keep Cyrillic as-is)
  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      slugify: (s) => s.trim().toLowerCase().replace(/\s+/g, '-'),
    })
  );

  // All translated pages, for the sidebar / index generation
  eleventyConfig.addCollection('pages', (collectionApi) =>
    collectionApi.getAll().filter((i) => i.data.section && i.inputPath.includes('/src/'))
  );

  eleventyConfig.addFilter('internalLink', (href) => {
    // INTERNAL:/path or /path -> local site link
    if (!href) return href;
    const p = href.replace(/^INTERNAL:/, '');
    if (!p.startsWith('/')) return p;
    const clean = p.split('#')[0];
    return clean + '/';
  });

  return {
    dir: { input: 'src', output: '_site', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
