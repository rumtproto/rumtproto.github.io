---
title: "wallPaper"
original: "https://core.telegram.org/constructor/wallPaper"
section: ref
description: "Represents a wallpaper based on an image."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"wallPaper","url":"/constructor/wallPaper/"}]
layout: layout.njk
---

# wallPaper

Represents a [wallpaper](/api/wallpapers/) based on an image.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/wallPaper/" class="current_page_link">wallPaper</a>#a437c3ed id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> settings:flags.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a> = <a href="/type/WallPaper/">WallPaper</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we created this wallpaper</td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is the default wallpaper</td></tr><tr><td><strong>pattern</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/wallpapers/#pattern-wallpapers">pattern wallpaper »</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this wallpaper should be used in dark mode.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique wallpaper ID, used when generating <a href="/api/links/#wallpaper-links">wallpaper links</a> or <a href="/api/wallpapers/">importing wallpaper links</a>.</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The actual wallpaper</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WallPaperSettings/">WallPaperSettings</a></td><td>Info on how to generate the wallpaper, according to <a href="/api/wallpapers/">these instructions »</a>.</td></tr></tbody></table>

### Type

[WallPaper](/type/WallPaper/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
