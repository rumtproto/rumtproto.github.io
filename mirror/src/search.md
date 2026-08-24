---
title: "Search"
original: "https://core.telegram.org"
section: other
description: "Full-text search over the mirrored Telegram API, MTProto and TL schema documentation, with a filter by section."
generated: true
layout: layout.njk
---

# Search

<link rel="stylesheet" href="/pagefind/pagefind-ui.css">

Full-text search over the whole mirror: articles, constructors, methods and types. Use the **Section** filter below to limit the search to Telegram API, MTProto, Schema or Other (FAQ) pages.

<div id="search-page"></div>

<script src="/pagefind/pagefind-ui.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    if (window.PagefindUI) {
      var ui = new PagefindUI({
        element: '#search-page',
        showSubResults: true,
        showImages: false,
        pageSize: 15,
        translations: { placeholder: 'Search…' }
      });
      var q = new URLSearchParams(window.location.search).get('q');
      if (q) { ui.triggerSearch(q); }
    }
  });
</script>
