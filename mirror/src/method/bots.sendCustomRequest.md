---
title: "bots.sendCustomRequest"
original: "https://core.telegram.org/method/bots.sendCustomRequest"
section: ref
description: "Sends a custom request; for bots only"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.sendCustomRequest","url":"/method/bots.sendCustomRequest/"}]
layout: layout.njk
---

# bots.sendCustomRequest

Sends a custom request; for bots only

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dataJSON/">dataJSON</a>#7d748d04 data:<a href="/type/string/">string</a> = <a href="/type/DataJSON/">DataJSON</a>;
---functions---
<a href="/method/bots.sendCustomRequest/" class="current_page_link">bots.sendCustomRequest</a>#aa2769ed custom_method:<a href="/type/string/">string</a> params:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/DataJSON/">DataJSON</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>custom_method</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The method name</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>JSON-serialized method parameters</td></tr></tbody></table>

### Result

[DataJSON](/type/DataJSON/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>The provided JSON data is invalid.</td></tr><tr><td>400</td><td>METHOD_INVALID</td><td>The specified method is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
