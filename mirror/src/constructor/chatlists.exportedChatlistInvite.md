---
title: "chatlists.exportedChatlistInvite"
original: "https://core.telegram.org/constructor/chatlists.exportedChatlistInvite"
section: ref
description: "Info about an exported chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.exportedChatlistInvite","url":"/constructor/chatlists.exportedChatlistInvite/"}]
layout: layout.njk
---

# chatlists.exportedChatlistInvite

Info about an exported [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.exportedChatlistInvite/" class="current_page_link">chatlists.exportedChatlistInvite</a>#10e6e3a6 filter:<a href="/type/DialogFilter/">DialogFilter</a> invite:<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a> = <a href="/type/chatlists.ExportedChatlistInvite/">chatlists.ExportedChatlistInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/DialogFilter/">DialogFilter</a></td><td>Folder ID</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a></td><td>The exported <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Type

[chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
