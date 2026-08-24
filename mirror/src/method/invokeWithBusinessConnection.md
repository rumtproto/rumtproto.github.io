---
title: "invokeWithBusinessConnection"
original: "https://core.telegram.org/method/invokeWithBusinessConnection"
section: ref
description: "Invoke a method using a Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithBusinessConnection","url":"/method/invokeWithBusinessConnection/"}]
layout: layout.njk
---

# invokeWithBusinessConnection

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/invokeWithBusinessConnection/" class="current_page_link">invokeWithBusinessConnection</a>#dd289f8e {X:Type} connection_id:<a href="/type/string/">string</a> query:!X = X;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Business connection ID.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The actual query.</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [botBusinessConnection](/constructor/botBusinessConnection/)

Contains info about a [bot business connection](/api/bots/connected-business-bots/).
