---
title: "messages.getForumTopicsByID"
original: "https://core.telegram.org/method/messages.getForumTopicsByID"
section: ref
description: "Get forum topics by their ID"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getForumTopicsByID","url":"/method/messages.getForumTopicsByID/"}]
layout: layout.njk
---

# messages.getForumTopicsByID

Get forum topics by their ID

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.forumTopics/">messages.forumTopics</a>#367617d3 flags:<a href="/type/%23/">#</a> order_by_create_date:flags.0?true count:<a href="/type/int/">int</a> topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; pts:<a href="/type/int/">int</a> = <a href="/type/messages.ForumTopics/">messages.ForumTopics</a>;
---functions---
<a href="/method/messages.getForumTopicsByID/" class="current_page_link">messages.getForumTopicsByID</a>#af0a4a08 peer:<a href="/type/InputPeer/">InputPeer</a> topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.ForumTopics/">messages.ForumTopics</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Topic IDs</td></tr></tbody></table>

### Result

[messages.ForumTopics](/type/messages.ForumTopics/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>TOPICS_EMPTY</td><td>You specified no topic IDs.</td></tr></tbody></table>
