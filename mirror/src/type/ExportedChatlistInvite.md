---
title: "ExportedChatlistInvite"
original: "https://core.telegram.org/type/ExportedChatlistInvite"
section: ref
description: "An exported chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedChatlistInvite","url":"/type/ExportedChatlistInvite/"}]
layout: layout.njk
---

# ExportedChatlistInvite

An exported [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedChatlistInvite/">exportedChatlistInvite</a>#c5181ac flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; = <a href="/type/ExportedChatlistInvite/" class="current_page_link">ExportedChatlistInvite</a>;

---functions---

<a href="/method/chatlists.editExportedInvite/">chatlists.editExportedInvite</a>#653db63d flags:<a href="/type/%23/">#</a> chatlist:<a href="/type/InputChatlist/">InputChatlist</a> slug:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> peers:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/ExportedChatlistInvite/" class="current_page_link">ExportedChatlistInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedChatlistInvite/">exportedChatlistInvite</a></td><td>Exported <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.editExportedInvite/">chatlists.editExportedInvite</a></td><td>Edit a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
