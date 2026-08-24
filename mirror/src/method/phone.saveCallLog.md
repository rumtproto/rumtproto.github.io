---
title: "phone.saveCallLog"
original: "https://core.telegram.org/method/phone.saveCallLog"
section: ref
description: "Deprecated: send libtgvoip phone call debug information"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.saveCallLog","url":"/method/phone.saveCallLog/"}]
layout: layout.njk
---

# phone.saveCallLog

Deprecated: send libtgvoip phone call debug information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/phone.saveCallLog/" class="current_page_link">phone.saveCallLog</a>#41248786 peer:<a href="/type/InputPhoneCall/">InputPhoneCall</a> file:<a href="/type/InputFile/">InputFile</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall/">InputPhoneCall</a></td><td>Phone call</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td>Libtgvoip logs</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr></tbody></table>
