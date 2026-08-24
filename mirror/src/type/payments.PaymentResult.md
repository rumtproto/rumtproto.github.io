---
title: "Payments.PaymentResult"
original: "https://core.telegram.org/type/payments.PaymentResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentResult","url":"/type/payments.PaymentResult/"}]
layout: layout.njk
---

# Payments.PaymentResult

Payment result

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentResult/">payments.paymentResult</a>#4e5f810d updates:<a href="/type/Updates/">Updates</a> = <a href="/type/payments.PaymentResult/" class="current_page_link">payments.PaymentResult</a>;
<a href="/constructor/payments.paymentVerificationNeeded/">payments.paymentVerificationNeeded</a>#d8411139 url:<a href="/type/string/">string</a> = <a href="/type/payments.PaymentResult/" class="current_page_link">payments.PaymentResult</a>;

---functions---

<a href="/method/payments.sendPaymentForm/">payments.sendPaymentForm</a>#2d03522f flags:<a href="/type/%23/">#</a> form_id:<a href="/type/long/">long</a> invoice:<a href="/type/InputInvoice/">InputInvoice</a> requested_info_id:flags.0?<a href="/type/string/">string</a> shipping_option_id:flags.1?<a href="/type/string/">string</a> credentials:<a href="/type/InputPaymentCredentials/">InputPaymentCredentials</a> tip_amount:flags.2?<a href="/type/long/">long</a> = <a href="/type/payments.PaymentResult/" class="current_page_link">payments.PaymentResult</a>;
<a href="/method/payments.sendStarsForm/">payments.sendStarsForm</a>#7998c914 form_id:<a href="/type/long/">long</a> invoice:<a href="/type/InputInvoice/">InputInvoice</a> = <a href="/type/payments.PaymentResult/" class="current_page_link">payments.PaymentResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentResult/">payments.paymentResult</a></td><td>Payment result</td></tr><tr><td><a href="/constructor/payments.paymentVerificationNeeded/">payments.paymentVerificationNeeded</a></td><td>Payment was not successful, additional verification is needed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.sendPaymentForm/">payments.sendPaymentForm</a></td><td>Send compiled payment form</td></tr><tr><td><a href="/method/payments.sendStarsForm/">payments.sendStarsForm</a></td><td>Make a payment using <a href="/api/stars/#using-stars">Telegram Stars, see here »</a> for more info.</td></tr></tbody></table>
