---
title: "messageActionPaymentSentMe"
original: "https://core.telegram.org/constructor/messageActionPaymentSentMe"
section: ref
description: "A user just sent a payment to me (a bot)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPaymentSentMe","url":"/constructor/messageActionPaymentSentMe/"}]
layout: layout.njk
---

# messageActionPaymentSentMe

A user just sent a payment to me (a bot)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPaymentSentMe/" class="current_page_link">messageActionPaymentSentMe</a>#ffa00ccc flags:<a href="/type/%23/">#</a> recurring_init:flags.2?true recurring_used:flags.3?true currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> payload:<a href="/type/bytes/">bytes</a> info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> shipping_option_id:flags.1?<a href="/type/string/">string</a> charge:<a href="/type/PaymentCharge/">PaymentCharge</a> subscription_until_date:flags.4?<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>recurring_init</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this is the first payment of a recurring payment we just subscribed to</td></tr><tr><td><strong>recurring_used</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this payment is part of a recurring payment</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or <code>XTR</code> for <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Bot specified invoice payload</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a></td><td>Order info provided by the user</td></tr><tr><td><strong>shipping_option_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Identifier of the shipping option chosen by the user</td></tr><tr><td><strong>charge</strong></td><td style="text-align: center;"><a href="/type/PaymentCharge/">PaymentCharge</a></td><td>Provider payment identifier</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Expiration date of the <a href="/api/stars/#star-subscriptions">Telegram Star subscription »</a>.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
