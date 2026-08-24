---
title: "messages.featuredStickers"
original: "https://core.telegram.org/constructor/messages.featuredStickers"
section: ref
description: "messages.FeaturedStickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.featuredStickers","url":"/constructor/messages.featuredStickers/"}]
layout: layout.njk
---

# messages.featuredStickers

Featured stickersets

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.featuredStickers/" class="current_page_link">messages.featuredStickers</a>#be382906 flags:<a href="/type/%23/">#</a> premium:flags.0?true hash:<a href="/type/long/">long</a> count:<a href="/type/int/">int</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; unread:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/messages.FeaturedStickers/">messages.FeaturedStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is a premium stickerset</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of featured stickers</td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt;</td><td>Featured stickersets</td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>IDs of new featured stickersets</td></tr></tbody></table>

### Type

[messages.FeaturedStickers](/type/messages.FeaturedStickers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
