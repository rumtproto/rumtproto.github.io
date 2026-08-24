---
title: "updateChatParticipantRank"
original: "https://core.telegram.org/constructor/updateChatParticipantRank"
section: ref
description: "The tag » of a participant of a basic group » has changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatParticipantRank","url":"/constructor/updateChatParticipantRank/"}]
layout: layout.njk
---

# updateChatParticipantRank

The [tag »](/api/rank/) of a participant of a [basic group »](/api/channel/#basic-groups) has changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatParticipantRank/" class="current_page_link">updateChatParticipantRank</a>#bd8367b9 chat_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> rank:<a href="/type/string/">string</a> version:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Basic group ID.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID.</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The new tag.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Used similarly to <code>pts</code> values to deduplicate/update outdated chat information as specified <a href="/api/peers/#basic-group-updates">here »</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
