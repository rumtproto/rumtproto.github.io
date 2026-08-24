---
title: "updateChatParticipantAdd"
original: "https://core.telegram.org/constructor/updateChatParticipantAdd"
section: ref
description: "Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatParticipantAdd","url":"/constructor/updateChatParticipantAdd/"}]
layout: layout.njk
---

# updateChatParticipantAdd

New group member.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatParticipantAdd/" class="current_page_link">updateChatParticipantAdd</a>#3dda5451 chat_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the new member</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user, who added member to the group</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the participant added</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Used similarly to <code>pts</code> values to deduplicate/update outdated chat information as specified <a href="/api/peers/#basic-group-updates">here »</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
