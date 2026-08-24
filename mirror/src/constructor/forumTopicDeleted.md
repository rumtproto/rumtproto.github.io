---
title: "forumTopicDeleted"
original: "https://core.telegram.org/constructor/forumTopicDeleted"
section: ref
description: "Represents a deleted forum topic."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"forumTopicDeleted","url":"/constructor/forumTopicDeleted/"}]
layout: layout.njk
---

# forumTopicDeleted

Represents a deleted [forum topic](/api/forum/#forum-topics).

This constructor is returned in place of a [forumTopic](/constructor/forumTopic/) by [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/forumTopicDeleted/" class="current_page_link">forumTopicDeleted</a>#23f109b id:<a href="/type/int/">int</a> = <a href="/type/ForumTopic/">ForumTopic</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The ID of the deleted forum topic.</td></tr></tbody></table>

### Type

[ForumTopic](/type/ForumTopic/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [forumTopic](/constructor/forumTopic/)

Represents a [forum topic](/api/forum/#forum-topics).

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Get forum topics by their ID
