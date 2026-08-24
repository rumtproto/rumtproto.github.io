---
title: "auth.exportAuthorization"
original: "https://core.telegram.org/method/auth.exportAuthorization"
section: ref
description: "Returns data for copying authorization to another data-center."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.exportAuthorization","url":"/method/auth.exportAuthorization/"}]
layout: layout.njk
---

# auth.exportAuthorization

Returns data for copying authorization to another data-center.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.exportedAuthorization/">auth.exportedAuthorization</a>#b434e2b8 id:<a href="/type/long/">long</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.ExportedAuthorization/">auth.ExportedAuthorization</a>;
---functions---
<a href="/method/auth.exportAuthorization/" class="current_page_link">auth.exportAuthorization</a>#e5bfffcd dc_id:<a href="/type/int/">int</a> = <a href="/type/auth.ExportedAuthorization/">auth.ExportedAuthorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of a target data-center</td></tr></tbody></table>

### Result

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DC_ID_INVALID</td><td>The provided DC ID is invalid.</td></tr></tbody></table>
