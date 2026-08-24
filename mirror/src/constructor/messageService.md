---
title: "messageService"
original: "https://core.telegram.org/constructor/messageService"
section: ref
description: "Indicates a service message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageService","url":"/constructor/messageService/"}]
layout: layout.njk
---

# messageService

Indicates a service message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageService/" class="current_page_link">messageService</a>#7a800e0a flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:<a href="/type/int/">int</a> from_id:flags.8?<a href="/type/Peer/">Peer</a> peer_id:<a href="/type/Peer/">Peer</a> saved_peer_id:flags.28?<a href="/type/Peer/">Peer</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> date:<a href="/type/int/">int</a> action:<a href="/type/MessageAction/">MessageAction</a> reactions:flags.20?<a href="/type/MessageReactions/">MessageReactions</a> ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Message/">Message</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the message is outgoing</td></tr><tr><td><strong>mentioned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether we were mentioned in the message</td></tr><tr><td><strong>media_unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the message contains unread media</td></tr><tr><td><strong>reactions_are_possible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether you can <a href="/api/reactions/">react to this message »</a>.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether the message is silent</td></tr><tr><td><strong>post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Whether it's a channel post</td></tr><tr><td><strong>legacy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>This is a legacy message: it has to be refetched with the new layer</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Peer/">Peer</a></td><td>ID of the sender of this message</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Sender of service message</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/type/Peer/">Peer</a></td><td>Will only be set for service messages within a <a href="/api/monoforum/">monoforum topic »</a>: <code>peer</code> will be equal to the ID of the monoforum and the <code>saved_peer_id</code> flag will be set to the ID of a topic.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a></td><td>Reply (thread) information</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message date</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/MessageAction/">MessageAction</a></td><td>Event connected with the service message</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/type/MessageReactions/">MessageReactions</a></td><td><a href="/api/reactions/">Reactions »</a>.</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/int/">int</a></td><td>Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well.</td></tr></tbody></table>

### Type

[Message](/type/Message/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
