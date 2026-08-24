---
title: "messages.getExportedChatInvites"
original: "https://core.telegram.org/method/messages.getExportedChatInvites"
section: ref
description: "Get info about the chat invites of a specific chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getExportedChatInvites","url":"/method/messages.getExportedChatInvites/"}]
layout: layout.njk
---

# messages.getExportedChatInvites

Get info about the chat invites of a specific chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.exportedChatInvites/">messages.exportedChatInvites</a>#bdc62dcc count:<a href="/type/int/">int</a> invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ExportedChatInvite/">ExportedChatInvite</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvites/">messages.ExportedChatInvites</a>;
---functions---
<a href="/method/messages.getExportedChatInvites/" class="current_page_link">messages.getExportedChatInvites</a>#a2b5a3f6 flags:<a href="/type/%23/">#</a> revoked:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> admin_id:<a href="/type/InputUser/">InputUser</a> offset_date:flags.2?<a href="/type/int/">int</a> offset_link:flags.2?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ExportedChatInvites/">messages.ExportedChatInvites</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether to fetch revoked chat invites</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Whether to only fetch chat invites from this admin</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[messages.ExportedChatInvites](/type/messages.ExportedChatInvites/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ADMIN_ID_INVALID</td><td>The specified admin ID is invalid.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
