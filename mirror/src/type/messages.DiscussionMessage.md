---
title: "messages.DiscussionMessage"
original: "https://core.telegram.org/type/messages.DiscussionMessage"
section: ref
description: "Info about a message thread"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.DiscussionMessage","url":"/type/messages.DiscussionMessage/"}]
layout: layout.njk
---

# messages.DiscussionMessage

Info about a message thread

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.discussionMessage/">messages.discussionMessage</a>#a6341782 flags:<a href="/type/%23/">#</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; max_id:flags.0?<a href="/type/int/">int</a> read_inbox_max_id:flags.1?<a href="/type/int/">int</a> read_outbox_max_id:flags.2?<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.DiscussionMessage/" class="current_page_link">messages.DiscussionMessage</a>;

---functions---

<a href="/method/messages.getDiscussionMessage/">messages.getDiscussionMessage</a>#446972fd peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/messages.DiscussionMessage/" class="current_page_link">messages.DiscussionMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.discussionMessage/">messages.discussionMessage</a></td><td>Information about a <a href="/api/threads/">message thread</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDiscussionMessage/">messages.getDiscussionMessage</a></td><td>Get <a href="/api/threads/">discussion message</a> from the <a href="/api/discussion/">associated discussion group</a> of a channel to show it on top of the comment section, without actually joining the group</td></tr></tbody></table>
