---
title: "updateChatParticipantAdmin"
original: "https://core.telegram.org/constructor/updateChatParticipantAdmin"
section: ref
description: "Admin permissions of a user in a basic group were changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatParticipantAdmin","url":"/constructor/updateChatParticipantAdmin/"}]
layout: layout.njk
---

# updateChatParticipantAdmin

Admin permissions of a user in a [basic group](/api/channel/#basic-groups) were changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatParticipantAdmin/" class="current_page_link">updateChatParticipantAdmin</a>#d7ca61a2 chat_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> is_admin:<a href="/type/Bool/">Bool</a> version:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Chat ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the (de)admined user</td></tr><tr><td><strong>is_admin</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether the user was rendered admin</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Used similarly to <code>pts</code> values to deduplicate/update outdated chat information as specified <a href="/api/peers/#basic-group-updates">here »</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
