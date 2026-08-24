---
title: "invokeWithTakeout"
original: "https://core.telegram.org/method/invokeWithTakeout"
section: ref
description: "Invoke a method within a takeout session, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithTakeout","url":"/method/invokeWithTakeout/"}]
layout: layout.njk
---

# invokeWithTakeout

Invoke a method within a [takeout session, see here » for more info](/api/takeout/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeWithTakeout/" class="current_page_link">invokeWithTakeout</a>#aca9fd2e {X:Type} takeout_id:<a href="/type/long/">long</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>takeout_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/takeout/">Takeout session ID »</a></td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Query</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method

### Related pages

#### [Takeout API](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.
