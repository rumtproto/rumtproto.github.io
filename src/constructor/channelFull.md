---
title: "channelFull (конструктор)"
original: "https://core.telegram.org/constructor/channelFull"
section: ref
kind: constructor
layout: layout.njk
---

# channelFull

*Конструктор из схемы TL.*

> Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).
> When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

## Определение TL

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_view_participants | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Can we view the participant list? |
| can_set_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Can we set the channel's username? |
| can_set_stickers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Can we [associate](/method/channels.setStickers/) a stickerpack to the supergroup? |
| hidden_prehistory | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Is the history before we joined hidden to us? |
| can_set_location | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | Can we set the geolocation of this group (for geogroups) |
| has_scheduled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Whether scheduled messages are available |
| can_view_stats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[true](/constructor/true/) | Can the user view [channel/supergroup statistics](https://core.telegram.org/api/stats) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[true](/constructor/true/) | Whether any anonymous admin of this supergroup was blocked: if set, you won't receive messages from [anonymous group admins »](https://core.telegram.org/api/rights#anonymous-admins) in [discussion replies via @replies](https://core.telegram.org/api/discussion) |
| flags2 | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_delete_channel | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Can we delete this channel? |
| antispam | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether [native antispam](https://core.telegram.org/api/antispam) functionality is enabled in this supergroup. |
| participants_hidden | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the participant list is hidden. |
| translations_disabled | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the [real-time chat translation popup](https://core.telegram.org/api/translation) should be hidden. |
| stories_pinned_available | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this user has some [pinned stories](https://core.telegram.org/api/stories#pinned-or-archived-stories). |
| view_forum_as_messages | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client. This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of this flag. |
| restricted_sponsored | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether ads on this channel were [disabled as specified here »](https://core.telegram.org/api/boost#disable-ads-on-the-channel) (this flag is only visible to the owner of the channel). |
| can_view_revenue | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | If set, this user can view [ad revenue statistics »](https://core.telegram.org/api/revenue#revenue-statistics) for this channel. |
| paid_media_allowed | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Whether the current user can send or forward [paid media »](https://core.telegram.org/api/paid-media) to this channel. |
| can_view_stars_revenue | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | If set, this user can view [Telegram Star revenue statistics »](https://core.telegram.org/api/stars#revenue-statistics) for this channel. |
| paid_reactions_available | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If set, users may send [paid Telegram Star reactions »](https://core.telegram.org/api/reactions#paid-reactions) to messages of this channel. |
| stargifts_available | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | If set, users may send [Gifts »](https://core.telegram.org/api/gifts) to this channel. |
| paid_messages_available | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[true](/constructor/true/) | If set, admins may [enable enable paid messages »](https://core.telegram.org/api/paid-messages) in this supergroup. |
| id | [long](/type/long/) | ID of the channel |
| about | [string](/type/string/) | Info about the channel |
| participants_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Number of participants of the channel |
| admins_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Number of channel admins |
| kicked_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Number of users [kicked](https://core.telegram.org/api/rights) from the channel |
| banned_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Number of users [banned](https://core.telegram.org/api/rights) from the channel |
| online_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[int](/type/int/) | Number of users currently online |
| read_inbox_max_id | [int](/type/int/) | Position up to which all incoming messages are read. |
| read_outbox_max_id | [int](/type/int/) | Position up to which all outgoing messages are read. |
| unread_count | [int](/type/int/) | Count of unread messages |
| chat_photo | [Photo](/type/Photo/) | Channel picture |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings |
| exported_invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[ExportedChatInvite](/type/ExportedChatInvite/) | Invite link |
| bot_info | [Vector](https://core.telegram.org/type/Vector%20t)<[BotInfo](/type/BotInfo/)> | Info about bots in the channel/supergroup |
| migrated_from_chat_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | The chat ID from which this group was [migrated](https://core.telegram.org/api/channel) |
| migrated_from_max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | The message ID in the original chat at which this group was [migrated](https://core.telegram.org/api/channel) |
| pinned_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Message ID of the last [pinned message](https://core.telegram.org/api/pin) |
| stickerset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[StickerSet](/type/StickerSet/) | Associated stickerset |
| available_min_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | Identifier of a maximum unavailable message in a channel due to hidden history. |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| linked_chat_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[long](/type/long/) | ID of the linked [discussion chat](https://core.telegram.org/api/discussion) for channels (and vice versa, the ID of the linked channel for discussion chats). |
| location | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[ChannelLocation](/type/ChannelLocation/) | Location of the geogroup |
| slowmode_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[int](/type/int/) | If specified, users in supergroups will only be able to send one message every slowmode_seconds seconds |
| slowmode_next_send_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[int](/type/int/) | Indicates when the user will be allowed to send another message in the supergroup (unixtime) |
| stats_dc | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[int](/type/int/) | If set, specifies the DC to use for fetching channel statistics |
| pts | [int](/type/int/) | Latest [PTS](/api/updates/) for this channel |
| call | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[InputGroupCall](/type/InputGroupCall/) | Active or scheduled [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams) associated with this supergroup/channel |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[int](/type/int/) | Time-To-Live of messages in this channel or supergroup |
| pending_suggestions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | A list of [suggested actions](https://core.telegram.org/api/config#suggestions) for the supergroup admin, [see here for more info »](https://core.telegram.org/api/config#suggestions). |
| groupcall_default_join_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[Peer](/type/Peer/) | Explicitly saved default peer used to join this supergroup/channel's [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams); if absent, the current user is used |
| theme_emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[string](/type/string/) | Emoji representing a specific chat theme |
| requests_pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[int](/type/int/) | Pending [join requests »](https://core.telegram.org/api/invites#join-requests) |
| recent_requesters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | IDs of users who requested to join recently |
| default_send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).29?[Peer](/type/Peer/) | Default peer used for sending messages to this channel |
| available_reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).30?[ChatReactions](/type/ChatReactions/) | Allowed [message reactions »](https://core.telegram.org/api/reactions) |
| reactions_limit | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[int](/type/int/) | This flag may be used to impose a custom limit of unique reactions (i.e. a customizable version of [appConfig.reactions_uniq_max](https://core.telegram.org/api/config#reactions-uniq-max)). |
| stories | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[PeerStories](/type/PeerStories/) | Channel [stories](https://core.telegram.org/api/stories) |
| wallpaper | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[WallPaper](/type/WallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) |
| boosts_applied | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[int](/type/int/) | The number of [boosts](https://core.telegram.org/api/boost) the current user has applied to the current supergroup. |
| boosts_unrestrict | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | The number of [boosts](https://core.telegram.org/api/boost) this supergroup requires to bypass slowmode and other restrictions, see [here »](https://core.telegram.org/api/boost#bypass-slowmode-and-chat-restrictions) for more info. |
| emojiset | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[StickerSet](/type/StickerSet/) | [Custom emoji stickerset](https://core.telegram.org/api/custom-emoji) associated to the current supergroup, set using [channels.setEmojiStickers](/method/channels.setEmojiStickers/) after reaching the appropriate boost level, see [here »](https://core.telegram.org/api/boost#setting-a-custom-emoji-stickerset-for-supergroups) for more info. |
| bot_verification | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[BotVerification](/type/BotVerification/) | [Bot verification icon](https://core.telegram.org/api/bots/verification) |
| stargifts_count | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[int](/type/int/) | Admins with [chatAdminRights](/constructor/chatAdminRights/).post_messages rights will see the total number of received gifts, everyone else will see the number of gifts added to the channel's profile. |
| send_paid_messages_stars | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[long](/type/long/) | If set and bigger than 0, this supergroup, [monoforum](https://core.telegram.org/api/monoforum) or the monoforum associated to this channel has enabled [paid messages »](https://core.telegram.org/api/paid-messages) and we must pay the specified amount of [Stars](https://core.telegram.org/api/stars) to send messages to it, see [here »](https://core.telegram.org/api/paid-messages) for the full flow. This flag will be set both for the monoforum and for [channelFull](/constructor/channelFull/) of the associated channel). If set and equal to 0, the monoforum requires payment in general but we were exempted from paying. |
| main_tab | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[ProfileTab](/type/ProfileTab/) | The main tab for the channel's profile, see [here »](https://core.telegram.org/api/profile#tabs) for more info. |

## Тип

[ChatFull](/type/ChatFull/)

## Related pages

#### [channels.setStickers](/method/channels.setStickers/)

Associate a stickerset to the supergroup

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Native antispam system](https://core.telegram.org/api/antispam)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.

#### [Message translation](https://core.telegram.org/api/translation)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Channel and bot ad revenue](https://core.telegram.org/api/revenue)

Telegram has one of the most generous reward systems in the history of social media. Telegram channel and bot owners can now receive 50% of the revenue from ads displayed in their channels and bots. This page describes the methods used to withdraw channel/bot ad revenue, as well as view detailed revenue stats.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [channels.setEmojiStickers](/method/channels.setEmojiStickers/)

Set a [custom emoji stickerset](https://core.telegram.org/api/custom-emoji) for supergroups. Only usable after reaching at least the [boost level »](https://core.telegram.org/api/boost) specified in the [`group_emoji_stickers_level_min` »](https://core.telegram.org/api/config#group-emoji-stickers-level-min) config parameter.

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel).

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
