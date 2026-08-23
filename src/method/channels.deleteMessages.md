---
title: "channels.deleteMessages (метод)"
original: "https://core.telegram.org/method/channels.deleteMessages"
section: ref
kind: method
layout: layout.njk
---

# channels.deleteMessages

*Метод из схемы TL.*

> Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | [Channel/supergroup](https://core.telegram.org/api/channel) |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages to delete |

## Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 420 | FROZEN_METHOD_INVALID | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and thus cannot execute the specified action. |
| 403 | MESSAGE_DELETE_FORBIDDEN | You can't delete one of the messages you tried to delete, most likely because it is a service message. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
