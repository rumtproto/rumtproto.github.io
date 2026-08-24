---
title: "payments.resaleStarGifts"
original: "https://core.telegram.org/constructor/payments.resaleStarGifts"
section: ref
description: "List of gifts currently on resale »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.resaleStarGifts","url":"/constructor/payments.resaleStarGifts/"}]
layout: layout.njk
---

# payments.resaleStarGifts

List of gifts currently on [resale »](/api/gifts/#reselling-collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.resaleStarGifts/" class="current_page_link">payments.resaleStarGifts</a>#947a12df flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> attributes:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; attributes_hash:flags.1?<a href="/type/long/">long</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; counters:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeCounter/">StarGiftAttributeCounter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ResaleStarGifts/">payments.ResaleStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results.</td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt;</td><td>Collectible gifts on resale (may be less than <code>count</code>, in which case <code>next_offset</code> will be set).</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset for pagination, pass this to <a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a>.<code>offset</code> to fetch the next results.</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt;</td><td>Possible gift attributes, only set if <a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a>.<code>attributes_hash</code> is set (on the first call, it must be equal to <code>0</code>).</td></tr><tr><td><strong>attributes_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>Hash of the <code>attributes</code> field, pass this to <a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a>.<code>attributes_hash</code> to avoid returning any attributes (flag not set) if they haven't changed.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in the attributes.</td></tr><tr><td><strong>counters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeCounter/">StarGiftAttributeCounter</a>&gt;</td><td>Indicates the total number of gifts that have a specific attribute, only set if <a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a>.<code>offset</code> is empty (since this field is not related to the current result page but to all of them, it's only returned on the first page).</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the attributes.</td></tr></tbody></table>

### Type

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

### Related pages

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Get [collectible gifts](/api/gifts/#collectible-gifts) of a specific type currently on resale, see [here »](/api/gifts/#reselling-collectible-gifts) for more info.

`sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.

See [here »](/api/gifts/#sending-gifts) for detailed documentation on this method.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
