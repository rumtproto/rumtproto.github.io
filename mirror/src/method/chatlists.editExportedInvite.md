---
title: "chatlists.editExportedInvite"
original: "https://core.telegram.org/method/chatlists.editExportedInvite"
section: ref
description: "Edit a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.editExportedInvite","url":"/method/chatlists.editExportedInvite/"}]
layout: layout.njk
---

# chatlists.editExportedInvite

Edit a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedChatlistInvite/">exportedChatlistInvite</a>#c5181ac flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; = <a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>;
---functions---
<a href="/method/chatlists.editExportedInvite/" class="current_page_link">chatlists.editExportedInvite</a>#653db63d flags:<a href="/type/%23/">#</a> chatlist:<a href="/type/InputChatlist/">InputChatlist</a> slug:<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> peers:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>Folder ID</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>slug</code> obtained from the <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>If set, sets a new name for the link</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>If set, changes the list of peers shared with the link</td></tr></tbody></table>

### Result

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>The specified invite slug is empty.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>The specified chat folder link has expired.</td></tr><tr><td>400</td><td>PEERS_LIST_EMPTY</td><td>The specified list of peers is empty.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
