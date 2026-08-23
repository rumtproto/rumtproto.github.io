---
title: "users.getUsers (метод)"
original: "https://core.telegram.org/method/users.getUsers"
section: ref
kind: method
layout: layout.njk
---

# users.getUsers

*Метод из схемы TL.*

> Returns basic user info according to their identifiers.

## Определение TL

```
---functions---
users.getUsers#d91a548 id:Vector<InputUser> = Vector<User>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | List of user identifiers |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)\>

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_MONOFORUM_UNSUPPORTED | [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | FROM_MESSAGE_BOT_DISABLED | Bots can't use fromMessage min constructors. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
