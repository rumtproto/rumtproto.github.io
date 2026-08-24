---
title: "messages.getDhConfig"
original: "https://core.telegram.org/method/messages.getDhConfig"
section: ref
description: "Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDhConfig","url":"/method/messages.getDhConfig/"}]
layout: layout.njk
---

# messages.getDhConfig

Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dhConfigNotModified/">messages.dhConfigNotModified</a>#c0e24635 random:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.DhConfig/">messages.DhConfig</a>;
<a href="/constructor/messages.dhConfig/">messages.dhConfig</a>#2c221edd g:<a href="/type/int/">int</a> p:<a href="/type/bytes/">bytes</a> version:<a href="/type/int/">int</a> random:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.DhConfig/">messages.DhConfig</a>;
---functions---
<a href="/method/messages.getDhConfig/" class="current_page_link">messages.getDhConfig</a>#26cf8950 version:<a href="/type/int/">int</a> random_length:<a href="/type/int/">int</a> = <a href="/type/messages.DhConfig/">messages.DhConfig</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Value of the <strong>version</strong> parameter from <a href="/constructor/messages.dhConfig/">messages.dhConfig</a>, available at the client</td></tr><tr><td><strong>random_length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of the required random sequence</td></tr></tbody></table>

### Result

[messages.DhConfig](/type/messages.DhConfig/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RANDOM_LENGTH_INVALID</td><td>Random length invalid.</td></tr></tbody></table>

### Related pages

#### [messages.dhConfig](/constructor/messages.dhConfig/)

New set of configuring parameters.
