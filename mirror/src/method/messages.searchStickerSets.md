---
title: "messages.searchStickerSets"
original: "https://core.telegram.org/method/messages.searchStickerSets"
section: ref
description: "messages.FoundStickerSets"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchStickerSets","url":"/method/messages.searchStickerSets/"}]
layout: layout.njk
---

# messages.searchStickerSets

Search for stickersets

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickerSetsNotModified/">messages.foundStickerSetsNotModified</a>#d54b65d = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;
<a href="/constructor/messages.foundStickerSets/">messages.foundStickerSets</a>#8af09dd2 hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;
---functions---
<a href="/method/messages.searchStickerSets/" class="current_page_link">messages.searchStickerSets</a>#35705b8a flags:<a href="/type/%23/">#</a> exclude_featured:flags.0?true q:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_featured</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Exclude featured stickersets from results</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Query string</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
