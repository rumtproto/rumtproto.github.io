---
title: "starsGiftOption"
original: "https://core.telegram.org/constructor/starsGiftOption"
section: ref
description: "Telegram Stars gift option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsGiftOption","url":"/constructor/starsGiftOption/"}]
layout: layout.njk
---

# starsGiftOption

[Telegram Stars gift option](/api/stars/#buying-or-gifting-stars).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsGiftOption/" class="current_page_link">starsGiftOption</a>#5e0589f1 flags:<a href="/type/%23/">#</a> extended:flags.1?true stars:<a href="/type/long/">long</a> store_product:flags.0?<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/StarsGiftOption/">StarsGiftOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>extended</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the option must only be shown in the full list of topup options.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of Telegram stars.</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Identifier of the store product associated with the option, official apps only.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[StarsGiftOption](/type/StarsGiftOption/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
