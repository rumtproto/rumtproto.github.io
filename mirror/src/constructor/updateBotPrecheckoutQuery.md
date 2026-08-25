---
title: "updateBotPrecheckoutQuery"
original: "https://core.telegram.org/constructor/updateBotPrecheckoutQuery"
section: ref
description: "This object contains information about an incoming pre-checkout query."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotPrecheckoutQuery","url":"/constructor/updateBotPrecheckoutQuery/"}]
layout: layout.njk
---

# updateBotPrecheckoutQuery

This object contains information about an incoming pre-checkout query.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotPrecheckoutQuery/" class="current_page_link">updateBotPrecheckoutQuery</a>#8caa9a96 flags:<a href="/type/%23/">#</a> query_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> payload:<a href="/type/bytes/">bytes</a> info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> shipping_option_id:flags.1?<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique query identifier</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User who sent the query</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Bot specified invoice payload</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a></td><td>Order info provided by the user</td></tr><tr><td><strong>shipping_option_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Identifier of the shipping option chosen by the user</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or <code>XTR</code> for <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total amount in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
