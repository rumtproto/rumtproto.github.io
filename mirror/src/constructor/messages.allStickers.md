---
title: "messages.allStickers"
original: "https://core.telegram.org/constructor/messages.allStickers"
section: ref
description: "Info about all installed stickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.allStickers","url":"/constructor/messages.allStickers/"}]
layout: layout.njk
---

# messages.allStickers

Info about all installed stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.allStickers/" class="current_page_link">messages.allStickers</a>#cdbbcebb hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSet/">StickerSet</a>&gt; = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSet/">StickerSet</a>&gt;</td><td>All stickersets</td></tr></tbody></table>

### Type

[messages.AllStickers](/type/messages.AllStickers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
