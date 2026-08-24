---
title: "messages.getMessagesViews"
original: "https://core.telegram.org/method/messages.getMessagesViews"
section: ref
description: "Get and increase the view counter of a message sent or forwarded from a channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getMessagesViews","url":"/method/messages.getMessagesViews/"}]
layout: layout.njk
---

# messages.getMessagesViews

Get and increase the view counter of a message sent or forwarded from a [channel](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messageViews/">messages.messageViews</a>#b6c4f543 views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageViews/">MessageViews</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.MessageViews/">messages.MessageViews</a>;
---functions---
<a href="/method/messages.getMessagesViews/" class="current_page_link">messages.getMessagesViews</a>#5784d3e1 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; increment:<a href="/type/Bool/">Bool</a> = <a href="/type/messages.MessageViews/">messages.MessageViews</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the message was found</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>ID of message</td></tr><tr><td><strong>increment</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to mark the message as viewed and increment the view counter</td></tr></tbody></table>

### Result

[messages.MessageViews](/type/messages.MessageViews/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
