---
title: "messages.getMessageReactionsList"
original: "https://core.telegram.org/method/messages.getMessageReactionsList"
section: ref
description: "Get message reaction list, along with the sender of each reaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getMessageReactionsList","url":"/method/messages.getMessageReactionsList/"}]
layout: layout.njk
---

# messages.getMessageReactionsList

Get [message reaction](/api/reactions/) list, along with the sender of each reaction.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messageReactionsList/">messages.messageReactionsList</a>#31bd492d flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerReaction/">MessagePeerReaction</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/messages.MessageReactionsList/">messages.MessageReactionsList</a>;
---functions---
<a href="/method/messages.getMessageReactionsList/" class="current_page_link">messages.getMessageReactionsList</a>#461b3f48 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> reaction:flags.0?<a href="/type/Reaction/">Reaction</a> offset:flags.1?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.MessageReactionsList/">messages.MessageReactionsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Reaction/">Reaction</a></td><td>Get only reactions of this type</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Offset for pagination (taken from the <code>next_offset</code> field of the returned <a href="/type/messages.MessageReactionsList/">messages.MessageReactionsList</a>); empty in the first request.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[messages.MessageReactionsList](/type/messages.MessageReactionsList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>BROADCAST_FORBIDDEN</td><td>Channel poll voters and reactions cannot be fetched to prevent deanonymization.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [messages.MessageReactionsList](/type/messages.MessageReactionsList/)

List of peers that reacted to a specific message

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
