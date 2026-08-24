---
title: "messageReactions"
original: "https://core.telegram.org/constructor/messageReactions"
section: ref
description: "In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageReactions","url":"/constructor/messageReactions/"}]
layout: layout.njk
---

# messageReactions

[Message reactions »](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReactions/" class="current_page_link">messageReactions</a>#a339f0b flags:<a href="/type/%23/">#</a> min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt; recent_reactions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerReaction/">MessagePeerReaction</a>&gt; top_reactors:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReactor/">MessageReactor</a>&gt; = <a href="/type/MessageReactions/">MessageReactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Similar to <a href="/api/min/">min</a> objects, used for <a href="/api/reactions/">message reaction »</a> constructors that are the same for all users so they don't have the reactions sent by the current user (you can use <a href="/method/messages.getMessagesReactions/">messages.getMessagesReactions</a> to get the full reaction info).</td></tr><tr><td><strong>can_see_list</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether <a href="/method/messages.getMessageReactionsList/">messages.getMessageReactionsList</a> can be used to see how each specific peer reacted to the message</td></tr><tr><td><strong>reactions_as_tags</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set or if there are no reactions, all present and future reactions should be treated as <a href="/api/saved-messages/#tags">message tags, see here » for more info</a>.</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt;</td><td>Reactions</td></tr><tr><td><strong>recent_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerReaction/">MessagePeerReaction</a>&gt;</td><td>List of recent peers and their reactions</td></tr><tr><td><strong>top_reactors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReactor/">MessageReactor</a>&gt;</td><td><a href="/api/reactions/#paid-reactions">Paid Telegram Star reactions leaderboard »</a> for this message.</td></tr></tbody></table>

### Type

[MessageReactions](/type/MessageReactions/)

### Related pages

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.getMessagesReactions](/method/messages.getMessagesReactions/)

Get [message reactions »](/api/reactions/)

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Get [message reaction](/api/reactions/) list, along with the sender of each reaction.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
