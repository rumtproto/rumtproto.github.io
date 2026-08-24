---
title: "DraftMessage"
original: "https://core.telegram.org/type/DraftMessage"
section: ref
description: "Represents a message draft."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DraftMessage","url":"/type/DraftMessage/"}]
layout: layout.njk
---

# DraftMessage

Represents a message [draft](/api/drafts/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/draftMessageEmpty/">draftMessageEmpty</a>#1b0c841a flags:<a href="/type/%23/">#</a> date:flags.0?<a href="/type/int/">int</a> = <a href="/type/DraftMessage/" class="current_page_link">DraftMessage</a>;
<a href="/constructor/draftMessage/">draftMessage</a>#96eaa5eb flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?<a href="/type/InputReplyTo/">InputReplyTo</a> message:<a href="/type/string/">string</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; media:flags.5?<a href="/type/InputMedia/">InputMedia</a> date:<a href="/type/int/">int</a> effect:flags.7?<a href="/type/long/">long</a> suggested_post:flags.8?<a href="/type/SuggestedPost/">SuggestedPost</a> = <a href="/type/DraftMessage/" class="current_page_link">DraftMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/draftMessageEmpty/">draftMessageEmpty</a></td><td>Empty draft</td></tr><tr><td><a href="/constructor/draftMessage/">draftMessage</a></td><td>Represents a message <a href="/api/drafts/">draft</a>.</td></tr></tbody></table>

### Related pages

#### [Message drafts](/api/drafts/)

How to handle message drafts
