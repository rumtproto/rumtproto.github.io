---
title: "channelParticipantAdmin"
original: "https://core.telegram.org/constructor/channelParticipantAdmin"
section: ref
description: "How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelParticipantAdmin","url":"/constructor/channelParticipantAdmin/"}]
layout: layout.njk
---

# channelParticipantAdmin

Admin

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantAdmin/" class="current_page_link">channelParticipantAdmin</a>#34c3bb53 flags:<a href="/type/%23/">#</a> can_edit:flags.0?true self:flags.1?true user_id:<a href="/type/long/">long</a> inviter_id:flags.1?<a href="/type/long/">long</a> promoted_by:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_rights:<a href="/type/ChatAdminRights/">ChatAdminRights</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/">ChannelParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_edit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Can this admin promote other admins with the same permissions?</td></tr><tr><td><strong>self</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Is this the current user</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Admin user ID</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>User that invited the admin to the channel/group</td></tr><tr><td><strong>promoted_by</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that promoted the user to admin</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the user join</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>Admin <a href="/api/rights/">rights</a></td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The participant's <a href="/api/rank/">tag »</a>, defaults to "Admin" if not set.</td></tr></tbody></table>

### Type

[ChannelParticipant](/type/ChannelParticipant/)

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
