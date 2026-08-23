---
title: "chatFull (конструктор)"
original: "https://core.telegram.org/constructor/chatFull"
section: ref
kind: constructor
layout: layout.njk
---

# chatFull

*Конструктор из схемы TL.*

> Full info about a [basic group](https://core.telegram.org/api/channel#basic-groups).
> When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

## Определение TL

```
chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_set_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Can we change the username of this chat |
| has_scheduled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether [scheduled messages](https://core.telegram.org/api/scheduled-messages) are available |
| translations_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Whether the [real-time chat translation popup](https://core.telegram.org/api/translation) should be hidden. |
| id | [long](/type/long/) | ID of the chat |
| about | [string](/type/string/) | About string for this chat |
| participants | [ChatParticipants](/type/ChatParticipants/) | Participant list |
| chat_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Photo](/type/Photo/) | Chat photo |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings |
| exported_invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[ExportedChatInvite](/type/ExportedChatInvite/) | Chat invite |
| bot_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[BotInfo](/type/BotInfo/)> | Info about bots that are in this chat |
| pinned_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Message ID of the last [pinned message](https://core.telegram.org/api/pin) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| call | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[InputGroupCall](/type/InputGroupCall/) | Active or scheduled [video chat »](https://core.telegram.org/api/group-calls#video-chats-livestreams) associated with this basic group |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[int](/type/int/) | Time-To-Live of messages sent by the current user to this chat |
| groupcall_default_join_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[Peer](/type/Peer/) | Explicitly saved default peer used to join this group's [video chat »](https://core.telegram.org/api/group-calls#video-chats-livestreams); if absent, the current user is used |
| theme_emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | Emoji representing a specific chat theme |
| requests_pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[int](/type/int/) | Pending [join requests »](https://core.telegram.org/api/invites#join-requests) |
| recent_requesters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | IDs of users who requested to join recently |
| available_reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[ChatReactions](/type/ChatReactions/) | Allowed [message reactions »](https://core.telegram.org/api/reactions) |
| reactions_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[int](/type/int/) | This flag may be used to impose a custom limit of unique reactions (i.e. a customizable version of [appConfig.reactions_uniq_max](https://core.telegram.org/api/config#reactions-uniq-max)). |

## Тип

[ChatFull](/type/ChatFull/)

## Related pages

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Message translation](https://core.telegram.org/api/translation)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
