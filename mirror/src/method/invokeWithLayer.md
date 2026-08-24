---
title: "invokeWithLayer"
original: "https://core.telegram.org/method/invokeWithLayer"
section: ref
description: "Invoke the specified query using the specified API layer"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithLayer","url":"/method/invokeWithLayer/"}]
layout: layout.njk
---

# invokeWithLayer

Invoke the specified query using the specified API [layer](/api/invoking/#layers)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeWithLayer/" class="current_page_link">invokeWithLayer</a>#da9b0d0d {X:Type} layer:<a href="/type/int/">int</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The layer to use</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The query</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AUTH_BYTES_INVALID</td><td>The provided authorization is invalid.</td></tr><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>You can't call this method in a CDN DC.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>CONNECTION_API_ID_INVALID</td><td>The provided API id is invalid.</td></tr><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Layer invalid.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr></tbody></table>

### Related pages

#### [Calling API Methods](/api/invoking/)

Additional options for calling methods.
