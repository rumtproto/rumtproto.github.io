---
title: "InputReplyTo"
original: "https://core.telegram.org/type/InputReplyTo"
section: ref
description: "Contains info about a message or story to reply to."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputReplyTo","url":"/type/InputReplyTo/"}]
layout: layout.njk
---

# InputReplyTo

Contains info about a message or story to reply to.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputReplyToMessage/">inputReplyToMessage</a>#869fbe10 flags:<a href="/type/%23/">#</a> reply_to_msg_id:<a href="/type/int/">int</a> top_msg_id:flags.0?<a href="/type/int/">int</a> reply_to_peer_id:flags.1?<a href="/type/InputPeer/">InputPeer</a> quote_text:flags.2?<a href="/type/string/">string</a> quote_entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; quote_offset:flags.4?<a href="/type/int/">int</a> monoforum_peer_id:flags.5?<a href="/type/InputPeer/">InputPeer</a> todo_item_id:flags.6?<a href="/type/int/">int</a> = <a href="/type/InputReplyTo/" class="current_page_link">InputReplyTo</a>;
<a href="/constructor/inputReplyToStory/">inputReplyToStory</a>#5881323a peer:<a href="/type/InputPeer/">InputPeer</a> story_id:<a href="/type/int/">int</a> = <a href="/type/InputReplyTo/" class="current_page_link">InputReplyTo</a>;
<a href="/constructor/inputReplyToMonoForum/">inputReplyToMonoForum</a>#69d66c45 monoforum_peer_id:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/InputReplyTo/" class="current_page_link">InputReplyTo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputReplyToMessage/">inputReplyToMessage</a></td><td>Reply to a message.</td></tr><tr><td><a href="/constructor/inputReplyToStory/">inputReplyToStory</a></td><td>Reply to a story.</td></tr><tr><td><a href="/constructor/inputReplyToMonoForum/">inputReplyToMonoForum</a></td><td>Used to send messages to a <a href="/api/monoforum/">monoforum topic</a>.</td></tr></tbody></table>
