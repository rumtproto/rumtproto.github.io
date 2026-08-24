---
title: "chatParticipant"
original: "https://core.telegram.org/constructor/chatParticipant"
section: ref
description: "Basic group member (not usable by supergroups)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatParticipant","url":"/constructor/chatParticipant/"}]
layout: layout.njk
---

# chatParticipant

[Basic group](/api/channel/#basic-groups) member (not usable by supergroups).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatParticipant/" class="current_page_link">chatParticipant</a>#38e79fde flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChatParticipant/">ChatParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Member user ID</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user that added the member to the group</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date added to the group</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>The participant's <a href="/api/rank/">tag »</a>.</td></tr></tbody></table>

### Type

[ChatParticipant](/type/ChatParticipant/)

### Related pages

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
