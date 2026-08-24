---
title: "Payments.ValidatedRequestedInfo"
original: "https://core.telegram.org/type/payments.ValidatedRequestedInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.ValidatedRequestedInfo","url":"/type/payments.ValidatedRequestedInfo/"}]
layout: layout.njk
---

# Payments.ValidatedRequestedInfo

Validated requested info

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.validatedRequestedInfo/">payments.validatedRequestedInfo</a>#d1451883 flags:<a href="/type/%23/">#</a> id:flags.0?<a href="/type/string/">string</a> shipping_options:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt; = <a href="/type/payments.ValidatedRequestedInfo/" class="current_page_link">payments.ValidatedRequestedInfo</a>;

---functions---

<a href="/method/payments.validateRequestedInfo/">payments.validateRequestedInfo</a>#b6c8f12b flags:<a href="/type/%23/">#</a> save:flags.0?true invoice:<a href="/type/InputInvoice/">InputInvoice</a> info:<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> = <a href="/type/payments.ValidatedRequestedInfo/" class="current_page_link">payments.ValidatedRequestedInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.validatedRequestedInfo/">payments.validatedRequestedInfo</a></td><td>Validated user-provided info</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.validateRequestedInfo/">payments.validateRequestedInfo</a></td><td>Submit requested order information for validation</td></tr></tbody></table>
