---
title: "ForumTopic"
original: "https://core.telegram.org/type/ForumTopic"
section: ref
description: "Contains information about a forum topic"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ForumTopic","url":"/type/ForumTopic/"}]
layout: layout.njk
---

# ForumTopic

Contains information about a [forum topic](/api/forum/#forum-topics)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/forumTopicDeleted/">forumTopicDeleted</a>#23f109b id:<a href="/type/int/">int</a> = <a href="/type/ForumTopic/" class="current_page_link">ForumTopic</a>;
<a href="/constructor/forumTopic/">forumTopic</a>#cdff0eca flags:<a href="/type/%23/">#</a> my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> peer:<a href="/type/Peer/">Peer</a> title:<a href="/type/string/">string</a> icon_color:<a href="/type/int/">int</a> icon_emoji_id:flags.0?<a href="/type/long/">long</a> top_message:<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> unread_mentions_count:<a href="/type/int/">int</a> unread_reactions_count:<a href="/type/int/">int</a> from_id:<a href="/type/Peer/">Peer</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> draft:flags.4?<a href="/type/DraftMessage/">DraftMessage</a> = <a href="/type/ForumTopic/" class="current_page_link">ForumTopic</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/forumTopicDeleted/">forumTopicDeleted</a></td><td>Represents a deleted <a href="/api/forum/#forum-topics">forum topic</a>.<br><br>This constructor is returned in place of a <a href="/constructor/forumTopic/">forumTopic</a> by <a href="/method/messages.getForumTopicsByID/">messages.getForumTopicsByID</a> (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted.</td></tr><tr><td><a href="/constructor/forumTopic/">forumTopic</a></td><td>Represents a <a href="/api/forum/#forum-topics">forum topic</a>.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
