---
title: "payments.paymentReceipt"
original: "https://core.telegram.org/constructor/payments.paymentReceipt"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.paymentReceipt","url":"/constructor/payments.paymentReceipt/"}]
layout: layout.njk
---

# payments.paymentReceipt

Receipt

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentReceipt/" class="current_page_link">payments.paymentReceipt</a>#70c4fe03 flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> provider_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> shipping:flags.1?<a href="/type/ShippingOption/">ShippingOption</a> tip_amount:flags.3?<a href="/type/long/">long</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> credentials_title:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/">payments.PaymentReceipt</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of generation</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Bot ID</td></tr><tr><td><strong>provider_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Provider ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WebDocument/">WebDocument</a></td><td>Photo</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice/">Invoice</a></td><td>Invoice</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a></td><td>Info</td></tr><tr><td><strong>shipping</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ShippingOption/">ShippingOption</a></td><td>Selected shipping option</td></tr><tr><td><strong>tip_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>Tipped amount</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total amount in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>credentials_title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Payment credential name</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users</td></tr></tbody></table>

### Type

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
