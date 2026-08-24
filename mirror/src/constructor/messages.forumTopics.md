---
title: "messages.forumTopics"
original: "https://core.telegram.org/constructor/messages.forumTopics"
section: ref
description: "Contains information about multiple forum topics"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.forumTopics","url":"/constructor/messages.forumTopics/"}]
layout: layout.njk
---

# messages.forumTopics

Contains information about multiple [forum topics](/api/forum/#forum-topics)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.forumTopics/" class="current_page_link">messages.forumTopics</a>#367617d3 flags:<a href="/type/%23/">#</a> order_by_create_date:flags.0?true count:<a href="/type/int/">int</a> topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; pts:<a href="/type/int/">int</a> = <a href="/type/messages.ForumTopics/">messages.ForumTopics</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>order_by_create_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the returned topics are ordered by creation date; if set, pagination by <code>offset_date</code> should use <a href="/constructor/forumTopic/">forumTopic</a>.<code>date</code>; otherwise topics are ordered by the last message date, so paginate by the <code>date</code> of the <a href="/type/Message/">message</a> referenced by <a href="/constructor/forumTopic/">forumTopic</a>.<code>top_message</code>.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of topics matching query; may be more than the topics contained in <code>topics</code>, in which case <a href="/api/offsets/">pagination</a> is required.</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt;</td><td>Forum topics</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Related messages (contains the messages mentioned by <a href="/constructor/forumTopic/">forumTopic</a>.<code>top_message</code>).</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Related chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Related users</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr></tbody></table>

### Type

[messages.ForumTopics](/type/messages.ForumTopics/)

### Related pages

#### [forumTopic](/constructor/forumTopic/)

Represents a [forum topic](/api/forum/#forum-topics).

#### [Message](/type/Message/)

Object describing a message.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
