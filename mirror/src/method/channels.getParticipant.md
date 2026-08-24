---
title: "channels.getParticipant"
original: "https://core.telegram.org/method/channels.getParticipant"
section: ref
description: "Get info about a channel/supergroup participant"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getParticipant","url":"/method/channels.getParticipant/"}]
layout: layout.njk
---

# channels.getParticipant

Get info about a [channel/supergroup](/api/channel/) participant

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.channelParticipant/">channels.channelParticipant</a>#dfb80317 participant:<a href="/type/ChannelParticipant/">ChannelParticipant</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.ChannelParticipant/">channels.ChannelParticipant</a>;
---functions---
<a href="/method/channels.getParticipant/" class="current_page_link">channels.getParticipant</a>#a0ab6cc6 channel:<a href="/type/InputChannel/">InputChannel</a> participant:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/channels.ChannelParticipant/">channels.ChannelParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel/supergroup</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Participant to get info about</td></tr></tbody></table>

### Result

[channels.ChannelParticipant](/type/channels.ChannelParticipant/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PARTICIPANT_ID_INVALID</td><td>The specified participant ID is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>400</td><td>USER_NOT_PARTICIPANT</td><td>You're not a member of this supergroup/channel.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
