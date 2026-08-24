---
title: "messages.getFeaturedStickers"
original: "https://core.telegram.org/method/messages.getFeaturedStickers"
section: ref
description: "messages.FeaturedStickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFeaturedStickers","url":"/method/messages.getFeaturedStickers/"}]
layout: layout.njk
---

# messages.getFeaturedStickers

Get featured stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.featuredStickersNotModified/">messages.featuredStickersNotModified</a>#c6dc0c66 count:<a href="/type/int/">int</a> = <a href="/type/messages.FeaturedStickers/">messages.FeaturedStickers</a>;
<a href="/constructor/messages.featuredStickers/">messages.featuredStickers</a>#be382906 flags:<a href="/type/%23/">#</a> premium:flags.0?true hash:<a href="/type/long/">long</a> count:<a href="/type/int/">int</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; unread:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/messages.FeaturedStickers/">messages.FeaturedStickers</a>;
---functions---
<a href="/method/messages.getFeaturedStickers/" class="current_page_link">messages.getFeaturedStickers</a>#64780b14 hash:<a href="/type/long/">long</a> = <a href="/type/messages.FeaturedStickers/">messages.FeaturedStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.FeaturedStickers](/type/messages.FeaturedStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
