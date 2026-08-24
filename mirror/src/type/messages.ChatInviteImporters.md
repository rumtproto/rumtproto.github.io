---
title: "messages.ChatInviteImporters"
original: "https://core.telegram.org/type/messages.ChatInviteImporters"
section: ref
description: "List of users that imported a chat invitation link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ChatInviteImporters","url":"/type/messages.ChatInviteImporters/"}]
layout: layout.njk
---

# messages.ChatInviteImporters

List of users that imported a chat invitation link.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatInviteImporters/">messages.chatInviteImporters</a>#81b6b00a count:<a href="/type/int/">int</a> importers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatInviteImporter/">ChatInviteImporter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ChatInviteImporters/" class="current_page_link">messages.ChatInviteImporters</a>;

---functions---

<a href="/method/messages.getChatInviteImporters/">messages.getChatInviteImporters</a>#df04dd4e flags:<a href="/type/%23/">#</a> requested:flags.0?true subscription_expired:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> link:flags.1?<a href="/type/string/">string</a> q:flags.2?<a href="/type/string/">string</a> offset_date:<a href="/type/int/">int</a> offset_user:<a href="/type/InputUser/">InputUser</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ChatInviteImporters/" class="current_page_link">messages.ChatInviteImporters</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chatInviteImporters/">messages.chatInviteImporters</a></td><td>Info about the users that joined the chat using a specific chat invite</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getChatInviteImporters/">messages.getChatInviteImporters</a></td><td>Get info about the users that joined the chat using a specific chat invite</td></tr></tbody></table>
