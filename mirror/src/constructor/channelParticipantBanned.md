---
title: "channelParticipantBanned"
original: "https://core.telegram.org/constructor/channelParticipantBanned"
section: ref
description: "How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelParticipantBanned","url":"/constructor/channelParticipantBanned/"}]
layout: layout.njk
---

# channelParticipantBanned

Banned/kicked user

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantBanned/" class="current_page_link">channelParticipantBanned</a>#d5f0ad91 flags:<a href="/type/%23/">#</a> left:flags.0?true peer:<a href="/type/Peer/">Peer</a> kicked_by:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> banned_rights:<a href="/type/ChatBannedRights/">ChatBannedRights</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/">ChannelParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the user has left the group</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The banned peer</td></tr><tr><td><strong>kicked_by</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User was kicked by the specified admin</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the user join the group</td></tr><tr><td><strong>banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>Banned <a href="/api/rights/">rights</a></td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The participant's <a href="/api/rank/">tag »</a>.</td></tr></tbody></table>

### Type

[ChannelParticipant](/type/ChannelParticipant/)

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
