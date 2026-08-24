---
title: "chatlists.getExportedInvites"
original: "https://core.telegram.org/method/chatlists.getExportedInvites"
section: ref
description: "List all chat folder deep links » associated to a folder"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.getExportedInvites","url":"/method/chatlists.getExportedInvites/"}]
layout: layout.njk
---

# chatlists.getExportedInvites

List all [chat folder deep links »](/api/links/#chat-folder-links) associated to a folder

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.exportedInvites/">chatlists.exportedInvites</a>#10ab6dc7 invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ExportedInvites/">chatlists.ExportedInvites</a>;
---functions---
<a href="/method/chatlists.getExportedInvites/" class="current_page_link">chatlists.getExportedInvites</a>#ce03da83 chatlist:<a href="/type/InputChatlist/">InputChatlist</a> = <a href="/type/chatlists.ExportedInvites/">chatlists.ExportedInvites</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>The folder</td></tr></tbody></table>

### Result

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
