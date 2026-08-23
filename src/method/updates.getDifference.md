---
title: "updates.getDifference (метод)"
original: "https://core.telegram.org/method/updates.getDifference"
section: ref
kind: method
layout: layout.njk
---

# updates.getDifference

*Метод из схемы TL.*

> Get new [updates](/api/updates/).

## Определение TL

```
updates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
updates.differenceTooLong#4afe8f6d pts:int = updates.Difference;
---functions---
updates.getDifference#19c2f763 flags:# pts:int pts_limit:flags.1?int pts_total_limit:flags.0?int date:int qts:int qts_limit:flags.2?int = updates.Difference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pts | [int](/type/int/) | PTS, see [updates](/api/updates/). |
| pts_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | PTS limit |
| pts_total_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | For fast updating: if provided and pts + pts_total_limit < remote pts, [updates.differenceTooLong](/constructor/updates.differenceTooLong/) will be returned. Simply tells the server to not return the difference if it is bigger than pts_total_limit If the remote pts is too big (> ~4000000), this field will default to 1000000 |
| date | [int](/type/int/) | date, see [updates](/api/updates/). |
| qts | [int](/type/int/) | QTS, see [updates](/api/updates/). |
| qts_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | QTS limit |

## Результат

[updates.Difference](/type/updates.Difference/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CDN_METHOD_INVALID | You can't call this method in a CDN DC. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | DATE_EMPTY | Date empty. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PERSISTENT_TIMESTAMP_EMPTY | Persistent timestamp empty. |
| 400 | PERSISTENT_TIMESTAMP_INVALID | Persistent timestamp invalid. |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USER_NOT_PARTICIPANT | You're not a member of this supergroup/channel. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updates.differenceTooLong](/constructor/updates.differenceTooLong/)

The difference is [too long](https://core.telegram.org/api/updates/#recovering-gaps), and the specified state must be used to refetch updates.
