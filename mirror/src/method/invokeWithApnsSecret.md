---
title: "invokeWithApnsSecret"
original: "https://core.telegram.org/method/invokeWithApnsSecret"
section: ref
description: "Official clients only, invoke with Apple push verification."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithApnsSecret","url":"/method/invokeWithApnsSecret/"}]
layout: layout.njk
---

# invokeWithApnsSecret

Official clients only, invoke with Apple push verification.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeWithApnsSecret/" class="current_page_link">invokeWithApnsSecret</a>#0dae54f8 {X:Type} nonce:<a href="/type/string/">string</a> secret:<a href="/type/string/">string</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Nonce.</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Secret.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Query.</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method
