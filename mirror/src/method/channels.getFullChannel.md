---
title: "channels.getFullChannel"
original: "https://core.telegram.org/method/channels.getFullChannel"
section: ref
description: "Get full info about a supergroup, gigagroup or channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getFullChannel","url":"/method/channels.getFullChannel/"}]
layout: layout.njk
---

# channels.getFullChannel

Get full info about a [supergroup](/api/channel/#supergroups), [gigagroup](/api/channel/#gigagroups) or [channel](/api/channel/#channels)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatFull/">messages.chatFull</a>#e5d7d19c full_chat:<a href="/type/ChatFull/">ChatFull</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ChatFull/">messages.ChatFull</a>;
---functions---
<a href="/method/channels.getFullChannel/" class="current_page_link">channels.getFullChannel</a>#8736a09 channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/messages.ChatFull/">messages.ChatFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The <a href="/api/channel/#channels">channel</a>, <a href="/api/channel/#supergroups">supergroup</a> or <a href="/api/channel/#gigagroups">gigagroup</a> to get info about</td></tr></tbody></table>

### Result

[messages.ChatFull](/type/messages.ChatFull/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHANNEL_PUBLIC_GROUP_NA</td><td>channel/supergroup not available.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
