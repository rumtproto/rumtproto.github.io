---
title: "messages.getRecentStickers"
original: "https://core.telegram.org/method/messages.getRecentStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getRecentStickers","url":"/method/messages.getRecentStickers/"}]
layout: layout.njk
---

# messages.getRecentStickers

Get recent stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.recentStickersNotModified/">messages.recentStickersNotModified</a>#b17f890 = <a href="/type/messages.RecentStickers/">messages.RecentStickers</a>;
<a href="/constructor/messages.recentStickers/">messages.recentStickers</a>#88d37c56 hash:<a href="/type/long/">long</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; dates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.RecentStickers/">messages.RecentStickers</a>;
---functions---
<a href="/method/messages.getRecentStickers/" class="current_page_link">messages.getRecentStickers</a>#9da9403b flags:<a href="/type/%23/">#</a> attached:flags.0?true hash:<a href="/type/long/">long</a> = <a href="/type/messages.RecentStickers/">messages.RecentStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>attached</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Get stickers recently attached to photo or video files</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.RecentStickers](/type/messages.RecentStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
