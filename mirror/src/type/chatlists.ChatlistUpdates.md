---
title: "chatlists.ChatlistUpdates"
original: "https://core.telegram.org/type/chatlists.ChatlistUpdates"
section: ref
description: "Updated info about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ChatlistUpdates","url":"/type/chatlists.ChatlistUpdates/"}]
layout: layout.njk
---

# chatlists.ChatlistUpdates

Updated info about a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.chatlistUpdates/">chatlists.chatlistUpdates</a>#93bd878d missing_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ChatlistUpdates/" class="current_page_link">chatlists.ChatlistUpdates</a>;

---functions---

<a href="/method/chatlists.getChatlistUpdates/">chatlists.getChatlistUpdates</a>#89419521 chatlist:<a href="/type/InputChatlist/">InputChatlist</a> = <a href="/type/chatlists.ChatlistUpdates/" class="current_page_link">chatlists.ChatlistUpdates</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistUpdates/">chatlists.chatlistUpdates</a></td><td>Updated information about a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.getChatlistUpdates/">chatlists.getChatlistUpdates</a></td><td>Fetch new chats associated with an imported <a href="/api/links/#chat-folder-links">chat folder deep link »</a>. Must be invoked at most every <code>chatlist_update_period</code> seconds (as per the related <a href="/api/config/#chatlist-update-period">client configuration parameter »</a>).</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
