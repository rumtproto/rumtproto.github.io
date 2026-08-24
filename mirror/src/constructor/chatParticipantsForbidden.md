---
title: "chatParticipantsForbidden"
original: "https://core.telegram.org/constructor/chatParticipantsForbidden"
section: ref
description: "The full list of members of basic groups » is not available to you, because you were banned."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatParticipantsForbidden","url":"/constructor/chatParticipantsForbidden/"}]
layout: layout.njk
---

# chatParticipantsForbidden

The full list of members of [basic groups »](/api/channel/#basic-groups) is not available to you, because you were banned.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatParticipantsForbidden/" class="current_page_link">chatParticipantsForbidden</a>#8763d3e1 flags:<a href="/type/%23/">#</a> chat_id:<a href="/type/long/">long</a> self_participant:flags.0?<a href="/type/ChatParticipant/">ChatParticipant</a> = <a href="/type/ChatParticipants/">ChatParticipants</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group ID</td></tr><tr><td><strong>self_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ChatParticipant/">ChatParticipant</a></td><td>Info about the group membership of the current user</td></tr></tbody></table>

### Type

[ChatParticipants](/type/ChatParticipants/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
