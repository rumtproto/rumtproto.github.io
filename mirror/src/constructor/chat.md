---
title: "chat"
original: "https://core.telegram.org/constructor/chat"
section: ref
description: "When updating the local peer database, all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chat","url":"/constructor/chat/"}]
layout: layout.njk
---

# chat

Info about a group.

When updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](/api/peers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chat/" class="current_page_link">chat</a>#41cbf256 flags:<a href="/type/%23/">#</a> creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> photo:<a href="/type/ChatPhoto/">ChatPhoto</a> participants_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> migrated_to:flags.6?<a href="/type/InputChannel/">InputChannel</a> admin_rights:flags.14?<a href="/type/ChatAdminRights/">ChatAdminRights</a> default_banned_rights:flags.18?<a href="/type/ChatBannedRights/">ChatBannedRights</a> = <a href="/type/Chat/">Chat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the current user is the creator of the group</td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the current user has left the group</td></tr><tr><td><strong>deactivated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the group was <a href="/api/channel/">migrated</a></td></tr><tr><td><strong>call_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/constructor/true/">true</a></td><td>Whether a group call is currently active</td></tr><tr><td><strong>call_not_empty</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/constructor/true/">true</a></td><td>Whether there's anyone in the group call</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/constructor/true/">true</a></td><td>Whether this group is <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">protected</a>, thus does not allow forwarding messages from it</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the group, see <a href="/api/peers/#peer-id">here »</a> for more info and the available ID range.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/ChatPhoto/">ChatPhoto</a></td><td>Chat photo</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Participant count</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of creation of the group</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Used in basic groups to reorder updates and make sure that all of them were received.</td></tr><tr><td><strong>migrated_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/InputChannel/">InputChannel</a></td><td>Means this chat was <a href="/api/channel/">upgraded</a> to a supergroup</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td><a href="/api/rights/">Admin rights</a> of the user in the group</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td><a href="/api/rights/">Default banned rights</a> of all users in the group</td></tr></tbody></table>

### Type

[Chat](/type/Chat/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
