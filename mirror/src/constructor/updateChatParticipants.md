---
title: "updateChatParticipants"
original: "https://core.telegram.org/constructor/updateChatParticipants"
section: ref
description: "The participants of a basic group » changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatParticipants","url":"/constructor/updateChatParticipants/"}]
layout: layout.njk
---

# updateChatParticipants

The participants of a [basic group »](/api/channel/#basic-groups) changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatParticipants/" class="current_page_link">updateChatParticipants</a>#7761198 participants:<a href="/type/ChatParticipants/">ChatParticipants</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/ChatParticipants/">ChatParticipants</a></td><td>Updated chat participants (also contains the <code>version</code> used to deduplicate/update outdated chat information as specified <a href="/api/peers/#basic-group-updates">here »</a>).</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
