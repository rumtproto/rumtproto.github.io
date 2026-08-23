---
title: "channel (конструктор)"
original: "https://core.telegram.org/constructor/channel"
section: ref
kind: constructor
layout: layout.njk
---

# channel

*Конструктор из схемы TL.*

> Channel/supergroup info
> When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
> The only exception to the above rule is when the `min` flag is set, in which case **only** the following fields must be applied over any locally stored version:
> -   `title`
> -   `megagroup`
> -   `color`
> -   `photo`
> -   `username`
> -   `usernames`
> -   `has_geo`
> -   `noforwards`
> -   `emoji_status`
> -   `has_link`
> -   `slow_mode_enabled`
> -   `scam`
> -   `fake`
> -   `gigagroup`
> -   `forum`
> -   `level`
> -   `restricted`
> -   `restriction_reason`
> -   `join_to_send`
> -   `join_request`
> -   `is_verified`
> -   `default_banned_rights`
> -   `signature_profiles`
> -   `autotranslation`
> -   `broadcast_messages_allowed`
> -   `monoforum`
> -   `forum_tabs`
> -   `linked_monoforum_id`
> -   `send_paid_messages_stars`
> -   `bot_verification_icon`
> See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) for an implementation of the logic to use when updating the [local channel peer database](https://core.telegram.org/api/peers).

## Определение TL

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the current user is the creator of this channel |
| left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the current user has left or is not a member of this channel |
| broadcast | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Is this a channel? |
| verified | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Is this channel verified by telegram? |
| megagroup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Is this a supergroup? Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| restricted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether viewing/writing in this channel for a reason (see restriction_reason) |
| signatures | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether signatures are enabled (channels) |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | See [min](https://core.telegram.org/api/min) |
| scam | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | This channel/supergroup is probably a scam Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| has_link | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[true](/constructor/true/) | Whether this channel has a linked [discussion group »](https://core.telegram.org/api/discussion) (or this supergroup is a channel's discussion group). The actual ID of the linked channel/supergroup is contained in [channelFull](/constructor/channelFull/).linked_chat_id. Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| has_geo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[true](/constructor/true/) | Whether this chanel has a geoposition |
| slowmode_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[true](/constructor/true/) | Whether slow mode is enabled for groups to prevent flood in chat. Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| call_active | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[true](/constructor/true/) | Whether a group call or livestream is currently active |
| call_not_empty | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[true](/constructor/true/) | Whether there's anyone in the group call or livestream |
| fake | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[true](/constructor/true/) | If set, this [supergroup/channel](https://core.telegram.org/api/channel) was reported by many users as a fake or scam: be careful when interacting with it. Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| gigagroup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | Whether this [supergroup](https://core.telegram.org/api/channel) is a gigagroup Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[true](/constructor/true/) | Whether this channel or group is [protected](https://telegram.org/blog/content-protection-delete-by-date-and-more), thus does not allow forwarding messages from it |
| join_to_send | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[true](/constructor/true/) | Whether a user needs to join the supergroup before they can send messages: can be false only for [discussion groups »](https://core.telegram.org/api/discussion), toggle using [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/) Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| join_request | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).29?[true](/constructor/true/) | Whether a user's join request will have to be [approved by administrators](https://core.telegram.org/api/invites#join-requests), toggle using [channels.toggleJoinToSend](/method/channels.toggleJoinRequest/) Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| forum | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).30?[true](/constructor/true/) | Whether this supergroup is a [forum](https://core.telegram.org/api/forum). Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| flags2 | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stories_hidden | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we have [hidden all stories posted by this channel »](https://core.telegram.org/api/stories#hiding-stories-of-other-users). |
| stories_hidden_min | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, indicates that the stories_hidden flag was not populated, and its value must cannot be relied on; use the previously cached value, or re-fetch the constructor using [channels.getChannels](/method/channels.getChannels/) to obtain the latest value of the stories_hidden flag. |
| stories_unavailable | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | No stories from the channel are visible. |
| signature_profiles | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | If set, messages sent by admins to this channel will link to the admin's profile (just like with groups). |
| autotranslation | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | If set, [autotranslation](https://core.telegram.org/api/translation#autotranslation-for-channels) was enabled for all users by the admin of the channel, as specified [here »](https://core.telegram.org/api/translation#autotranslation-for-channels). |
| broadcast_messages_allowed | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If set, this channel has an associated [monoforum »](https://core.telegram.org/api/monoforum), and its ID is specified in the linked_monoforum_id flag. |
| monoforum | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | If set, this is a [monoforum »](https://core.telegram.org/api/monoforum), and the ID of the associated channel is specified in the linked_monoforum_id. |
| forum_tabs | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | [If set, enables the tabbed forum UI »](https://core.telegram.org/api/forum#tabbed-or-list-based-forum-ui). |
| id | [long](/type/long/) | ID of the channel, see [here »](https://core.telegram.org/api/peers#peer-id) for more info and the available ID range. |
| access_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[long](/type/long/) | Access hash, see [here »](https://core.telegram.org/api/peers#access-hash) for more info |
| title | [string](/type/string/) | Title |
| username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | Main active username. |
| photo | [ChatPhoto](/type/ChatPhoto/) | Profile photo |
| date | [int](/type/int/) | Date when the user joined the supergroup/channel, or if the user isn't a member, its creation date |
| restriction_reason | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[Vector](https://core.telegram.org/type/Vector%20t)<[RestrictionReason](/type/RestrictionReason/)> | Contains the reason why access to this channel must be restricted. Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[ChatAdminRights](/type/ChatAdminRights/) | Admin rights of the user in this channel (see [rights](https://core.telegram.org/api/rights)) |
| banned_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[ChatBannedRights](/type/ChatBannedRights/) | Banned rights of the user in this channel (see [rights](https://core.telegram.org/api/rights)) |
| default_banned_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[ChatBannedRights](/type/ChatBannedRights/) | Default chat rights (see [rights](https://core.telegram.org/api/rights)) |
| participants_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[int](/type/int/) | Participant count |
| usernames | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[Username](/type/Username/)> | Additional usernames |
| stories_max_id | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[RecentStory](/type/RecentStory/) | Summary of the channel or supergroup's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries). |
| color | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[PeerColor](/type/PeerColor/) | The channel's [accent color](https://core.telegram.org/api/colors). |
| profile_color | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[PeerColor](/type/PeerColor/) | The channel's [profile color](https://core.telegram.org/api/colors). |
| emoji_status | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[EmojiStatus](/type/EmojiStatus/) | [Emoji status](https://core.telegram.org/api/emoji-status) |
| level | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | [Boost level](https://core.telegram.org/api/boost). Changes to this flag should invalidate the local [channelFull](/constructor/channelFull/) cache for this channel/supergroup ID, see [here »](https://core.telegram.org/api/peers#full-info-database) for more info. |
| subscription_until_date | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | Expiration date of the [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions) the current user has bought to gain access to this channel. |
| bot_verification_icon | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[long](/type/long/) | Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification). |
| send_paid_messages_stars | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[long](/type/long/) | If set, this supergroup or [monoforum](https://core.telegram.org/api/monoforum) has enabled [paid messages »](https://core.telegram.org/api/paid-messages), we might need to pay the specified amount of [Stars](https://core.telegram.org/api/stars) to send messages to it, depending on the configured exceptions: check [channelFull](/constructor/channelFull/).send_paid_messages_stars to see if the currently logged in user actually has to pay or not, see [here »](https://core.telegram.org/api/paid-messages) for the full flow (only set for the monoforum, not the associated channel). |
| linked_monoforum_id | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[long](/type/long/) | For channels with associated [monoforums](https://core.telegram.org/api/monoforum), the [monoforum](https://core.telegram.org/api/monoforum) ID. For [Monoforums](https://core.telegram.org/api/monoforum), the ID of the associated channel. |

## Тип

[Chat](/type/Chat/)

## Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/)

Set whether all users [should join a discussion group in order to comment on a post »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group)

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/)

Set whether all users should [request admin approval to join the group »](https://core.telegram.org/api/invites#join-requests).

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [channels.getChannels](/method/channels.getChannels/)

Get info about [channels/supergroups](https://core.telegram.org/api/channel)

#### [Message translation](https://core.telegram.org/api/translation)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
