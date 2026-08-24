---
title: "account.getMultiWallPapers"
original: "https://core.telegram.org/method/account.getMultiWallPapers"
section: ref
description: "Get info about multiple wallpapers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getMultiWallPapers","url":"/method/account.getMultiWallPapers/"}]
layout: layout.njk
---

# account.getMultiWallPapers

Get info about multiple [wallpapers](/api/wallpapers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/account.getMultiWallPapers/" class="current_page_link">account.getMultiWallPapers</a>#65ad71dc wallpapers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputWallPaper/">InputWallPaper</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WallPaper/">WallPaper</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>wallpapers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputWallPaper/">InputWallPaper</a>&gt;</td><td><a href="/api/wallpapers/">Wallpapers</a> to fetch info about</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[WallPaper](/type/WallPaper/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_INVALID</td><td>The specified wallpaper is invalid.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
