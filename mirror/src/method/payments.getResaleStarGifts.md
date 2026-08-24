---
title: "payments.getResaleStarGifts"
original: "https://core.telegram.org/method/payments.getResaleStarGifts"
section: ref
description: "Get collectible gifts of a specific type currently on resale, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getResaleStarGifts","url":"/method/payments.getResaleStarGifts/"}]
layout: layout.njk
---

# payments.getResaleStarGifts

Get [collectible gifts](/api/gifts/#collectible-gifts) of a specific type currently on resale, see [here »](/api/gifts/#reselling-collectible-gifts) for more info.

`sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.

See [here »](/api/gifts/#sending-gifts) for detailed documentation on this method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>#947a12df flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> attributes:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; attributes_hash:flags.1?<a href="/type/long/">long</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; counters:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeCounter/">StarGiftAttributeCounter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ResaleStarGifts/">payments.ResaleStarGifts</a>;
---functions---
<a href="/method/payments.getResaleStarGifts/" class="current_page_link">payments.getResaleStarGifts</a>#7a5fa236 flags:<a href="/type/%23/">#</a> sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?<a href="/type/long/">long</a> gift_id:<a href="/type/long/">long</a> attributes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeId/">StarGiftAttributeId</a>&gt; offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.ResaleStarGifts/">payments.ResaleStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sort_by_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Sort gifts by price (ascending).</td></tr><tr><td><strong>sort_by_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Sort gifts by number (ascending).</td></tr><tr><td><strong>for_craft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Only return collectible gifts that can be bought and used for <a href="/api/gifts/#crafting-collectible-gifts">crafting »</a>; render each returned gift's <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>craft_chance_permille</code> as its crafting success contribution.</td></tr><tr><td><strong>stars_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Only return gifts that can be bought using <a href="/api/stars/">Stars</a>.</td></tr><tr><td><strong>attributes_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If a previous call to the method was made and <a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>.<code>attributes_hash</code> was set, pass it here to avoid returning any results if they haven't changed.<br>Otherwise, set this flag and pass <code>0</code> to return <a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>.<code>attributes_hash</code> and <a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>.<code>attributes</code>, <strong>these two fields will not be set</strong> if this flag is not set.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Mandatory identifier of the base gift from which the collectible gift was upgraded.</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeId/">StarGiftAttributeId</a>&gt;</td><td>Optionally filter gifts with the specified attributes. If no attributes of a specific type are specified, all attributes of that type are allowed.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for pagination. If not equal to an empty string, <a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>.<code>counters</code> will not be set to avoid returning the counters every time a new page is fetched.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_ATTRIBUTE_INVALID</td><td>One of the specified star gift attributes is invalid.</td></tr><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/)

List of gifts currently on [resale »](/api/gifts/#reselling-collectible-gifts).

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
