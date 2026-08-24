---
title: "chatlists.ChatlistInvite"
original: "https://core.telegram.org/type/chatlists.ChatlistInvite"
section: ref
description: "Info about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ChatlistInvite","url":"/type/chatlists.ChatlistInvite/"}]
layout: layout.njk
---

# chatlists.ChatlistInvite

Info about a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.chatlistInviteAlready/">chatlists.chatlistInviteAlready</a>#fa87f659 filter_id:<a href="/type/int/">int</a> missing_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; already_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ChatlistInvite/" class="current_page_link">chatlists.ChatlistInvite</a>;
<a href="/constructor/chatlists.chatlistInvite/">chatlists.chatlistInvite</a>#f10ece2f flags:<a href="/type/%23/">#</a> title_noanimate:flags.1?true title:<a href="/type/TextWithEntities/">TextWithEntities</a> emoticon:flags.0?<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ChatlistInvite/" class="current_page_link">chatlists.ChatlistInvite</a>;

---functions---

<a href="/method/chatlists.checkChatlistInvite/">chatlists.checkChatlistInvite</a>#41c10fff slug:<a href="/type/string/">string</a> = <a href="/type/chatlists.ChatlistInvite/" class="current_page_link">chatlists.ChatlistInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistInviteAlready/">chatlists.chatlistInviteAlready</a></td><td>Updated info about a <a href="/api/links/#chat-folder-links">chat folder deep link »</a> we already imported.</td></tr><tr><td><a href="/constructor/chatlists.chatlistInvite/">chatlists.chatlistInvite</a></td><td>Info about a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.checkChatlistInvite/">chatlists.checkChatlistInvite</a></td><td>Obtain information about a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
