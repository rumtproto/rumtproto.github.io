---
title: "botBusinessConnection"
original: "https://core.telegram.org/constructor/botBusinessConnection"
section: ref
description: "Contains info about a bot business connection."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botBusinessConnection","url":"/constructor/botBusinessConnection/"}]
layout: layout.njk
---

# botBusinessConnection

Contains info about a [bot business connection](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botBusinessConnection/" class="current_page_link">botBusinessConnection</a>#8f34b2f5 flags:<a href="/type/%23/">#</a> disabled:flags.1?true connection_id:<a href="/type/string/">string</a> user_id:<a href="/type/long/">long</a> dc_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> rights:flags.2?<a href="/type/BusinessBotRights/">BusinessBotRights</a> = <a href="/type/BotBusinessConnection/">BotBusinessConnection</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this business connection is currently disabled</td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Business connection ID, used to identify messages coming from the connection and to reply to them as specified <a href="/api/bots/connected-business-bots/">here »</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user that the bot is connected to via this connection.</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the datacenter where to send queries wrapped in a <a href="/method/invokeWithBusinessConnection/">invokeWithBusinessConnection</a> as specified <a href="/api/bots/connected-business-bots/">here »</a>.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the connection created.</td></tr><tr><td><strong>rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/BusinessBotRights/">BusinessBotRights</a></td><td>Business bot rights.</td></tr></tbody></table>

### Type

[BotBusinessConnection](/type/BotBusinessConnection/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.
