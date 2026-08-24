---
title: "messages.exportedChatInvites"
original: "https://core.telegram.org/constructor/messages.exportedChatInvites"
section: ref
description: "Info about chat invites exported by a certain admin."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.exportedChatInvites","url":"/constructor/messages.exportedChatInvites/"}]
layout: layout.njk
---

# messages.exportedChatInvites

Info about chat invites exported by a certain admin.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.exportedChatInvites/" class="current_page_link">messages.exportedChatInvites</a>#bdc62dcc count:<a href="/type/int/">int</a> invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatInvite/">ExportedChatInvite</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvites/">messages.ExportedChatInvites</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of invites exported by the admin</td></tr><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatInvite/">ExportedChatInvite</a>&gt;</td><td>Exported invites</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about the admin</td></tr></tbody></table>

### Type

[messages.ExportedChatInvites](/type/messages.ExportedChatInvites/)
