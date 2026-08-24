---
title: "messagePeerReaction"
original: "https://core.telegram.org/constructor/messagePeerReaction"
section: ref
description: "How a certain peer reacted to the message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messagePeerReaction","url":"/constructor/messagePeerReaction/"}]
layout: layout.njk
---

# messagePeerReaction

How a certain peer reacted to the message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messagePeerReaction/" class="current_page_link">messagePeerReaction</a>#8c79b63c flags:<a href="/type/%23/">#</a> big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/MessagePeerReaction/">MessagePeerReaction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the specified <a href="/api/reactions/">message reaction »</a> should elicit a bigger and longer reaction</td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the reaction wasn't yet marked as read by the current user</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Starting from layer 159, <a href="/method/messages.sendReaction/">messages.sendReaction</a> will send reactions from the peer (user or channel) specified using <a href="/method/messages.saveDefaultSendAs/">messages.saveDefaultSendAs</a>.<br>If set, this flag indicates that this reaction was sent by us, even if the <code>peer</code> doesn't point to the current account.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer that reacted to the message</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was this reaction added</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td>Reaction emoji</td></tr></tbody></table>

### Type

[MessagePeerReaction](/type/MessagePeerReaction/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.sendReaction](/method/messages.sendReaction/)

React to message.

Starting from layer 159, the reaction will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group
