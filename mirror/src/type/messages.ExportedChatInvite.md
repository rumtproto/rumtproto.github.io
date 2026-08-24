---
title: "messages.ExportedChatInvite"
original: "https://core.telegram.org/type/messages.ExportedChatInvite"
section: ref
description: "Contains info about a chat invite, and eventually a pointer to the newest chat invite."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ExportedChatInvite","url":"/type/messages.ExportedChatInvite/"}]
layout: layout.njk
---

# messages.ExportedChatInvite

Contains info about a chat invite, and eventually a pointer to the newest chat invite.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.exportedChatInvite/">messages.exportedChatInvite</a>#1871be50 invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvite/" class="current_page_link">messages.ExportedChatInvite</a>;
<a href="/constructor/messages.exportedChatInviteReplaced/">messages.exportedChatInviteReplaced</a>#222600ef invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> new_invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvite/" class="current_page_link">messages.ExportedChatInvite</a>;

---functions---

<a href="/method/messages.getExportedChatInvite/">messages.getExportedChatInvite</a>#73746f5c peer:<a href="/type/InputPeer/">InputPeer</a> link:<a href="/type/string/">string</a> = <a href="/type/messages.ExportedChatInvite/" class="current_page_link">messages.ExportedChatInvite</a>;
<a href="/method/messages.editExportedChatInvite/">messages.editExportedChatInvite</a>#bdca2f75 flags:<a href="/type/%23/">#</a> revoked:flags.2?true peer:<a href="/type/InputPeer/">InputPeer</a> link:<a href="/type/string/">string</a> expire_date:flags.0?<a href="/type/int/">int</a> usage_limit:flags.1?<a href="/type/int/">int</a> request_needed:flags.3?<a href="/type/Bool/">Bool</a> title:flags.4?<a href="/type/string/">string</a> = <a href="/type/messages.ExportedChatInvite/" class="current_page_link">messages.ExportedChatInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvite/">messages.exportedChatInvite</a></td><td>Info about a chat invite</td></tr><tr><td><a href="/constructor/messages.exportedChatInviteReplaced/">messages.exportedChatInviteReplaced</a></td><td>The specified chat invite was replaced with another one</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvite/">messages.getExportedChatInvite</a></td><td>Get info about a chat invite</td></tr><tr><td><a href="/method/messages.editExportedChatInvite/">messages.editExportedChatInvite</a></td><td>Edit an exported chat invite</td></tr></tbody></table>
