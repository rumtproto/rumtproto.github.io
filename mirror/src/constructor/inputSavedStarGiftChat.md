---
title: "inputSavedStarGiftChat"
original: "https://core.telegram.org/constructor/inputSavedStarGiftChat"
section: ref
description: "A gift received by a channel we own."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSavedStarGiftChat","url":"/constructor/inputSavedStarGiftChat/"}]
layout: layout.njk
---

# inputSavedStarGiftChat

A gift received by a channel we own.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSavedStarGiftChat/" class="current_page_link">inputSavedStarGiftChat</a>#f101aa7f peer:<a href="/type/InputPeer/">InputPeer</a> saved_id:<a href="/type/long/">long</a> = <a href="/type/InputSavedStarGift/">InputSavedStarGift</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The channel.</td></tr><tr><td><strong>saved_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the gift, must be the <code>saved_id</code> of a <a href="/constructor/messageActionStarGift/">messageActionStarGift</a>/<a href="/constructor/messageActionStarGiftUnique/">messageActionStarGiftUnique</a> constructor.</td></tr></tbody></table>

### Type

[InputSavedStarGift](/type/InputSavedStarGift/)

### Related pages

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](/api/gifts/) was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).
