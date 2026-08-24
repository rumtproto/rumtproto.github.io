---
title: "phone.getGroupCallJoinAs"
original: "https://core.telegram.org/method/phone.getGroupCallJoinAs"
section: ref
description: "Get a list of peers that can be used to join a video chat or livestream », presenting yourself as a specific user/channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCallJoinAs","url":"/method/phone.getGroupCallJoinAs/"}]
layout: layout.njk
---

# phone.getGroupCallJoinAs

Get a list of peers that can be used to join a [video chat or livestream »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), presenting yourself as a specific user/channel.

This method cannot be used for live stories or conference calls. To comment or react in a live story as another peer, use [channels.getSendAs](/method/channels.getSendAs/) with `for_live_stories` set and pass one of the returned peers to [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).`send_as`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.joinAsPeers/">phone.joinAsPeers</a>#afe5623f peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.JoinAsPeers/">phone.JoinAsPeers</a>;
---functions---
<a href="/method/phone.getGroupCallJoinAs/" class="current_page_link">phone.getGroupCallJoinAs</a>#ef7c213a peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/phone.JoinAsPeers/">phone.JoinAsPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The basic group, supergroup or channel whose video chat/livestream we're trying to join; cannot target a live story.</td></tr></tbody></table>

### Result

[phone.JoinAsPeers](/type/phone.JoinAsPeers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [channels.getSendAs](/method/channels.getSendAs/)

Obtains a list of peers that can be displayed as the sender in a specific context. With `for_live_stories`, returns peers that may author [live story in-call messages »](/api/group-calls/#in-call-messages).

#### [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

Send an in-call message to all participants of a video chat/livestream or live story, including in RTMP mode, see [here »](/api/group-calls/#in-call-messages) for more info.

The `send_as` field can only be populated for live stories, where it optionally selects the displayed author. If omitted, the server automatically selects the appropriate author. Do not populate it for video chats/livestreams.

Video chats/livestreams and live stories support [animated emoji reactions »](/api/group-calls/#in-call-reactions), encoded as messages containing only a standard available reaction emoji or a single custom emoji entity.

For a paid live story comment, pass the user-confirmed donation amount in `allow_paid_stars`. For commenters other than the live story owner, this amount must be at least the current [groupCall](/constructor/groupCall/).`send_paid_messages_stars` minimum. A higher amount may be donated to highlight the comment. The live story owner may comment without populating `allow_paid_stars`. To send a standalone paid live story donation, pass a positive `allow_paid_stars` value and an empty `message`, see [here »](/api/group-calls/#paid-live-story-donations) for the full flow.
