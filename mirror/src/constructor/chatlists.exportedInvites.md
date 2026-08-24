---
title: "chatlists.exportedInvites"
original: "https://core.telegram.org/constructor/chatlists.exportedInvites"
section: ref
description: "Info about multiple chat folder deep links »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.exportedInvites","url":"/constructor/chatlists.exportedInvites/"}]
layout: layout.njk
---

# chatlists.exportedInvites

Info about multiple [chat folder deep links »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.exportedInvites/" class="current_page_link">chatlists.exportedInvites</a>#10ab6dc7 invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ExportedInvites/">chatlists.ExportedInvites</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>&gt;</td><td>The <a href="/api/links/#chat-folder-links">chat folder deep links »</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Related chat information</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Related user information</td></tr></tbody></table>

### Type

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
