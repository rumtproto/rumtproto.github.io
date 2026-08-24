---
title: "exportedChatlistInvite"
original: "https://core.telegram.org/constructor/exportedChatlistInvite"
section: ref
description: "Exported chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"exportedChatlistInvite","url":"/constructor/exportedChatlistInvite/"}]
layout: layout.njk
---

# exportedChatlistInvite

Exported [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedChatlistInvite/" class="current_page_link">exportedChatlistInvite</a>#c5181ac flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; = <a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the link</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>Peers to import</td></tr></tbody></table>

### Type

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
