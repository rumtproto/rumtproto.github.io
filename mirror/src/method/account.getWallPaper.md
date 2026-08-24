---
title: "account.getWallPaper"
original: "https://core.telegram.org/method/account.getWallPaper"
section: ref
description: "Get info about a certain wallpaper"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getWallPaper","url":"/method/account.getWallPaper/"}]
layout: layout.njk
---

# account.getWallPaper

Get info about a certain [wallpaper](/api/wallpapers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/wallPaper/">wallPaper</a>#a437c3ed id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/">WallPaper</a>;
<a href="/constructor/wallPaperNoFile/">wallPaperNoFile</a>#e0804116 id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> default:flags.1?true dark:flags.4?true settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/">WallPaper</a>;
---functions---
<a href="/method/account.getWallPaper/" class="current_page_link">account.getWallPaper</a>#fc8ddbea wallpaper:<a href="/type/InputWallPaper/">InputWallPaper</a> = <a href="/type/WallPaper/">WallPaper</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/type/InputWallPaper/">InputWallPaper</a></td><td>The <a href="/api/wallpapers/">wallpaper</a> to get info about</td></tr></tbody></table>

### Result

[WallPaper](/type/WallPaper/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_INVALID</td><td>The specified wallpaper is invalid.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
