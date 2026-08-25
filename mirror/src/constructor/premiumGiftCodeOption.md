---
title: "premiumGiftCodeOption"
original: "https://core.telegram.org/constructor/premiumGiftCodeOption"
section: ref
description: "Contains info about a giveaway/gift option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"premiumGiftCodeOption","url":"/constructor/premiumGiftCodeOption/"}]
layout: layout.njk
---

# premiumGiftCodeOption

Contains info about a [giveaway/gift](/api/giveaways/) option.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premiumGiftCodeOption/" class="current_page_link">premiumGiftCodeOption</a>#257e962b flags:<a href="/type/%23/">#</a> users:<a href="/type/int/">int</a> months:<a href="/type/int/">int</a> store_product:flags.0?<a href="/type/string/">string</a> store_quantity:flags.1?<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/PremiumGiftCodeOption/">PremiumGiftCodeOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of users which will be able to activate the gift codes.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in months of each gifted <a href="/api/premium/">Telegram Premium</a> subscription.</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Identifier of the store product associated with the option, official apps only.</td></tr><tr><td><strong>store_quantity</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Number of times the store product must be paid</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Bot Payments API](/bots/payments/)

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
