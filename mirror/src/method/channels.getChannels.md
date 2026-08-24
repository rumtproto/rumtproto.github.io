---
title: "channels.getChannels"
original: "https://core.telegram.org/method/channels.getChannels"
section: ref
description: "Get info about channels/supergroups"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getChannels","url":"/method/channels.getChannels/"}]
layout: layout.njk
---

# channels.getChannels

Get info about [channels/supergroups](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/channels.getChannels/" class="current_page_link">channels.getChannels</a>#a7f6bbb id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputChannel/">InputChannel</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputChannel/">InputChannel</a>&gt;</td><td>IDs of channels/supergroups to get info about</td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
