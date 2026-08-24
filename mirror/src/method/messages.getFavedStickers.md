---
title: "messages.getFavedStickers"
original: "https://core.telegram.org/method/messages.getFavedStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFavedStickers","url":"/method/messages.getFavedStickers/"}]
layout: layout.njk
---

# messages.getFavedStickers

Get faved stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.favedStickersNotModified/">messages.favedStickersNotModified</a>#9e8fa6d3 = <a href="/type/messages.FavedStickers/">messages.FavedStickers</a>;
<a href="/constructor/messages.favedStickers/">messages.favedStickers</a>#2cb51097 hash:<a href="/type/long/">long</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.FavedStickers/">messages.FavedStickers</a>;
---functions---
<a href="/method/messages.getFavedStickers/" class="current_page_link">messages.getFavedStickers</a>#4f1aaa9 hash:<a href="/type/long/">long</a> = <a href="/type/messages.FavedStickers/">messages.FavedStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.FavedStickers](/type/messages.FavedStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
