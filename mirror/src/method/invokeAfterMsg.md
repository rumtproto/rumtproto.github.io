---
title: "invokeAfterMsg"
original: "https://core.telegram.org/method/invokeAfterMsg"
section: ref
description: "Invokes a query after successful completion of one of the previous queries."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeAfterMsg","url":"/method/invokeAfterMsg/"}]
layout: layout.njk
---

# invokeAfterMsg

Invokes a query after successful completion of one of the previous queries.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeAfterMsg/" class="current_page_link">invokeAfterMsg</a>#cb9f372d {X:Type} msg_id:<a href="/type/long/">long</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Message identifier on which a current query depends</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The query itself</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method
