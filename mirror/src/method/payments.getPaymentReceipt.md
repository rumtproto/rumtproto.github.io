---
title: "payments.getPaymentReceipt"
original: "https://core.telegram.org/method/payments.getPaymentReceipt"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getPaymentReceipt","url":"/method/payments.getPaymentReceipt/"}]
layout: layout.njk
---

# payments.getPaymentReceipt

Get payment receipt

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentReceipt/">payments.paymentReceipt</a>#70c4fe03 flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> provider_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> shipping:flags.1?<a href="/type/ShippingOption/">ShippingOption</a> tip_amount:flags.3?<a href="/type/long/">long</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> credentials_title:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/">payments.PaymentReceipt</a>;
<a href="/constructor/payments.paymentReceiptStars/">payments.paymentReceiptStars</a>#dabbf83a flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> transaction_id:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/">payments.PaymentReceipt</a>;
---functions---
<a href="/method/payments.getPaymentReceipt/" class="current_page_link">payments.getPaymentReceipt</a>#2478d1cc peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/payments.PaymentReceipt/">payments.PaymentReceipt</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where the payment receipt was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of receipt</td></tr></tbody></table>

### Result

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr></tbody></table>
