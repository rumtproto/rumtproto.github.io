---
title: "messageActionPaymentRefunded"
original: "https://core.telegram.org/constructor/messageActionPaymentRefunded"
section: ref
description: "Describes a payment refund (service message received by both users and bots)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPaymentRefunded","url":"/constructor/messageActionPaymentRefunded/"}]
layout: layout.njk
---

# messageActionPaymentRefunded

Describes a payment refund (service message received by both users and bots).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPaymentRefunded/" class="current_page_link">messageActionPaymentRefunded</a>#41b3e202 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> payload:flags.0?<a href="/type/bytes/">bytes</a> charge:<a href="/type/PaymentCharge/">PaymentCharge</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Identifier of the peer that returned the funds.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Currency, <code>XTR</code> for Telegram Stars.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>Bot specified invoice payload (only received by bots).</td></tr><tr><td><strong>charge</strong></td><td style="text-align: center;"><a href="/type/PaymentCharge/">PaymentCharge</a></td><td>Provider payment identifier</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
