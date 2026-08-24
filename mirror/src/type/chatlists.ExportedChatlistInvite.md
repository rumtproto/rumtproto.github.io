---
title: "chatlists.ExportedChatlistInvite"
original: "https://core.telegram.org/type/chatlists.ExportedChatlistInvite"
section: ref
description: "Exported chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ExportedChatlistInvite","url":"/type/chatlists.ExportedChatlistInvite/"}]
layout: layout.njk
---

# chatlists.ExportedChatlistInvite

Exported [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.exportedChatlistInvite/">chatlists.exportedChatlistInvite</a>#10e6e3a6 filter:<a href="/type/DialogFilter/">DialogFilter</a> invite:<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a> = <a href="/type/chatlists.ExportedChatlistInvite/" class="current_page_link">chatlists.ExportedChatlistInvite</a>;

---functions---

<a href="/method/chatlists.exportChatlistInvite/">chatlists.exportChatlistInvite</a>#8472478e chatlist:<a href="/type/InputChatlist/">InputChatlist</a> title:<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/chatlists.ExportedChatlistInvite/" class="current_page_link">chatlists.ExportedChatlistInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.exportedChatlistInvite/">chatlists.exportedChatlistInvite</a></td><td>Info about an exported <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.exportChatlistInvite/">chatlists.exportChatlistInvite</a></td><td>Export a <a href="/api/folders/">folder »</a>, creating a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
