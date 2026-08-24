---
title: "inputPaymentCredentials"
original: "https://core.telegram.org/constructor/inputPaymentCredentials"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPaymentCredentials","url":"/constructor/inputPaymentCredentials/"}]
layout: layout.njk
---

# inputPaymentCredentials

Payment credentials

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPaymentCredentials/" class="current_page_link">inputPaymentCredentials</a>#3417d728 flags:<a href="/type/%23/">#</a> save:flags.0?true data:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/InputPaymentCredentials/">InputPaymentCredentials</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>save</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Save payment credential for future use</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>Payment credentials</td></tr></tbody></table>

### Type

[InputPaymentCredentials](/type/InputPaymentCredentials/)
