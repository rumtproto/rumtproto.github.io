---
title: "channelFull"
original: "https://core.telegram.org/constructor/channelFull"
section: ref
description: "Full info about a channel, supergroup or gigagroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelFull","url":"/constructor/channelFull/"}]
layout: layout.njk
---

# channelFull

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelFull/" class="current_page_link">channelFull</a>#e4e0b29d flags:<a href="/type/%23/">#</a> can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:<a href="/type/%23/">#</a> can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:<a href="/type/long/">long</a> about:<a href="/type/string/">string</a> participants_count:flags.0?<a href="/type/int/">int</a> admins_count:flags.1?<a href="/type/int/">int</a> kicked_count:flags.2?<a href="/type/int/">int</a> banned_count:flags.2?<a href="/type/int/">int</a> online_count:flags.13?<a href="/type/int/">int</a> read_inbox_max_id:<a href="/type/int/">int</a> read_outbox_max_id:<a href="/type/int/">int</a> unread_count:<a href="/type/int/">int</a> chat_photo:<a href="/type/Photo/">Photo</a> notify_settings:<a href="/type/PeerNotifySettings/">PeerNotifySettings</a> exported_invite:flags.23?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> bot_info:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInfo/">BotInfo</a>&gt; migrated_from_chat_id:flags.4?<a href="/type/long/">long</a> migrated_from_max_id:flags.4?<a href="/type/int/">int</a> pinned_msg_id:flags.5?<a href="/type/int/">int</a> stickerset:flags.8?<a href="/type/StickerSet/">StickerSet</a> available_min_id:flags.9?<a href="/type/int/">int</a> folder_id:flags.11?<a href="/type/int/">int</a> linked_chat_id:flags.14?<a href="/type/long/">long</a> location:flags.15?<a href="/type/ChannelLocation/">ChannelLocation</a> slowmode_seconds:flags.17?<a href="/type/int/">int</a> slowmode_next_send_date:flags.18?<a href="/type/int/">int</a> stats_dc:flags.12?<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> call:flags.21?<a href="/type/InputGroupCall/">InputGroupCall</a> ttl_period:flags.24?<a href="/type/int/">int</a> pending_suggestions:flags.25?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; groupcall_default_join_as:flags.26?<a href="/type/Peer/">Peer</a> theme_emoticon:flags.27?<a href="/type/string/">string</a> requests_pending:flags.28?<a href="/type/int/">int</a> recent_requesters:flags.28?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; default_send_as:flags.29?<a href="/type/Peer/">Peer</a> available_reactions:flags.30?<a href="/type/ChatReactions/">ChatReactions</a> reactions_limit:flags2.13?<a href="/type/int/">int</a> stories:flags2.4?<a href="/type/PeerStories/">PeerStories</a> wallpaper:flags2.7?<a href="/type/WallPaper/">WallPaper</a> boosts_applied:flags2.8?<a href="/type/int/">int</a> boosts_unrestrict:flags2.9?<a href="/type/int/">int</a> emojiset:flags2.10?<a href="/type/StickerSet/">StickerSet</a> bot_verification:flags2.17?<a href="/type/BotVerification/">BotVerification</a> stargifts_count:flags2.18?<a href="/type/int/">int</a> send_paid_messages_stars:flags2.21?<a href="/type/long/">long</a> main_tab:flags2.22?<a href="/type/ProfileTab/">ProfileTab</a> = <a href="/type/ChatFull/">ChatFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_view_participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Can we view the participant list?</td></tr><tr><td><strong>can_set_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Can we set the channel's username?</td></tr><tr><td><strong>can_set_stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Can we <a href="/method/channels.setStickers/">associate</a> a stickerpack to the supergroup?</td></tr><tr><td><strong>hidden_prehistory</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Is the history before we joined hidden to us?</td></tr><tr><td><strong>can_set_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>Can we set the geolocation of this group (for geogroups)</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>Whether scheduled messages are available</td></tr><tr><td><strong>can_view_stats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/constructor/true/">true</a></td><td>Can the user view <a href="/api/stats/">channel/supergroup statistics</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.22?<a href="/constructor/true/">true</a></td><td>Whether any anonymous admin of this supergroup was blocked: if set, you won't receive messages from <a href="/api/rights/#anonymous-admins">anonymous group admins »</a> in <a href="/api/discussion/">discussion replies via @replies</a></td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_delete_channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.0?<a href="/constructor/true/">true</a></td><td>Can we delete this channel?</td></tr><tr><td><strong>antispam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.1?<a href="/constructor/true/">true</a></td><td>Whether <a href="/api/antispam/">native antispam</a> functionality is enabled in this supergroup.</td></tr><tr><td><strong>participants_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the participant list is hidden.</td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the <a href="/api/translation/">real-time chat translation popup</a> should be hidden.</td></tr><tr><td><strong>stories_pinned_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this user has some <a href="/api/stories/#pinned-or-archived-stories">pinned stories</a>.</td></tr><tr><td><strong>view_forum_as_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.6?<a href="/constructor/true/">true</a></td><td>Users may also choose to display messages from all topics of a <a href="/api/forum/">forum</a> as if they were sent to a normal group, using a "View as messages" setting in the local client.<br>This setting only affects the current account, and is synced to other logged in sessions using the <a href="/method/channels.toggleViewForumAsMessages/">channels.toggleViewForumAsMessages</a> method; invoking this method will update the value of this flag.</td></tr><tr><td><strong>restricted_sponsored</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.11?<a href="/constructor/true/">true</a></td><td>Whether ads on this channel were <a href="/api/boost/#disable-ads-on-the-channel">disabled as specified here »</a> (this flag is only visible to the owner of the channel).</td></tr><tr><td><strong>can_view_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.12?<a href="/constructor/true/">true</a></td><td>If set, this user can view <a href="/api/revenue/#revenue-statistics">ad revenue statistics »</a> for this channel.</td></tr><tr><td><strong>paid_media_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.14?<a href="/constructor/true/">true</a></td><td>Whether the current user can send or forward <a href="/api/paid-media/">paid media »</a> to this channel.</td></tr><tr><td><strong>can_view_stars_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.15?<a href="/constructor/true/">true</a></td><td>If set, this user can view <a href="/api/stars/#revenue-statistics">Telegram Star revenue statistics »</a> for this channel.</td></tr><tr><td><strong>paid_reactions_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.16?<a href="/constructor/true/">true</a></td><td>If set, users may send <a href="/api/reactions/#paid-reactions">paid Telegram Star reactions »</a> to messages of this channel.</td></tr><tr><td><strong>stargifts_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.19?<a href="/constructor/true/">true</a></td><td>If set, users may send <a href="/api/gifts/">Gifts »</a> to this channel.</td></tr><tr><td><strong>paid_messages_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.20?<a href="/constructor/true/">true</a></td><td>If set, admins may <a href="/api/paid-messages/">enable enable paid messages »</a> in this supergroup.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the channel</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Info about the channel</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Number of participants of the channel</td></tr><tr><td><strong>admins_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Number of channel admins</td></tr><tr><td><strong>kicked_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Number of users <a href="/api/rights/">kicked</a> from the channel</td></tr><tr><td><strong>banned_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Number of users <a href="/api/rights/">banned</a> from the channel</td></tr><tr><td><strong>online_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/int/">int</a></td><td>Number of users currently online</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all incoming messages are read.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Count of unread messages</td></tr><tr><td><strong>chat_photo</strong></td><td style="text-align: center;"><a href="/type/Photo/">Photo</a></td><td>Channel picture</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings/">PeerNotifySettings</a></td><td>Notification settings</td></tr><tr><td><strong>exported_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>Invite link</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInfo/">BotInfo</a>&gt;</td><td>Info about bots in the channel/supergroup</td></tr><tr><td><strong>migrated_from_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>The chat ID from which this group was <a href="/api/channel/">migrated</a></td></tr><tr><td><strong>migrated_from_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>The message ID in the original chat at which this group was <a href="/api/channel/">migrated</a></td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Message ID of the last <a href="/api/pin/">pinned message</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/StickerSet/">StickerSet</a></td><td>Associated stickerset</td></tr><tr><td><strong>available_min_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/int/">int</a></td><td>Identifier of a maximum unavailable message in a channel due to hidden history.</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>linked_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/long/">long</a></td><td>ID of the linked <a href="/api/discussion/">discussion chat</a> for channels (and vice versa, the ID of the linked channel for discussion chats).</td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/ChannelLocation/">ChannelLocation</a></td><td>Location of the geogroup</td></tr><tr><td><strong>slowmode_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/int/">int</a></td><td>If specified, users in supergroups will only be able to send one message every <code>slowmode_seconds</code> seconds</td></tr><tr><td><strong>slowmode_next_send_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/int/">int</a></td><td>Indicates when the user will be allowed to send another message in the supergroup (unixtime)</td></tr><tr><td><strong>stats_dc</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/int/">int</a></td><td>If set, specifies the DC to use for fetching channel statistics</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Latest <a href="/api/updates/">PTS</a> for this channel</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Active or scheduled <a href="/api/group-calls/#video-chats-livestreams">video chat/livestream »</a> associated with this supergroup/channel</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/type/int/">int</a></td><td>Time-To-Live of messages in this channel or supergroup</td></tr><tr><td><strong>pending_suggestions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>A list of <a href="/api/config/#suggestions">suggested actions</a> for the supergroup admin, <a href="/api/config/#suggestions">see here for more info »</a>.</td></tr><tr><td><strong>groupcall_default_join_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/type/Peer/">Peer</a></td><td>Explicitly saved default peer used to join this supergroup/channel's <a href="/api/group-calls/#video-chats-livestreams">video chat/livestream »</a>; if absent, the current user is used</td></tr><tr><td><strong>theme_emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/type/string/">string</a></td><td>Emoji representing a specific chat theme</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/type/int/">int</a></td><td>Pending <a href="/api/invites/#join-requests">join requests »</a></td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>IDs of users who requested to join recently</td></tr><tr><td><strong>default_send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.29?<a href="/type/Peer/">Peer</a></td><td>Default peer used for sending messages to this channel</td></tr><tr><td><strong>available_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.30?<a href="/type/ChatReactions/">ChatReactions</a></td><td>Allowed <a href="/api/reactions/">message reactions »</a></td></tr><tr><td><strong>reactions_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.13?<a href="/type/int/">int</a></td><td>This flag may be used to impose a custom limit of unique reactions (i.e. a customizable version of <a href="/api/config/#reactions-uniq-max">appConfig.reactions_uniq_max</a>).</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.4?<a href="/type/PeerStories/">PeerStories</a></td><td>Channel <a href="/api/stories/">stories</a></td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.7?<a href="/type/WallPaper/">WallPaper</a></td><td><a href="/api/wallpapers/">Wallpaper</a></td></tr><tr><td><strong>boosts_applied</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.8?<a href="/type/int/">int</a></td><td>The number of <a href="/api/boost/">boosts</a> the current user has applied to the current <em>supergroup</em>.</td></tr><tr><td><strong>boosts_unrestrict</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.9?<a href="/type/int/">int</a></td><td>The number of <a href="/api/boost/">boosts</a> this <em>supergroup</em> requires to bypass slowmode and other restrictions, see <a href="/api/boost/#bypass-slowmode-and-chat-restrictions">here »</a> for more info.</td></tr><tr><td><strong>emojiset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.10?<a href="/type/StickerSet/">StickerSet</a></td><td><a href="/api/custom-emoji/">Custom emoji stickerset</a> associated to the current <em>supergroup</em>, set using <a href="/method/channels.setEmojiStickers/">channels.setEmojiStickers</a> after reaching the appropriate boost level, see <a href="/api/boost/#setting-a-custom-emoji-stickerset-for-supergroups">here »</a> for more info.</td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.17?<a href="/type/BotVerification/">BotVerification</a></td><td><a href="/api/bots/verification/">Bot verification icon</a></td></tr><tr><td><strong>stargifts_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.18?<a href="/type/int/">int</a></td><td>Admins with <a href="/constructor/chatAdminRights/">chatAdminRights</a>.<code>post_messages</code> rights will see the total number of received gifts, everyone else will see the number of gifts added to the channel's profile.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.21?<a href="/type/long/">long</a></td><td>If set and bigger than 0, this supergroup, <a href="/api/monoforum/">monoforum</a> or the monoforum associated to this channel has enabled <a href="/api/paid-messages/">paid messages »</a> and we <em>must</em> pay the specified amount of <a href="/api/stars/">Stars</a> to send messages to it, see <a href="/api/paid-messages/">here »</a> for the full flow.<br>This flag will be set both for the monoforum and for <a href="/constructor/channelFull/">channelFull</a> of the associated channel).<br>If set and equal to 0, the monoforum requires payment in general but we were exempted from paying.</td></tr><tr><td><strong>main_tab</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.22?<a href="/type/ProfileTab/">ProfileTab</a></td><td>The main tab for the channel's profile, see <a href="/api/profile/#tabs">here »</a> for more info.</td></tr></tbody></table>

### Type

[ChatFull](/type/ChatFull/)

### Related pages

#### [channels.setStickers](/method/channels.setStickers/)

Associate a stickerset to the supergroup

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Native antispam system](/api/antispam/)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.

#### [Message translation](/api/translation/)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](/api/forum/) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Channel and bot ad revenue](/api/revenue/)

Telegram has one of the most generous reward systems in the history of social media. Telegram channel and bot owners can now receive 50% of the revenue from ads displayed in their channels and bots. This page describes the methods used to withdraw channel/bot ad revenue, as well as view detailed revenue stats.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Pinned messages](/api/pin/)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [channels.setEmojiStickers](/method/channels.setEmojiStickers/)

Set a [custom emoji stickerset](/api/custom-emoji/) for supergroups. Only usable after reaching at least the [boost level »](/api/boost/) specified in the [`group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min) config parameter.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](/api/channel/).

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
