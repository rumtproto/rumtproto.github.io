---
title: "chatInviteImporter"
original: "https://core.telegram.org/constructor/chatInviteImporter"
section: ref
description: "When and which user joined the chat using a chat invite"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatInviteImporter","url":"/constructor/chatInviteImporter/"}]
layout: layout.njk
---

# chatInviteImporter

When and which user joined the chat using a chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteImporter/" class="current_page_link">chatInviteImporter</a>#8c5adfd9 flags:<a href="/type/%23/">#</a> requested:flags.0?true via_chatlist:flags.3?true user_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> about:flags.2?<a href="/type/string/">string</a> approved_by:flags.1?<a href="/type/long/">long</a> = <a href="/type/ChatInviteImporter/">ChatInviteImporter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this user currently has a pending <a href="/api/invites/#join-requests">join request »</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>The participant joined by importing a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the user join</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>For users with pending requests, contains bio of the user that requested to join</td></tr><tr><td><strong>approved_by</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>The administrator that approved the <a href="/api/invites/#join-requests">join request »</a> of the user</td></tr></tbody></table>

### Type

[ChatInviteImporter](/type/ChatInviteImporter/)

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
