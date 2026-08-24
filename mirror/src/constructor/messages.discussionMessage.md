---
title: "messages.discussionMessage"
original: "https://core.telegram.org/constructor/messages.discussionMessage"
section: ref
description: "Information about a message thread"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.discussionMessage","url":"/constructor/messages.discussionMessage/"}]
layout: layout.njk
---

# messages.discussionMessage

Information about a [message thread](/api/threads/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.discussionMessage/" class="current_page_link">messages.discussionMessage</a>#a6341782 flags:<a href="/type/%23/">#</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; max_id:flags.0?<a href="/type/int/">int</a> read_inbox_max_id:flags.1?<a href="/type/int/">int</a> read_outbox_max_id:flags.2?<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.DiscussionMessage/">messages.DiscussionMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>The messages from which the thread starts. The messages are returned in reverse chronological order (i.e., in order of decreasing message ID).</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Message ID of latest reply in this <a href="/api/threads/">thread</a></td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Message ID of latest read incoming message in this <a href="/api/threads/">thread</a></td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Message ID of latest read outgoing message in this <a href="/api/threads/">thread</a></td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of unread messages</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in constructor</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in constructor</td></tr></tbody></table>

### Type

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
