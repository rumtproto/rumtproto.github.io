---
title: "channels.getParticipants"
original: "https://core.telegram.org/method/channels.getParticipants"
section: ref
description: "Get the participants of a supergroup/channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getParticipants","url":"/method/channels.getParticipants/"}]
layout: layout.njk
---

# channels.getParticipants

Get the participants of a [supergroup/channel](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.channelParticipants/">channels.channelParticipants</a>#9ab0feaf count:<a href="/type/int/">int</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelParticipant/">ChannelParticipant</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.ChannelParticipants/">channels.ChannelParticipants</a>;
<a href="/constructor/channels.channelParticipantsNotModified/">channels.channelParticipantsNotModified</a>#f0173fe9 = <a href="/type/channels.ChannelParticipants/">channels.ChannelParticipants</a>;
---functions---
<a href="/method/channels.getParticipants/" class="current_page_link">channels.getParticipants</a>#77ced9d0 channel:<a href="/type/InputChannel/">InputChannel</a> filter:<a href="/type/ChannelParticipantsFilter/">ChannelParticipantsFilter</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/channels.ChannelParticipants/">channels.ChannelParticipants</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/ChannelParticipantsFilter/">ChannelParticipantsFilter</a></td><td>Which participant types to fetch</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offset</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Limit</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/">Hash</a></td></tr></tbody></table>

### Result

[channels.ChannelParticipants](/type/channels.ChannelParticipants/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel/#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
