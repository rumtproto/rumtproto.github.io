---
title: "fragment.collectibleInfo"
original: "https://core.telegram.org/constructor/fragment.collectibleInfo"
section: ref
description: "Info about a fragment collectible."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"fragment.collectibleInfo","url":"/constructor/fragment.collectibleInfo/"}]
layout: layout.njk
---

# fragment.collectibleInfo

Info about a [fragment collectible](/api/fragment/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/fragment.collectibleInfo/" class="current_page_link">fragment.collectibleInfo</a>#6ebdff91 purchase_date:<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> crypto_currency:<a href="/type/string/">string</a> crypto_amount:<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/fragment.CollectibleInfo/">fragment.CollectibleInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purchase_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Purchase date (unixtime)</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code for <code>amount</code></td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Cryptocurrency name.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price, in the smallest units of the cryptocurrency.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="https://fragment.com">Fragment</a> URL with more info about the collectible</td></tr></tbody></table>

### Type

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Fragment collectibles](/api/fragment/)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
