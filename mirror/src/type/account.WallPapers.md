---
title: "Account.WallPapers"
original: "https://core.telegram.org/type/account.WallPapers"
section: ref
description: "Telegram apps support generating, sharing and synchronizing chat backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.WallPapers","url":"/type/account.WallPapers/"}]
layout: layout.njk
---

# Account.WallPapers

[Wallpapers](/api/wallpapers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.wallPapersNotModified/">account.wallPapersNotModified</a>#1c199183 = <a href="/type/account.WallPapers/" class="current_page_link">account.WallPapers</a>;
<a href="/constructor/account.wallPapers/">account.wallPapers</a>#cdc3858c hash:<a href="/type/long/">long</a> wallpapers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WallPaper/">WallPaper</a>&gt; = <a href="/type/account.WallPapers/" class="current_page_link">account.WallPapers</a>;

---functions---

<a href="/method/account.getWallPapers/">account.getWallPapers</a>#7967d36 hash:<a href="/type/long/">long</a> = <a href="/type/account.WallPapers/" class="current_page_link">account.WallPapers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.wallPapersNotModified/">account.wallPapersNotModified</a></td><td>No new <a href="/api/wallpapers/">wallpapers</a> were found</td></tr><tr><td><a href="/constructor/account.wallPapers/">account.wallPapers</a></td><td>Installed <a href="/api/wallpapers/">wallpapers</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPapers/">account.getWallPapers</a></td><td>Returns a list of available <a href="/api/wallpapers/">wallpapers</a>.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
