---
title: "paymentRequestedInfo"
original: "https://core.telegram.org/constructor/paymentRequestedInfo"
section: ref
description: "Order info provided by the user"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"paymentRequestedInfo","url":"/constructor/paymentRequestedInfo/"}]
layout: layout.njk
---

# paymentRequestedInfo

Order info provided by the user

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/paymentRequestedInfo/" class="current_page_link">paymentRequestedInfo</a>#909c3f94 flags:<a href="/type/%23/">#</a> name:flags.0?<a href="/type/string/">string</a> phone:flags.1?<a href="/type/string/">string</a> email:flags.2?<a href="/type/string/">string</a> shipping_address:flags.3?<a href="/type/PostAddress/">PostAddress</a> = <a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>User's full name</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>User's phone number</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>User's email address</td></tr><tr><td><strong>shipping_address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/PostAddress/">PostAddress</a></td><td>User's shipping address</td></tr></tbody></table>

### Type

[PaymentRequestedInfo](/type/PaymentRequestedInfo/)
