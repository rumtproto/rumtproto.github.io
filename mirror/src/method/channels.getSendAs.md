---
title: "channels.getSendAs"
original: "https://core.telegram.org/method/channels.getSendAs"
section: ref
description: "Obtains a list of peers that can be displayed as the sender in a specific context. With for_live_stories, returns peers that may author live story in-call messages »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getSendAs","url":"/method/channels.getSendAs/"}]
layout: layout.njk
---

# channels.getSendAs

Obtains a list of peers that can be displayed as the sender in a specific context. With `for_live_stories`, returns peers that may author [live story in-call messages »](/api/group-calls/#in-call-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.sendAsPeers/">channels.sendAsPeers</a>#f496b0c6 peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SendAsPeer/">SendAsPeer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.SendAsPeers/">channels.SendAsPeers</a>;
---functions---
<a href="/method/channels.getSendAs/" class="current_page_link">channels.getSendAs</a>#e785a43f flags:<a href="/type/%23/">#</a> for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/channels.SendAsPeers/">channels.SendAsPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>for_paid_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, fetches the list of peers that can be used to send <a href="/api/reactions/#paid-reactions">paid reactions</a> to messages of a specific peer.</td></tr><tr><td><strong>for_live_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Fetch the peers that may be passed to <a href="/method/phone.sendGroupCallMessage/">phone.sendGroupCallMessage</a>.<code>send_as</code> to comment or react in a <a href="/api/group-calls/#in-call-messages">live story »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The target peer; when <code>for_live_stories</code> is set, the peer that owns the live story.</td></tr></tbody></table>

### Result

[channels.SendAsPeers](/type/channels.SendAsPeers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

Send an in-call message to all participants of a video chat/livestream or live story, including in RTMP mode, see [here »](/api/group-calls/#in-call-messages) for more info.

The `send_as` field can only be populated for live stories, where it optionally selects the displayed author. If omitted, the server automatically selects the appropriate author. Do not populate it for video chats/livestreams.

Video chats/livestreams and live stories support [animated emoji reactions »](/api/group-calls/#in-call-reactions), encoded as messages containing only a standard available reaction emoji or a single custom emoji entity.

For a paid live story comment, pass the user-confirmed donation amount in `allow_paid_stars`. For commenters other than the live story owner, this amount must be at least the current [groupCall](/constructor/groupCall/).`send_paid_messages_stars` minimum. A higher amount may be donated to highlight the comment. The live story owner may comment without populating `allow_paid_stars`. To send a standalone paid live story donation, pass a positive `allow_paid_stars` value and an empty `message`, see [here »](/api/group-calls/#paid-live-story-donations) for the full flow.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
