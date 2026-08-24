---
title: "inputReplyToMessage"
original: "https://core.telegram.org/constructor/inputReplyToMessage"
section: ref
description: "The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputReplyToMessage","url":"/constructor/inputReplyToMessage/"}]
layout: layout.njk
---

# inputReplyToMessage

Reply to a message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputReplyToMessage/" class="current_page_link">inputReplyToMessage</a>#869fbe10 flags:<a href="/type/%23/">#</a> reply_to_msg_id:<a href="/type/int/">int</a> top_msg_id:flags.0?<a href="/type/int/">int</a> reply_to_peer_id:flags.1?<a href="/type/InputPeer/">InputPeer</a> quote_text:flags.2?<a href="/type/string/">string</a> quote_entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; quote_offset:flags.4?<a href="/type/int/">int</a> monoforum_peer_id:flags.5?<a href="/type/InputPeer/">InputPeer</a> todo_item_id:flags.6?<a href="/type/int/">int</a> = <a href="/type/InputReplyTo/">InputReplyTo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reply_to_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The message ID to reply to.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>This field must contain the topic ID <strong>only</strong> when replying to messages in forum topics different from the "General" topic (i.e. <code>reply_to_msg_id</code> is set and <code>reply_to_msg_id != topicID</code> and <code>topicID != 1</code>).<br>If the replied-to message is deleted before the method finishes execution, the value in this field will be used to send the message to the correct topic, instead of the "General" topic.</td></tr><tr><td><strong>reply_to_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>Used to reply to messages sent to another chat (specified here), can only be used for non-<code>protected</code> chats and messages.</td></tr><tr><td><strong>quote_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Used to quote-reply to only a certain section (specified here) of the original message. The maximum UTF-8 length for quotes is specified in the <a href="/api/config/#quote-length-max">quote_length_max</a> config key.</td></tr><tr><td><strong>quote_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a> from the <code>quote_text</code> field.</td></tr><tr><td><strong>quote_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Offset of the message <code>quote_text</code> within the original message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>).</td></tr><tr><td><strong>monoforum_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/InputPeer/">InputPeer</a></td><td>Must be set to the ID of the topic when replying to a message within a <a href="/api/monoforum/">monoforum topic</a>.</td></tr><tr><td><strong>todo_item_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Can be set to reply to the specified item of a <a href="/api/todo/">todo list »</a>.</td></tr><tr><td><strong>poll_option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/bytes/">bytes</a></td><td>If set, sends the message as a <a href="/api/poll/#replying-to-poll-options">reply to a specific poll answer option »</a>, containing the <code>option</code> bytes of the desired answer.</td></tr></tbody></table>

### Type

[InputReplyTo](/type/InputReplyTo/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
