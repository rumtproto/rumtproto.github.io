---
title: "messages.getChatInviteImporters"
original: "https://core.telegram.org/method/messages.getChatInviteImporters"
section: ref
description: "Get info about the users that joined the chat using a specific chat invite"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getChatInviteImporters","url":"/method/messages.getChatInviteImporters/"}]
layout: layout.njk
---

# messages.getChatInviteImporters

Get info about the users that joined the chat using a specific chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatInviteImporters/">messages.chatInviteImporters</a>#81b6b00a count:<a href="/type/int/">int</a> importers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatInviteImporter/">ChatInviteImporter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ChatInviteImporters/">messages.ChatInviteImporters</a>;
---functions---
<a href="/method/messages.getChatInviteImporters/" class="current_page_link">messages.getChatInviteImporters</a>#df04dd4e flags:<a href="/type/%23/">#</a> requested:flags.0?true subscription_expired:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> link:flags.1?<a href="/type/string/">string</a> q:flags.2?<a href="/type/string/">string</a> offset_date:<a href="/type/int/">int</a> offset_user:<a href="/type/InputUser/">InputUser</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ChatInviteImporters/">messages.ChatInviteImporters</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, only returns info about users with pending <a href="/api/invites/#join-requests">join requests »</a></td></tr><tr><td><strong>subscription_expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Set this flag if the link is a <a href="/api/stars/#star-subscriptions">Telegram Star subscription link »</a> and only members with already expired subscription must be returned.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Invite link</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Search for a user in the pending <a href="/api/invites/#join-requests">join requests »</a> list: only available when the <code>requested</code> flag is set, cannot be used together with a specific <code>link</code>.</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_user</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID for <a href="/api/offsets/">pagination</a>: if set, <code>offset_date</code> must also be set.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[messages.ChatInviteImporters](/type/messages.ChatInviteImporters/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SEARCH_WITH_LINK_NOT_SUPPORTED</td><td>You cannot provide a search query and an invite link at the same time.</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
