---
title: "payments.ValidatedRequestedInfo"
original: "https://core.telegram.org/constructor/payments.validatedRequestedInfo"
section: ref
description: "Validated user-provided info"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.ValidatedRequestedInfo","url":"/constructor/payments.validatedRequestedInfo/"}]
layout: layout.njk
---

# payments.ValidatedRequestedInfo

Validated user-provided info

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.validatedRequestedInfo/" class="current_page_link">payments.validatedRequestedInfo</a>#d1451883 flags:<a href="/type/%23/">#</a> id:flags.0?<a href="/type/string/">string</a> shipping_options:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt; = <a href="/type/payments.ValidatedRequestedInfo/">payments.ValidatedRequestedInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>ID</td></tr><tr><td><strong>shipping_options</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt;</td><td>Shipping options</td></tr></tbody></table>

### Type

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)
