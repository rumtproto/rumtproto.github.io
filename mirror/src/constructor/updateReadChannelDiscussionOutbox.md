---
title: "updateReadChannelDiscussionOutbox"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionOutbox"
section: ref
description: "Outgoing comments in a discussion thread were marked as read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadChannelDiscussionOutbox","url":"/constructor/updateReadChannelDiscussionOutbox/"}]
layout: layout.njk
---

# updateReadChannelDiscussionOutbox

Outgoing comments in a [discussion thread](/api/threads/) were marked as read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateReadChannelDiscussionOutbox/" class="current_page_link">updateReadChannelDiscussionOutbox</a>#695c9e7c channel_id:<a href="/type/long/">long</a> top_msg_id:<a href="/type/int/">int</a> read_max_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/channel/">Supergroup ID</a></td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the group message that started the <a href="/api/threads/">thread</a></td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of latest read outgoing message for this <a href="/api/threads/">thread</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
