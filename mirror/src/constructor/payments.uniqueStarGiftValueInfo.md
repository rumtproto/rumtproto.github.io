---
title: "payments.uniqueStarGiftValueInfo"
original: "https://core.telegram.org/constructor/payments.uniqueStarGiftValueInfo"
section: ref
description: "Information about the value of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.uniqueStarGiftValueInfo","url":"/constructor/payments.uniqueStarGiftValueInfo/"}]
layout: layout.njk
---

# payments.uniqueStarGiftValueInfo

Information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.uniqueStarGiftValueInfo/" class="current_page_link">payments.uniqueStarGiftValueInfo</a>#512fe446 flags:<a href="/type/%23/">#</a> last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:<a href="/type/string/">string</a> value:<a href="/type/long/">long</a> initial_sale_date:<a href="/type/int/">int</a> initial_sale_stars:<a href="/type/long/">long</a> initial_sale_price:<a href="/type/long/">long</a> last_sale_date:flags.0?<a href="/type/int/">int</a> last_sale_price:flags.0?<a href="/type/long/">long</a> floor_price:flags.2?<a href="/type/long/">long</a> average_price:flags.3?<a href="/type/long/">long</a> listed_count:flags.4?<a href="/type/int/">int</a> fragment_listed_count:flags.5?<a href="/type/int/">int</a> fragment_listed_url:flags.5?<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGiftValueInfo/">payments.UniqueStarGiftValueInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>last_sale_on_fragment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the last sale was completed on Fragment.</td></tr><tr><td><strong>value_is_average</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>If set, the <code>value</code> is calculated from the average value of sold gifts of the same type. Otherwise, it is based on the sale price of the gift.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code (a localized fiat currency used to represent prices and price estimations in this constructor).</td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Estimated value of the gift, in the smallest unit of the currency specified in <code>currency</code>.</td></tr><tr><td><strong>initial_sale_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Initial purchase date of the gift.</td></tr><tr><td><strong>initial_sale_stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Initial purchase price in Stars.</td></tr><tr><td><strong>initial_sale_price</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Initial purchase price in the smallest unit of the currency specified in <code>currency</code> (automatically converted from <code>initial_sale_stars</code>).</td></tr><tr><td><strong>last_sale_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Last resale date of the gift.</td></tr><tr><td><strong>last_sale_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Last resale price, in the smallest unit of the currency specified in <code>currency</code>.</td></tr><tr><td><strong>floor_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>The current minimum price of collectible gifts of the same type, in the smallest unit of the currency specified in <code>currency</code>.</td></tr><tr><td><strong>average_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>The current average sale price of collectible gifts of the same type, in the smallest unit of the currency specified in <code>currency</code>.</td></tr><tr><td><strong>listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Number of gifts of the same type currently being resold on Telegram.</td></tr><tr><td><strong>fragment_listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Number of gifts of the same type currently being resold on fragment.</td></tr><tr><td><strong>fragment_listed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>Fragment link to the listing of gifts of the same type currently being resold on fragment.</td></tr></tbody></table>

### Type

[payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
