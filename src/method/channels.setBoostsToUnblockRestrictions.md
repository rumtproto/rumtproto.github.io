---
title: "channels.setBoostsToUnblockRestrictions (метод)"
original: "https://core.telegram.org/method/channels.setBoostsToUnblockRestrictions"
section: ref
kind: method
layout: layout.njk
---

# channels.setBoostsToUnblockRestrictions

*Метод из схемы TL.*

> Admins with [ban\_users admin rights »](/constructor/chatAdminRights/) may allow users that apply a certain number of [booosts »](https://core.telegram.org/api/boost) to the group to bypass [slow mode »](/method/channels.toggleSlowMode/) and [other »](https://core.telegram.org/api/rights#default-rights) supergroup restrictions, see [here »](https://core.telegram.org/api/boost#bypass-slowmode-and-chat-restrictions) for more info.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.setBoostsToUnblockRestrictions#ad399cee channel:InputChannel boosts:int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The supergroup. |
| boosts | [int](/type/int/) | The number of required boosts (1-8, 0 to disable). |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel).

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
