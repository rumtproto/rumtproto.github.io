---
title: "channelParticipantCreator"
original: "https://core.telegram.org/constructor/channelParticipantCreator"
section: ref
description: "Channel/supergroup creator"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelParticipantCreator","url":"/constructor/channelParticipantCreator/"}]
layout: layout.njk
---

# channelParticipantCreator

Channel/supergroup creator

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantCreator/" class="current_page_link">channelParticipantCreator</a>#2fe601d3 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> admin_rights:<a href="/type/ChatAdminRights/">ChatAdminRights</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/">ChannelParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>Creator admin rights</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>The participant's <a href="/api/rank/">tag »</a>, defaults to "Owner" if not set.</td></tr></tbody></table>

### Type

[ChannelParticipant](/type/ChannelParticipant/)

### Related pages

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
