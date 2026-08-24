---
title: "Payments.PaymentReceipt"
original: "https://core.telegram.org/type/payments.PaymentReceipt"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentReceipt","url":"/type/payments.PaymentReceipt/"}]
layout: layout.njk
---

# Payments.PaymentReceipt

Payment receipt

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentReceipt/">payments.paymentReceipt</a>#70c4fe03 flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> provider_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> shipping:flags.1?<a href="/type/ShippingOption/">ShippingOption</a> tip_amount:flags.3?<a href="/type/long/">long</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> credentials_title:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/" class="current_page_link">payments.PaymentReceipt</a>;
<a href="/constructor/payments.paymentReceiptStars/">payments.paymentReceiptStars</a>#dabbf83a flags:<a href="/type/%23/">#</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> transaction_id:<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentReceipt/" class="current_page_link">payments.PaymentReceipt</a>;

---functions---

<a href="/method/payments.getPaymentReceipt/">payments.getPaymentReceipt</a>#2478d1cc peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/payments.PaymentReceipt/" class="current_page_link">payments.PaymentReceipt</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentReceipt/">payments.paymentReceipt</a></td><td>Receipt</td></tr><tr><td><a href="/constructor/payments.paymentReceiptStars/">payments.paymentReceiptStars</a></td><td>Receipt for <a href="/api/stars/">payment made using Telegram Stars</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentReceipt/">payments.getPaymentReceipt</a></td><td>Get payment receipt</td></tr></tbody></table>
