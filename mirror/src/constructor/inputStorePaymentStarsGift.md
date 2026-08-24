---
title: "inputStorePaymentStarsGift"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGift"
section: ref
description: "Used to gift Telegram Stars to a friend."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentStarsGift","url":"/constructor/inputStorePaymentStarsGift/"}]
layout: layout.njk
---

# inputStorePaymentStarsGift

Used to gift [Telegram Stars](/api/stars/) to a friend.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentStarsGift/" class="current_page_link">inputStorePaymentStarsGift</a>#1d741ef7 user_id:<a href="/type/InputUser/">InputUser</a> stars:<a href="/type/long/">long</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user to which the stars should be gifted.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of stars to gift</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
