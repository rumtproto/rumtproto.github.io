---
title: "payments.canPurchaseStore"
original: "https://core.telegram.org/method/payments.canPurchaseStore"
section: ref
description: "Checks whether a purchase is possible. Must be called before in-store purchase, official apps only."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.canPurchaseStore","url":"/method/payments.canPurchaseStore/"}]
layout: layout.njk
---

# payments.canPurchaseStore

Checks whether a purchase is possible. Must be called before in-store purchase, official apps only.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.canPurchaseStore/" class="current_page_link">payments.canPurchaseStore</a>#4fdc5ea7 purpose:<a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a></td><td>Payment purpose.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INPUT_PURPOSE_INVALID</td><td>The specified payment purpose is invalid.</td></tr><tr><td>406</td><td>PREMIUM_CURRENTLY_UNAVAILABLE</td><td>You cannot currently purchase a Premium subscription.</td></tr></tbody></table>
