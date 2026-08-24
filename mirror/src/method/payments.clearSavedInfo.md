---
title: "payments.clearSavedInfo"
original: "https://core.telegram.org/method/payments.clearSavedInfo"
section: ref
description: "Clear saved payment information"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.clearSavedInfo","url":"/method/payments.clearSavedInfo/"}]
layout: layout.njk
---

# payments.clearSavedInfo

Clear saved payment information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.clearSavedInfo/" class="current_page_link">payments.clearSavedInfo</a>#d83d70c1 flags:<a href="/type/%23/">#</a> credentials:flags.0?true info:flags.1?true = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Remove saved payment credentials</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Clear the last order settings saved by the user</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method
