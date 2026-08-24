---
title: "Payments.PaymentForm"
original: "https://core.telegram.org/type/payments.PaymentForm"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentForm","url":"/type/payments.PaymentForm/"}]
layout: layout.njk
---

# Payments.PaymentForm

Payment form

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentForm/">payments.paymentForm</a>#a0058751 flags:<a href="/type/%23/">#</a> can_save_credentials:flags.2?true password_missing:flags.3?true form_id:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> provider_id:<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> native_provider:flags.4?<a href="/type/string/">string</a> native_params:flags.4?<a href="/type/DataJSON/">DataJSON</a> additional_methods:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PaymentFormMethod/">PaymentFormMethod</a>&gt; saved_info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> saved_credentials:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PaymentSavedCredentials/">PaymentSavedCredentials</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentForm/" class="current_page_link">payments.PaymentForm</a>;
<a href="/constructor/payments.paymentFormStars/">payments.paymentFormStars</a>#7bf6b15c flags:<a href="/type/%23/">#</a> form_id:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentForm/" class="current_page_link">payments.PaymentForm</a>;
<a href="/constructor/payments.paymentFormStarGift/">payments.paymentFormStarGift</a>#b425cfe1 form_id:<a href="/type/long/">long</a> invoice:<a href="/type/Invoice/">Invoice</a> = <a href="/type/payments.PaymentForm/" class="current_page_link">payments.PaymentForm</a>;

---functions---

<a href="/method/payments.getPaymentForm/">payments.getPaymentForm</a>#37148dbb flags:<a href="/type/%23/">#</a> invoice:<a href="/type/InputInvoice/">InputInvoice</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/payments.PaymentForm/" class="current_page_link">payments.PaymentForm</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentForm/">payments.paymentForm</a></td><td>Payment form</td></tr><tr><td><a href="/constructor/payments.paymentFormStars/">payments.paymentFormStars</a></td><td>Represents a payment form, for payments to be using <a href="/api/stars/">Telegram Stars, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/payments.paymentFormStarGift/">payments.paymentFormStarGift</a></td><td>Represents a payment form for a <a href="/api/gifts/">gift, see here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentForm/">payments.getPaymentForm</a></td><td>Get a payment form</td></tr></tbody></table>
