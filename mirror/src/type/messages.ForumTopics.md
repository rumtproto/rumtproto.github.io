---
title: "messages.ForumTopics"
original: "https://core.telegram.org/type/messages.ForumTopics"
section: ref
description: "Contains information about multiple forum topics"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ForumTopics","url":"/type/messages.ForumTopics/"}]
layout: layout.njk
---

# messages.ForumTopics

Contains information about multiple [forum topics](/api/forum/#forum-topics)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.forumTopics/">messages.forumTopics</a>#367617d3 flags:<a href="/type/%23/">#</a> order_by_create_date:flags.0?true count:<a href="/type/int/">int</a> topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; pts:<a href="/type/int/">int</a> = <a href="/type/messages.ForumTopics/" class="current_page_link">messages.ForumTopics</a>;

---functions---

<a href="/method/messages.getForumTopics/">messages.getForumTopics</a>#3ba47bff flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> q:flags.0?<a href="/type/string/">string</a> offset_date:<a href="/type/int/">int</a> offset_id:<a href="/type/int/">int</a> offset_topic:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ForumTopics/" class="current_page_link">messages.ForumTopics</a>;
<a href="/method/messages.getForumTopicsByID/">messages.getForumTopicsByID</a>#af0a4a08 peer:<a href="/type/InputPeer/">InputPeer</a> topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.ForumTopics/" class="current_page_link">messages.ForumTopics</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.forumTopics/">messages.forumTopics</a></td><td>Contains information about multiple <a href="/api/forum/#forum-topics">forum topics</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getForumTopics/">messages.getForumTopics</a></td><td>Get <a href="/api/forum/">topics of a forum</a></td></tr><tr><td><a href="/method/messages.getForumTopicsByID/">messages.getForumTopicsByID</a></td><td>Get forum topics by their ID</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
