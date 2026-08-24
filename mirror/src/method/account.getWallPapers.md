---
title: "account.getWallPapers"
original: "https://core.telegram.org/method/account.getWallPapers"
section: ref
description: "Returns a list of available wallpapers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getWallPapers","url":"/method/account.getWallPapers/"}]
layout: layout.njk
---

# account.getWallPapers

Returns a list of available [wallpapers](/api/wallpapers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.wallPapersNotModified/">account.wallPapersNotModified</a>#1c199183 = <a href="/type/account.WallPapers/">account.WallPapers</a>;
<a href="/constructor/account.wallPapers/">account.wallPapers</a>#cdc3858c hash:<a href="/type/long/">long</a> wallpapers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WallPaper/">WallPaper</a>&gt; = <a href="/type/account.WallPapers/">account.WallPapers</a>;
---functions---
<a href="/method/account.getWallPapers/" class="current_page_link">account.getWallPapers</a>#7967d36 hash:<a href="/type/long/">long</a> = <a href="/type/account.WallPapers/">account.WallPapers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.WallPapers](/type/account.WallPapers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
