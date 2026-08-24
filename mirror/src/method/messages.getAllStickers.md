---
title: "messages.getAllStickers"
original: "https://core.telegram.org/method/messages.getAllStickers"
section: ref
description: "Get all installed stickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAllStickers","url":"/method/messages.getAllStickers/"}]
layout: layout.njk
---

# messages.getAllStickers

Get all installed stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.allStickersNotModified/">messages.allStickersNotModified</a>#e86602c3 = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;
<a href="/constructor/messages.allStickers/">messages.allStickers</a>#cdbbcebb hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSet/">StickerSet</a>&gt; = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;
---functions---
<a href="/method/messages.getAllStickers/" class="current_page_link">messages.getAllStickers</a>#b8a0a1a8 hash:<a href="/type/long/">long</a> = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AllStickers](/type/messages.AllStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
