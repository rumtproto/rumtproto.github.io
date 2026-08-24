---
title: "payments.ResaleStarGifts"
original: "https://core.telegram.org/type/payments.ResaleStarGifts"
section: ref
description: "List of gifts currently on resale »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.ResaleStarGifts","url":"/type/payments.ResaleStarGifts/"}]
layout: layout.njk
---

# payments.ResaleStarGifts

List of gifts currently on [resale »](/api/gifts/#reselling-collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a>#947a12df flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> attributes:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; attributes_hash:flags.1?<a href="/type/long/">long</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; counters:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeCounter/">StarGiftAttributeCounter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ResaleStarGifts/" class="current_page_link">payments.ResaleStarGifts</a>;

---functions---

<a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a>#7a5fa236 flags:<a href="/type/%23/">#</a> sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?<a href="/type/long/">long</a> gift_id:<a href="/type/long/">long</a> attributes:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttributeId/">StarGiftAttributeId</a>&gt; offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.ResaleStarGifts/" class="current_page_link">payments.ResaleStarGifts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.resaleStarGifts/">payments.resaleStarGifts</a></td><td>List of gifts currently on <a href="/api/gifts/#reselling-collectible-gifts">resale »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a></td><td>Get <a href="/api/gifts/#collectible-gifts">collectible gifts</a> of a specific type currently on resale, see <a href="/api/gifts/#reselling-collectible-gifts">here »</a> for more info.<br><br><code>sort_by_price</code> and <code>sort_by_num</code> are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.<br><br>See <a href="/api/gifts/#sending-gifts">here »</a> for detailed documentation on this method.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
