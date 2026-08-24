---
title: "chatAdminRights"
original: "https://core.telegram.org/constructor/chatAdminRights"
section: ref
description: "Represents the rights of an admin in a channel/supergroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatAdminRights","url":"/constructor/chatAdminRights/"}]
layout: layout.njk
---

# chatAdminRights

Represents the rights of an admin in a [channel/supergroup](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatAdminRights/" class="current_page_link">chatAdminRights</a>#5fb224d5 flags:<a href="/type/%23/">#</a> change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = <a href="/type/ChatAdminRights/">ChatAdminRights</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>change_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to modify the description of the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>post_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to post messages in the <a href="/api/channel/">channel</a></td></tr><tr><td><strong>edit_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to also edit messages from other admins in the <a href="/api/channel/">channel</a></td></tr><tr><td><strong>delete_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to also delete messages from other admins in the <a href="/api/channel/">channel</a></td></tr><tr><td><strong>ban_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to ban users from the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>invite_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to invite users in the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>pin_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to pin messages in the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>add_admins</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to add other admins with the same (or more limited) permissions in the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>anonymous</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Whether this admin is anonymous</td></tr><tr><td><strong>manage_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to create and administer <a href="/api/group-calls/#video-chats-livestreams">video chats/livestreams »</a></td></tr><tr><td><strong>other</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>Set this flag if none of the other flags are set, but you still want the user to be an admin: if this or any of the other flags are set, the admin can get the chat <a href="/api/recent-actions/">admin log</a>, get <a href="/api/stats/">chat statistics</a>, get <a href="/api/stats/">message statistics in channels</a>, get channel members, see anonymous administrators in supergroups and ignore slow mode.</td></tr><tr><td><strong>manage_topics</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to create, delete or modify <a href="/api/forum/#forum-topics">forum topics »</a>.</td></tr><tr><td><strong>post_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to post <a href="/api/stories/">stories</a> as the <a href="/api/channel/">channel</a>.</td></tr><tr><td><strong>edit_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to edit <a href="/api/stories/">stories</a> posted by the other admins of the <a href="/api/channel/">channel</a>.</td></tr><tr><td><strong>delete_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to delete <a href="/api/stories/">stories</a> posted by the other admins of the <a href="/api/channel/">channel</a>.</td></tr><tr><td><strong>manage_direct_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to manage the <a href="/api/monoforum/">direct messages monoforum »</a> and <a href="/api/suggested-posts/">decline suggested posts »</a>.</td></tr><tr><td><strong>manage_ranks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/constructor/true/">true</a></td><td>If set, allows the admin to modify the <a href="/api/rank/">member tag »</a> of any user.</td></tr></tbody></table>

### Type

[ChatAdminRights](/type/ChatAdminRights/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Admin log](/api/recent-actions/)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
