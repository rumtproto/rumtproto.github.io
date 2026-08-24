---
title: "updateShortMessage"
original: "https://core.telegram.org/constructor/updateShortMessage"
section: ref
description: "Info about a message sent to (received from) another user"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateShortMessage","url":"/constructor/updateShortMessage/"}]
layout: layout.njk
---

# updateShortMessage

Info about a message sent to (received from) another user

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateShortMessage/" class="current_page_link">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the message is outgoing</td></tr><tr><td><strong>mentioned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether we were mentioned in the message</td></tr><tr><td><strong>media_unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether there are some <strong>unread</strong> mentions in this message</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>If true, the message is a silent message, no notifications should be triggered</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The message ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The ID of the sender (if <code>outgoing</code> will be the ID of the destination) of the message</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The message</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">PTS</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">PTS count</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">date</a></td></tr><tr><td><strong>fwd_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a></td><td>Info about a forwarded message</td></tr><tr><td><strong>via_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/long/">long</a></td><td>Info about the inline bot used to generate this message</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a></td><td>Reply and <a href="/api/threads/">thread</a> information</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Entities</a> for styled text</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/int/">int</a></td><td>Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well.</td></tr></tbody></table>

### Type

[Updates](/type/Updates/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
