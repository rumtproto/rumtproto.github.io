---
title: "account.wallPapers"
original: "https://core.telegram.org/constructor/account.wallPapers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.wallPapers","url":"/constructor/account.wallPapers/"}]
layout: layout.njk
---

# account.wallPapers

Installed [wallpapers](/api/wallpapers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.wallPapers/" class="current_page_link">account.wallPapers</a>#cdc3858c hash:<a href="/type/long/">long</a> wallpapers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WallPaper/">WallPaper</a>&gt; = <a href="/type/account.WallPapers/">account.WallPapers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>wallpapers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WallPaper/">WallPaper</a>&gt;</td><td><a href="/api/wallpapers/">Wallpapers</a></td></tr></tbody></table>

### Type

[account.WallPapers](/type/account.WallPapers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
