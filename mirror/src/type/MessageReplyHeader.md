---
title: "MessageReplyHeader"
original: "https://core.telegram.org/type/MessageReplyHeader"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageReplyHeader","url":"/type/MessageReplyHeader/"}]
layout: layout.njk
---

# MessageReplyHeader

Reply information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReplyHeader/">messageReplyHeader</a>#6917560b flags:<a href="/type/%23/">#</a> reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?<a href="/type/int/">int</a> reply_to_peer_id:flags.0?<a href="/type/Peer/">Peer</a> reply_from:flags.5?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> reply_media:flags.8?<a href="/type/MessageMedia/">MessageMedia</a> reply_to_top_id:flags.1?<a href="/type/int/">int</a> quote_text:flags.6?<a href="/type/string/">string</a> quote_entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; quote_offset:flags.10?<a href="/type/int/">int</a> todo_item_id:flags.11?<a href="/type/int/">int</a> = <a href="/type/MessageReplyHeader/" class="current_page_link">MessageReplyHeader</a>;
<a href="/constructor/messageReplyStoryHeader/">messageReplyStoryHeader</a>#e5af939 peer:<a href="/type/Peer/">Peer</a> story_id:<a href="/type/int/">int</a> = <a href="/type/MessageReplyHeader/" class="current_page_link">MessageReplyHeader</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageReplyHeader/">messageReplyHeader</a></td><td>Message replies and <a href="/api/threads/">thread</a> information</td></tr><tr><td><a href="/constructor/messageReplyStoryHeader/">messageReplyStoryHeader</a></td><td>Represents a reply to a <a href="/api/stories/">story</a></td></tr></tbody></table>
