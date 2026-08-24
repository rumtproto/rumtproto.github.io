---
title: "payments.paymentFormStars"
original: "https://core.telegram.org/constructor/payments.paymentFormStars"
section: ref
description: "Represents a payment form, for payments to be using Telegram Stars, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.paymentFormStars","url":"/constructor/payments.paymentFormStars/"}]
layout: layout.njk
---

# payments.paymentFormStars

Represents a payment form, for payments to be using [Telegram Stars, see here »](/api/stars/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentFormStars/" class="current_page_link">payments.paymentFormStars</a>#7bf6b15c flags:<a href="/type/%23/">#</a> form_id:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentForm/">payments.PaymentForm</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Form ID.</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Bot ID.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Form title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/WebDocument/">WebDocument</a></td><td>Product photo</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice/">Invoice</a></td><td>Invoice</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about users mentioned in the other fields.</td></tr></tbody></table>

### Type

[payments.PaymentForm](/type/payments.PaymentForm/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
