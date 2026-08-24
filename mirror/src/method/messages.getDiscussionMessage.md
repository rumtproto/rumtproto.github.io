---
title: "messages.getDiscussionMessage"
original: "https://core.telegram.org/method/messages.getDiscussionMessage"
section: ref
description: "Get discussion message from the associated discussion group of a channel to show it on top of the comment section, without actually joining the group"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDiscussionMessage","url":"/method/messages.getDiscussionMessage/"}]
layout: layout.njk
---

# messages.getDiscussionMessage

Get [discussion message](/api/threads/) from the [associated discussion group](/api/discussion/) of a channel to show it on top of the comment section, without actually joining the group

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.discussionMessage/">messages.discussionMessage</a>#a6341782 flags:<a href="/type/%23/">#</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; max_id:flags.0?<a href="/type/int/">int</a> read_inbox_max_id:flags.1?<a href="/type/int/">int</a> read_outbox_max_id:flags.2?<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.DiscussionMessage/">messages.DiscussionMessage</a>;
---functions---
<a href="/method/messages.getDiscussionMessage/" class="current_page_link">messages.getDiscussionMessage</a>#446972fd peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/messages.DiscussionMessage/">messages.DiscussionMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td><a href="/api/channel/">Channel ID</a></td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr></tbody></table>

### Result

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TOPIC_ID_INVALID</td><td>The specified topic ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
