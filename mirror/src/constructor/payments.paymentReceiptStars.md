---
title: "payments.paymentReceiptStars"
original: "https://core.telegram.org/constructor/payments.paymentReceiptStars"
section: ref
description: "Receipt for payment made using Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.paymentReceiptStars","url":"/constructor/payments.paymentReceiptStars/"}]
layout: layout.njk
---

# payments.paymentReceiptStars

Receipt for [payment made using Telegram Stars](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentReceiptStars/" class="current_page_link">payments.paymentReceiptStars</a>#dabbf83a flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> transaction_id:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/">payments.PaymentReceipt</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of generation</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Bot ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WebDocument/">WebDocument</a></td><td>Product photo</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice/">Invoice</a></td><td>Invoice</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Currency, always <code>XTR</code>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Transaction ID</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about users mentioned in the other fields.</td></tr></tbody></table>

### Type

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
