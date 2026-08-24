---
title: "messageReplyHeader"
original: "https://core.telegram.org/constructor/messageReplyHeader"
section: ref
description: "Message replies and thread information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageReplyHeader","url":"/constructor/messageReplyHeader/"}]
layout: layout.njk
---

# messageReplyHeader

Message replies and [thread](/api/threads/) information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReplyHeader/" class="current_page_link">messageReplyHeader</a>#6917560b flags:<a href="/type/%23/">#</a> reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?<a href="/type/int/">int</a> reply_to_peer_id:flags.0?<a href="/type/Peer/">Peer</a> reply_from:flags.5?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> reply_media:flags.8?<a href="/type/MessageMedia/">MessageMedia</a> reply_to_top_id:flags.1?<a href="/type/int/">int</a> quote_text:flags.6?<a href="/type/string/">string</a> quote_entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; quote_offset:flags.10?<a href="/type/int/">int</a> todo_item_id:flags.11?<a href="/type/int/">int</a> = <a href="/type/MessageReplyHeader/">MessageReplyHeader</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reply_to_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>This is a reply to a scheduled message.</td></tr><tr><td><strong>forum_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this message was sent in a <a href="/api/forum/#forum-topics">forum topic</a> (except for the General topic).</td></tr><tr><td><strong>quote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether this message is quoting a part of another message.</td></tr><tr><td><strong>reply_to_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>ID of message to which this message is replying</td></tr><tr><td><strong>reply_to_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>For replies sent in <a href="/api/threads/">channel discussion threads</a> of which the current user is not a member, the discussion group ID</td></tr><tr><td><strong>reply_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a></td><td>When replying to a message sent by a certain peer to another chat, contains info about the peer that originally sent the message to that other chat.</td></tr><tr><td><strong>reply_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/MessageMedia/">MessageMedia</a></td><td>When replying to a media sent by a certain peer to another chat, contains the media of the replied-to message.</td></tr><tr><td><strong>reply_to_top_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>ID of the message that started this <a href="/api/threads/">message thread</a></td></tr><tr><td><strong>quote_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>Used to quote-reply to only a certain section (specified here) of the original message.</td></tr><tr><td><strong>quote_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a> from the <code>quote_text</code> field.</td></tr><tr><td><strong>quote_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Offset of the message <code>quote_text</code> within the original message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>).</td></tr><tr><td><strong>todo_item_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/int/">int</a></td><td>Can be set to reply to the specified item of a <a href="/api/todo/">todo list »</a>.</td></tr><tr><td><strong>poll_option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/bytes/">bytes</a></td><td>If the message is a <a href="/api/poll/#replying-to-poll-options">reply to a specific poll answer option »</a>, the <code>option</code> bytes of the answer the reply is directed at.</td></tr></tbody></table>

### Type

[MessageReplyHeader](/type/MessageReplyHeader/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
