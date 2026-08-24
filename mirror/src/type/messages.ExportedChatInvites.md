---
title: "messages.ExportedChatInvites"
original: "https://core.telegram.org/type/messages.ExportedChatInvites"
section: ref
description: "Info about chat invites exported by a certain admin."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ExportedChatInvites","url":"/type/messages.ExportedChatInvites/"}]
layout: layout.njk
---

# messages.ExportedChatInvites

Info about chat invites exported by a certain admin.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.exportedChatInvites/">messages.exportedChatInvites</a>#bdc62dcc count:<a href="/type/int/">int</a> invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatInvite/">ExportedChatInvite</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvites/" class="current_page_link">messages.ExportedChatInvites</a>;

---functions---

<a href="/method/messages.getExportedChatInvites/">messages.getExportedChatInvites</a>#a2b5a3f6 flags:<a href="/type/%23/">#</a> revoked:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> admin_id:<a href="/type/InputUser/">InputUser</a> offset_date:flags.2?<a href="/type/int/">int</a> offset_link:flags.2?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ExportedChatInvites/" class="current_page_link">messages.ExportedChatInvites</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvites/">messages.exportedChatInvites</a></td><td>Info about chat invites exported by a certain admin.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvites/">messages.getExportedChatInvites</a></td><td>Get info about the chat invites of a specific chat</td></tr></tbody></table>
