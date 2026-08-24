---
title: "payments.UniqueStarGiftValueInfo"
original: "https://core.telegram.org/type/payments.UniqueStarGiftValueInfo"
section: ref
description: "Information about the value of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.UniqueStarGiftValueInfo","url":"/type/payments.UniqueStarGiftValueInfo/"}]
layout: layout.njk
---

# payments.UniqueStarGiftValueInfo

Information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.uniqueStarGiftValueInfo/">payments.uniqueStarGiftValueInfo</a>#512fe446 flags:<a href="/type/%23/">#</a> last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:<a href="/type/string/">string</a> value:<a href="/type/long/">long</a> initial_sale_date:<a href="/type/int/">int</a> initial_sale_stars:<a href="/type/long/">long</a> initial_sale_price:<a href="/type/long/">long</a> last_sale_date:flags.0?<a href="/type/int/">int</a> last_sale_price:flags.0?<a href="/type/long/">long</a> floor_price:flags.2?<a href="/type/long/">long</a> average_price:flags.3?<a href="/type/long/">long</a> listed_count:flags.4?<a href="/type/int/">int</a> fragment_listed_count:flags.5?<a href="/type/int/">int</a> fragment_listed_url:flags.5?<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGiftValueInfo/" class="current_page_link">payments.UniqueStarGiftValueInfo</a>;

---functions---

<a href="/method/payments.getUniqueStarGiftValueInfo/">payments.getUniqueStarGiftValueInfo</a>#4365af6b slug:<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGiftValueInfo/" class="current_page_link">payments.UniqueStarGiftValueInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGiftValueInfo/">payments.uniqueStarGiftValueInfo</a></td><td>Information about the value of a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGiftValueInfo/">payments.getUniqueStarGiftValueInfo</a></td><td>Get information about the value of a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
