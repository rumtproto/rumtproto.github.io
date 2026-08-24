---
title: "InputWallPaper"
original: "https://core.telegram.org/type/InputWallPaper"
section: ref
description: "Telegram apps support generating, sharing and synchronizing chat backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputWallPaper","url":"/type/InputWallPaper/"}]
layout: layout.njk
---

# InputWallPaper

[Wallpaper](/api/wallpapers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputWallPaper/">inputWallPaper</a>#e630b979 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputWallPaper/" class="current_page_link">InputWallPaper</a>;
<a href="/constructor/inputWallPaperSlug/">inputWallPaperSlug</a>#72091c80 slug:<a href="/type/string/">string</a> = <a href="/type/InputWallPaper/" class="current_page_link">InputWallPaper</a>;
<a href="/constructor/inputWallPaperNoFile/">inputWallPaperNoFile</a>#967a462e id:<a href="/type/long/">long</a> = <a href="/type/InputWallPaper/" class="current_page_link">InputWallPaper</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputWallPaper/">inputWallPaper</a></td><td><a href="/api/wallpapers/">Wallpaper</a></td></tr><tr><td><a href="/constructor/inputWallPaperSlug/">inputWallPaperSlug</a></td><td><a href="/api/wallpapers/">Wallpaper</a> by slug (a unique ID, obtained from a <a href="/api/links/#wallpaper-links">wallpaper link »</a>)</td></tr><tr><td><a href="/constructor/inputWallPaperNoFile/">inputWallPaperNoFile</a></td><td><a href="/api/wallpapers/">Wallpaper</a> with no file access hash, used for example when deleting (<code>unsave=true</code>) wallpapers using <a href="/method/account.saveWallPaper/">account.saveWallPaper</a>, specifying just the wallpaper ID.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
