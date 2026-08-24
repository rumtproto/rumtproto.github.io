---
title: "messages.getEmojiStickers"
original: "https://core.telegram.org/method/messages.getEmojiStickers"
section: ref
description: "Gets the list of currently installed custom emoji stickersets."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiStickers","url":"/method/messages.getEmojiStickers/"}]
layout: layout.njk
---

# messages.getEmojiStickers

Gets the list of currently installed [custom emoji stickersets](/api/custom-emoji/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.allStickersNotModified/">messages.allStickersNotModified</a>#e86602c3 = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;
<a href="/constructor/messages.allStickers/">messages.allStickers</a>#cdbbcebb hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSet/">StickerSet</a>&gt; = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;
---functions---
<a href="/method/messages.getEmojiStickers/" class="current_page_link">messages.getEmojiStickers</a>#fbfca18f hash:<a href="/type/long/">long</a> = <a href="/type/messages.AllStickers/">messages.AllStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AllStickers](/type/messages.AllStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
