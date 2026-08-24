---
title: "messages.MessageReactionsList"
original: "https://core.telegram.org/type/messages.MessageReactionsList"
section: ref
description: "List of peers that reacted to a specific message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.MessageReactionsList","url":"/type/messages.MessageReactionsList/"}]
layout: layout.njk
---

# messages.MessageReactionsList

List of peers that reacted to a specific message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messageReactionsList/">messages.messageReactionsList</a>#31bd492d flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerReaction/">MessagePeerReaction</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/messages.MessageReactionsList/" class="current_page_link">messages.MessageReactionsList</a>;

---functions---

<a href="/method/messages.getMessageReactionsList/">messages.getMessageReactionsList</a>#461b3f48 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> reaction:flags.0?<a href="/type/Reaction/">Reaction</a> offset:flags.1?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.MessageReactionsList/" class="current_page_link">messages.MessageReactionsList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageReactionsList/">messages.messageReactionsList</a></td><td>List of peers that reacted to a specific message</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessageReactionsList/">messages.getMessageReactionsList</a></td><td>Get <a href="/api/reactions/">message reaction</a> list, along with the sender of each reaction.</td></tr></tbody></table>
