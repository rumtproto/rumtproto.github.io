---
title: "invokeAfterMsgs"
original: "https://core.telegram.org/method/invokeAfterMsgs"
section: ref
description: "Invokes a query after a successful completion of previous queries"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeAfterMsgs","url":"/method/invokeAfterMsgs/"}]
layout: layout.njk
---

# invokeAfterMsgs

Invokes a query after a successful completion of previous queries

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeAfterMsgs/" class="current_page_link">invokeAfterMsgs</a>#3dc4b4f0 {X:Type} msg_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>List of messages on which a current query depends</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The query itself</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method
