---
title: "chatFull"
original: "https://core.telegram.org/constructor/chatFull"
section: ref
description: "Full info about a basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatFull","url":"/constructor/chatFull/"}]
layout: layout.njk
---

# chatFull

Full info about a [basic group](/api/channel/#basic-groups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatFull/" class="current_page_link">chatFull</a>#2633421b flags:<a href="/type/%23/">#</a> can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:<a href="/type/long/">long</a> about:<a href="/type/string/">string</a> participants:<a href="/type/ChatParticipants/">ChatParticipants</a> chat_photo:flags.2?<a href="/type/Photo/">Photo</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> exported_invite:flags.13?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> bot_info:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInfo/">BotInfo</a>&gt; pinned_msg_id:flags.6?<a href="/type/int/">int</a> folder_id:flags.11?<a href="/type/int/">int</a> call:flags.12?<a href="/type/InputGroupCall/">InputGroupCall</a> ttl_period:flags.14?<a href="/type/int/">int</a> groupcall_default_join_as:flags.15?<a href="/type/Peer/">Peer</a> theme_emoticon:flags.16?<a href="/type/string/">string</a> requests_pending:flags.17?<a href="/type/int/">int</a> recent_requesters:flags.17?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; available_reactions:flags.18?<a href="/type/ChatReactions/">ChatReactions</a> reactions_limit:flags.20?<a href="/type/int/">int</a> = <a href="/type/ChatFull/">ChatFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_set_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Can we change the username of this chat</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether <a href="/api/scheduled-messages/">scheduled messages</a> are available</td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>Whether the <a href="/api/translation/">real-time chat translation popup</a> should be hidden.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the chat</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>About string for this chat</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/ChatParticipants/">ChatParticipants</a></td><td>Participant list</td></tr><tr><td><strong>chat_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Photo/">Photo</a></td><td>Chat photo</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>Notification settings</td></tr><tr><td><strong>exported_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>Chat invite</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInfo/">BotInfo</a>&gt;</td><td>Info about bots that are in this chat</td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Message ID of the last <a href="/api/pin/">pinned message</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Active or scheduled <a href="/api/group-calls/#video-chats-livestreams">video chat »</a> associated with this basic group</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/int/">int</a></td><td>Time-To-Live of messages sent by the current user to this chat</td></tr><tr><td><strong>groupcall_default_join_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/Peer/">Peer</a></td><td>Explicitly saved default peer used to join this group's <a href="/api/group-calls/#video-chats-livestreams">video chat »</a>; if absent, the current user is used</td></tr><tr><td><strong>theme_emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/string/">string</a></td><td>Emoji representing a specific chat theme</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/int/">int</a></td><td>Pending <a href="/api/invites/#join-requests">join requests »</a></td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>IDs of users who requested to join recently</td></tr><tr><td><strong>available_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/ChatReactions/">ChatReactions</a></td><td>Allowed <a href="/api/reactions/">message reactions »</a></td></tr><tr><td><strong>reactions_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/type/int/">int</a></td><td>This flag may be used to impose a custom limit of unique reactions (i.e. a customizable version of <a href="/api/config/#reactions-uniq-max">appConfig.reactions_uniq_max</a>).</td></tr></tbody></table>

### Type

[ChatFull](/type/ChatFull/)

### Related pages

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages

#### [Message translation](/api/translation/)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Pinned messages](/api/pin/)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
