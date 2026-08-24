---
title: "messages.editExportedChatInvite"
original: "https://core.telegram.org/method/messages.editExportedChatInvite"
section: ref
description: "Edit an exported chat invite"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editExportedChatInvite","url":"/method/messages.editExportedChatInvite/"}]
layout: layout.njk
---

# messages.editExportedChatInvite

Edit an exported chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.exportedChatInvite/">messages.exportedChatInvite</a>#1871be50 invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvite/">messages.ExportedChatInvite</a>;
<a href="/constructor/messages.exportedChatInviteReplaced/">messages.exportedChatInviteReplaced</a>#222600ef invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> new_invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ExportedChatInvite/">messages.ExportedChatInvite</a>;
---functions---
<a href="/method/messages.editExportedChatInvite/" class="current_page_link">messages.editExportedChatInvite</a>#bdca2f75 flags:<a href="/type/%23/">#</a> revoked:flags.2?true peer:<a href="/type/InputPeer/">InputPeer</a> link:<a href="/type/string/">string</a> expire_date:flags.0?<a href="/type/int/">int</a> usage_limit:flags.1?<a href="/type/int/">int</a> request_needed:flags.3?<a href="/type/Bool/">Bool</a> title:flags.4?<a href="/type/string/">string</a> = <a href="/type/messages.ExportedChatInvite/">messages.ExportedChatInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to revoke the chat invite</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Invite link</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>New expiration date</td></tr><tr><td><strong>usage_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Maximum number of users that can join using this link</td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Bool/">Bool</a></td><td>Whether admin confirmation is required before admitting each separate user into the chat</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Description of the invite link, visible only to administrators</td></tr></tbody></table>

### Result

[messages.ExportedChatInvite](/type/messages.ExportedChatInvite/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_INVITE_PERMANENT</td><td>You can't set an expiration date on permanent invite links.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>403</td><td>EDIT_BOT_INVITE_FORBIDDEN</td><td>Normal users can't edit invites that were created by bots.</td></tr><tr><td>400</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USAGE_LIMIT_INVALID</td><td>The specified usage limit is invalid.</td></tr></tbody></table>
