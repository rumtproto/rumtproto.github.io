---
title: "auth.dropTempAuthKeys"
original: "https://core.telegram.org/method/auth.dropTempAuthKeys"
section: ref
description: "Delete all temporary authorization keys except for the ones specified"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.dropTempAuthKeys","url":"/method/auth.dropTempAuthKeys/"}]
layout: layout.njk
---

# auth.dropTempAuthKeys

Delete all temporary authorization keys **except for** the ones specified

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/auth.dropTempAuthKeys/" class="current_page_link">auth.dropTempAuthKeys</a>#8e48a188 except_auth_keys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>except_auth_keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>The auth keys that <strong>shouldn't</strong> be dropped.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method
