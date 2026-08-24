---
title: "WallPaper"
original: "https://core.telegram.org/type/WallPaper"
section: ref
description: "Object contains info on a wallpaper."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WallPaper","url":"/type/WallPaper/"}]
layout: layout.njk
---

# WallPaper

Object contains info on a [wallpaper](/api/wallpapers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/wallPaper/">wallPaper</a>#a437c3ed id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/" class="current_page_link">WallPaper</a>;
<a href="/constructor/wallPaperNoFile/">wallPaperNoFile</a>#e0804116 id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> default:flags.1?true dark:flags.4?true settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/" class="current_page_link">WallPaper</a>;

---functions---

<a href="/method/account.getWallPaper/">account.getWallPaper</a>#fc8ddbea wallpaper:<a href="/type/InputWallPaper/">InputWallPaper</a> = <a href="/type/WallPaper/" class="current_page_link">WallPaper</a>;
<a href="/method/account.uploadWallPaper/">account.uploadWallPaper</a>#e39a8f03 flags:<a href="/type/%23/">#</a> for_chat:flags.0?true file:<a href="/type/InputFile/">InputFile</a> mime_type:<a href="/type/string/">string</a> settings:<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/" class="current_page_link">WallPaper</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/wallPaper/">wallPaper</a></td><td>Represents a <a href="/api/wallpapers/">wallpaper</a> based on an image.</td></tr><tr><td><a href="/constructor/wallPaperNoFile/">wallPaperNoFile</a></td><td>Represents a <a href="/api/wallpapers/">wallpaper</a> only based on colors/gradients.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPaper/">account.getWallPaper</a></td><td>Get info about a certain <a href="/api/wallpapers/">wallpaper</a></td></tr><tr><td><a href="/method/account.uploadWallPaper/">account.uploadWallPaper</a></td><td>Create and upload a new <a href="/api/wallpapers/">wallpaper</a></td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
