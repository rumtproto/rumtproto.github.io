---
title: "messages.searchEmojiStickerSets"
original: "https://core.telegram.org/method/messages.searchEmojiStickerSets"
section: ref
description: "Search for custom emoji stickersets »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchEmojiStickerSets","url":"/method/messages.searchEmojiStickerSets/"}]
layout: layout.njk
---

# messages.searchEmojiStickerSets

Search for [custom emoji stickersets »](/api/custom-emoji/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickerSetsNotModified/">messages.foundStickerSetsNotModified</a>#d54b65d = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;
<a href="/constructor/messages.foundStickerSets/">messages.foundStickerSets</a>#8af09dd2 hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;
---functions---
<a href="/method/messages.searchEmojiStickerSets/" class="current_page_link">messages.searchEmojiStickerSets</a>#92b4494c flags:<a href="/type/%23/">#</a> exclude_featured:flags.0?true q:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FoundStickerSets/">messages.FoundStickerSets</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_featured</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Exclude featured stickersets from results</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Query string</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
