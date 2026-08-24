---
title: "payments.getUniqueStarGiftValueInfo"
original: "https://core.telegram.org/method/payments.getUniqueStarGiftValueInfo"
section: ref
description: "Get information about the value of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getUniqueStarGiftValueInfo","url":"/method/payments.getUniqueStarGiftValueInfo/"}]
layout: layout.njk
---

# payments.getUniqueStarGiftValueInfo

Get information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.uniqueStarGiftValueInfo/">payments.uniqueStarGiftValueInfo</a>#512fe446 flags:<a href="/type/%23/">#</a> last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:<a href="/type/string/">string</a> value:<a href="/type/long/">long</a> initial_sale_date:<a href="/type/int/">int</a> initial_sale_stars:<a href="/type/long/">long</a> initial_sale_price:<a href="/type/long/">long</a> last_sale_date:flags.0?<a href="/type/int/">int</a> last_sale_price:flags.0?<a href="/type/long/">long</a> floor_price:flags.2?<a href="/type/long/">long</a> average_price:flags.3?<a href="/type/long/">long</a> listed_count:flags.4?<a href="/type/int/">int</a> fragment_listed_count:flags.5?<a href="/type/int/">int</a> fragment_listed_url:flags.5?<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGiftValueInfo/">payments.UniqueStarGiftValueInfo</a>;
---functions---
<a href="/method/payments.getUniqueStarGiftValueInfo/" class="current_page_link">payments.getUniqueStarGiftValueInfo</a>#4365af6b slug:<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGiftValueInfo/">payments.UniqueStarGiftValueInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>slug</code> from a <a href="/constructor/starGiftUnique/">starGiftUnique</a>.</td></tr></tbody></table>

### Result

[payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr></tbody></table>

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
