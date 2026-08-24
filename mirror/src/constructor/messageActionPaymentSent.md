---
title: "messageActionPaymentSent"
original: "https://core.telegram.org/constructor/messageActionPaymentSent"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPaymentSent","url":"/constructor/messageActionPaymentSent/"}]
layout: layout.njk
---

# messageActionPaymentSent

A payment was sent

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPaymentSent/" class="current_page_link">messageActionPaymentSent</a>#c624b16e flags:<a href="/type/%23/">#</a> recurring_init:flags.2?true recurring_used:flags.3?true currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> invoice_slug:flags.0?<a href="/type/string/">string</a> subscription_until_date:flags.4?<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>recurring_init</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this is the first payment of a recurring payment we just subscribed to</td></tr><tr><td><strong>recurring_used</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this payment is part of a recurring payment</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code, or <code>XTR</code> for <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>invoice_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>An invoice slug taken from an <a href="/api/links/#invoice-links">invoice deep link</a> or from the <a href="/api/config/#premium-invoice-slug"><code>premium_invoice_slug</code> app config parameter »</a></td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Expiration date of the <a href="/api/stars/#star-subscriptions">Telegram Star subscription »</a>.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
