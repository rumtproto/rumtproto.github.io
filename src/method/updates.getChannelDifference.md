---
title: "updates.getChannelDifference (метод)"
original: "https://core.telegram.org/method/updates.getChannelDifference"
section: ref
kind: method
layout: layout.njk
---

# updates.getChannelDifference

*Метод из схемы TL.*

> Returns the difference between the current state of updates of a certain channel and transmitted.

## Определение TL

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
---functions---
updates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set to true to skip some possibly unneeded updates and reduce server-side load |
| channel | [InputChannel](/type/InputChannel/) | The channel |
| filter | [ChannelMessagesFilter](/type/ChannelMessagesFilter/) | Messsage filter |
| pts | [int](/type/int/) | Persistent timestamp (see [updates](/api/updates/)) |
| limit | [int](/type/int/) | How many updates to fetch, max 100000 Ordinary (non-bot) users are supposed to pass 10-100 |

## Результат

[updates.ChannelDifference](/type/updates.ChannelDifference/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHANNEL_PUBLIC_GROUP_NA | channel/supergroup not available. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | FROM_MESSAGE_BOT_DISABLED | Bots can't use fromMessage min constructors. |
| 400 | FROZEN_PARTICIPANT_MISSING | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and cannot access the specified peer. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PERSISTENT_TIMESTAMP_EMPTY | Persistent timestamp empty. |
| 400 | PERSISTENT_TIMESTAMP_INVALID | Persistent timestamp invalid. |
| 500 | PERSISTENT_TIMESTAMP_OUTDATED | Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL). |
| 400 | PINNED_DIALOGS_TOO_MUCH | Too many pinned dialogs. |
| 400 | RANGES_INVALID | Invalid range provided. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
