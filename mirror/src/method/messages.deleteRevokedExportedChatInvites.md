---
title: "messages.deleteRevokedExportedChatInvites"
original: "https://core.telegram.org/method/messages.deleteRevokedExportedChatInvites"
section: ref
description: "Delete all revoked chat invites"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteRevokedExportedChatInvites","url":"/method/messages.deleteRevokedExportedChatInvites/"}]
layout: layout.njk
---

# messages.deleteRevokedExportedChatInvites

Delete all revoked chat invites

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.deleteRevokedExportedChatInvites/" class="current_page_link">messages.deleteRevokedExportedChatInvites</a>#56987bd5 peer:<a href="/type/InputPeer/">InputPeer</a> admin_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>ID of the admin that originally generated the revoked chat invites</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ADMIN_ID_INVALID</td><td>The specified admin ID is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
