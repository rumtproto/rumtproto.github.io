---
title: "wallPaperNoFile"
original: "https://core.telegram.org/constructor/wallPaperNoFile"
section: ref
description: "Represents a wallpaper only based on colors/gradients."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"wallPaperNoFile","url":"/constructor/wallPaperNoFile/"}]
layout: layout.njk
---

# wallPaperNoFile

Represents a [wallpaper](/api/wallpapers/) only based on colors/gradients.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/wallPaperNoFile/" class="current_page_link">wallPaperNoFile</a>#e0804116 id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> default:flags.1?true dark:flags.4?true settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/">WallPaper</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Wallpaper ID</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is the default wallpaper</td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this wallpaper should be used in dark mode.</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a></td><td>Info on how to generate the wallpaper.</td></tr></tbody></table>

### Type

[WallPaper](/type/WallPaper/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
