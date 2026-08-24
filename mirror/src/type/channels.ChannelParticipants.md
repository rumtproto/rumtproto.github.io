---
title: "Channels.ChannelParticipants"
original: "https://core.telegram.org/type/channels.ChannelParticipants"
section: ref
description: "Channel/supergroup participants"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Channels.ChannelParticipants","url":"/type/channels.ChannelParticipants/"}]
layout: layout.njk
---

# Channels.ChannelParticipants

Channel/supergroup participants

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.channelParticipants/">channels.channelParticipants</a>#9ab0feaf count:<a href="/type/int/">int</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelParticipant/">ChannelParticipant</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.ChannelParticipants/" class="current_page_link">channels.ChannelParticipants</a>;
<a href="/constructor/channels.channelParticipantsNotModified/">channels.channelParticipantsNotModified</a>#f0173fe9 = <a href="/type/channels.ChannelParticipants/" class="current_page_link">channels.ChannelParticipants</a>;

---functions---

<a href="/method/channels.getParticipants/">channels.getParticipants</a>#77ced9d0 channel:<a href="/type/InputChannel/">InputChannel</a> filter:<a href="/type/ChannelParticipantsFilter/">ChannelParticipantsFilter</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/channels.ChannelParticipants/" class="current_page_link">channels.ChannelParticipants</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.channelParticipants/">channels.channelParticipants</a></td><td>Represents multiple channel participants</td></tr><tr><td><a href="/constructor/channels.channelParticipantsNotModified/">channels.channelParticipantsNotModified</a></td><td>No new participant info could be found</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getParticipants/">channels.getParticipants</a></td><td>Get the participants of a <a href="/api/channel/">supergroup/channel</a></td></tr></tbody></table>
