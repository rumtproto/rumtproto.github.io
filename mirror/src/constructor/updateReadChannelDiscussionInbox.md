---
title: "updateReadChannelDiscussionInbox"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionInbox"
section: ref
description: "Incoming comments in a discussion thread were marked as read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadChannelDiscussionInbox","url":"/constructor/updateReadChannelDiscussionInbox/"}]
layout: layout.njk
---

# updateReadChannelDiscussionInbox

Incoming comments in a [discussion thread](/api/threads/) were marked as read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateReadChannelDiscussionInbox/" class="current_page_link">updateReadChannelDiscussionInbox</a>#d6b19546 flags:<a href="/type/%23/">#</a> channel_id:<a href="/type/long/">long</a> top_msg_id:<a href="/type/int/">int</a> read_max_id:<a href="/type/int/">int</a> broadcast_id:flags.0?<a href="/type/long/">long</a> broadcast_post:flags.0?<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/channel/">Discussion group ID</a></td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the group message that started the <a href="/api/threads/">thread</a> (message in linked discussion group)</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of latest read incoming message for this <a href="/api/threads/">thread</a></td></tr><tr><td><strong>broadcast_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If set, contains the ID of the <a href="/api/channel/">channel</a> that contains the post that started the <a href="/api/threads/">comment thread</a> in the discussion group (<code>channel_id</code>)</td></tr><tr><td><strong>broadcast_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, contains the ID of the channel post that started the <a href="/api/threads/">comment thread</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
