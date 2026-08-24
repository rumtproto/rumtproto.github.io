---
title: "MessageReplies"
original: "https://core.telegram.org/type/MessageReplies"
section: ref
description: "Info about post comments (for channels) or message replies (for groups)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageReplies","url":"/type/MessageReplies/"}]
layout: layout.njk
---

# MessageReplies

Info about [post comments (for channels) or message replies (for groups)](/api/threads/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReplies/">messageReplies</a>#83d60fc2 flags:<a href="/type/%23/">#</a> comments:flags.0?true replies:<a href="/type/int/">int</a> replies_pts:<a href="/type/int/">int</a> recent_repliers:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; channel_id:flags.0?<a href="/type/long/">long</a> max_id:flags.2?<a href="/type/int/">int</a> read_max_id:flags.3?<a href="/type/int/">int</a> = <a href="/type/MessageReplies/" class="current_page_link">MessageReplies</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageReplies/">messageReplies</a></td><td>Info about <a href="/api/threads/">the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic</a> (all features ultimately based on message threads).</td></tr></tbody></table>

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
