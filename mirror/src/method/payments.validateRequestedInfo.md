---
title: "payments.validateRequestedInfo"
original: "https://core.telegram.org/method/payments.validateRequestedInfo"
section: ref
description: "Submit requested order information for validation"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.validateRequestedInfo","url":"/method/payments.validateRequestedInfo/"}]
layout: layout.njk
---

# payments.validateRequestedInfo

Submit requested order information for validation

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.validatedRequestedInfo/">payments.validatedRequestedInfo</a>#d1451883 flags:<a href="/type/%23/">#</a> id:flags.0?<a href="/type/string/">string</a> shipping_options:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt; = <a href="/type/payments.ValidatedRequestedInfo/">payments.ValidatedRequestedInfo</a>;
---functions---
<a href="/method/payments.validateRequestedInfo/" class="current_page_link">payments.validateRequestedInfo</a>#b6c8f12b flags:<a href="/type/%23/">#</a> save:flags.0?true invoice:<a href="/type/InputInvoice/">InputInvoice</a> info:<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> = <a href="/type/payments.ValidatedRequestedInfo/">payments.ValidatedRequestedInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>save</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Save order information to re-use it for future orders</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice/">InputInvoice</a></td><td>Invoice</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a></td><td>Requested order information</td></tr></tbody></table>

### Result

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
