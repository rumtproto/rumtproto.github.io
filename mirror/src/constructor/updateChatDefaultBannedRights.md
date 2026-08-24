---
title: "updateChatDefaultBannedRights"
original: "https://core.telegram.org/constructor/updateChatDefaultBannedRights"
section: ref
description: "Default banned rights in a basic group were updated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatDefaultBannedRights","url":"/constructor/updateChatDefaultBannedRights/"}]
layout: layout.njk
---

# updateChatDefaultBannedRights

Default banned rights in a [basic group](/api/channel/#basic-groups) were updated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatDefaultBannedRights/" class="current_page_link">updateChatDefaultBannedRights</a>#54c01850 peer:<a href="/type/Peer/">Peer</a> default_banned_rights:<a href="/type/ChatBannedRights/">ChatBannedRights</a> version:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The chat</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>New default banned rights</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Used similarly to <code>pts</code> values to deduplicate/update outdated chat information as specified <a href="/api/peers/#basic-group-updates">here »</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
