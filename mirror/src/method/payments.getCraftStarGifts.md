---
title: "payments.getCraftStarGifts"
original: "https://core.telegram.org/method/payments.getCraftStarGifts"
section: ref
description: "Obtain owned collectible gifts » of a specific type that can be used for crafting »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getCraftStarGifts","url":"/method/payments.getCraftStarGifts/"}]
layout: layout.njk
---

# payments.getCraftStarGifts

Obtain owned [collectible gifts »](/api/gifts/#collectible-gifts) of a specific type that can be used for [crafting »](/api/gifts/#crafting-collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.savedStarGifts/">payments.savedStarGifts</a>#95f389b1 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> chat_notifications_enabled:flags.1?<a href="/type/Bool/">Bool</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedStarGift/">SavedStarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;
---functions---
<a href="/method/payments.getCraftStarGifts/" class="current_page_link">payments.getCraftStarGifts</a>#fd05dd00 gift_id:<a href="/type/long/">long</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of the base gift type, equal to <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>gift_id</code> of the first selected gift.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for pagination.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
