---
title: "inputInvoicePremiumAuthCode"
original: "https://core.telegram.org/constructor/inputInvoicePremiumAuthCode"
section: ref
description: "Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoicePremiumAuthCode","url":"/constructor/inputInvoicePremiumAuthCode/"}]
layout: layout.njk
---

# inputInvoicePremiumAuthCode

Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see [here »](/api/auth/#paid-auth) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoicePremiumAuthCode/" class="current_page_link">inputInvoicePremiumAuthCode</a>#3e77f614 purpose:<a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a></td><td>Must contain an <a href="/constructor/inputStorePaymentAuthCode/">inputStorePaymentAuthCode</a>.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/)

Indicates payment for a login code.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
