---
title: "requestPeerTypeBroadcast"
original: "https://core.telegram.org/constructor/requestPeerTypeBroadcast"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"requestPeerTypeBroadcast","url":"/constructor/requestPeerTypeBroadcast/"}]
layout: layout.njk
---

# requestPeerTypeBroadcast

Choose a channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requestPeerTypeBroadcast/" class="current_page_link">requestPeerTypeBroadcast</a>#339bef6c flags:<a href="/type/%23/">#</a> creator:flags.0?true has_username:flags.3?<a href="/type/Bool/">Bool</a> user_admin_rights:flags.1?<a href="/type/ChatAdminRights/">ChatAdminRights</a> bot_admin_rights:flags.2?<a href="/type/ChatAdminRights/">ChatAdminRights</a> = <a href="/type/RequestPeerType/">RequestPeerType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to allow only choosing channels that were created by the current user.</td></tr><tr><td><strong>has_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Bool/">Bool</a></td><td>If specified, allows only choosing channels with or without a username, according to the value of <a href="/type/Bool/">Bool</a>.</td></tr><tr><td><strong>user_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>If specified, allows only choosing channels where the current user is an admin with at least the specified admin rights.</td></tr><tr><td><strong>bot_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>If specified, allows only choosing channels where the bot is an admin with at least the specified admin rights.</td></tr></tbody></table>

### Type

[RequestPeerType](/type/RequestPeerType/)

### Related pages

#### [Bool](/type/Bool/)

Boolean type.
