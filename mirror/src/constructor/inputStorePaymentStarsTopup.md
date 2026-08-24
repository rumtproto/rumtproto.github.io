---
title: "inputStorePaymentStarsTopup"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsTopup"
section: ref
description: "Used to top up the Telegram Stars balance of the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentStarsTopup","url":"/constructor/inputStorePaymentStarsTopup/"}]
layout: layout.njk
---

# inputStorePaymentStarsTopup

Used to top up the [Telegram Stars balance](/api/stars/) of the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentStarsTopup/" class="current_page_link">inputStorePaymentStarsTopup</a>#f9a2a6cb flags:<a href="/type/%23/">#</a> stars:<a href="/type/long/">long</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> spend_purpose_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of stars to topup</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>spend_purpose_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>Should be populated with the peer where the topup process was initiated due to low funds (i.e. a bot for bot payments, a channel for paid media/reactions, etc); leave this flag unpopulated if the topup flow was not initated when attempting to spend more Stars than currently available on the account's balance.</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
