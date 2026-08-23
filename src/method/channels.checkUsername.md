---
title: "channels.checkUsername (метод)"
original: "https://core.telegram.org/method/channels.checkUsername"
section: ref
kind: method
layout: layout.njk
---

# channels.checkUsername

*Метод из схемы TL.*

> Check if a username is free and can be assigned to a channel/supergroup

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The [channel/supergroup](https://core.telegram.org/api/channel) that will assigned the specified username |
| username | [string](/type/string/) | The username to check |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNELS_ADMIN_PUBLIC_TOO_MUCH | You're admin of too many public channels, make some channels private to change the username of this channel. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_OCCUPIED | The provided username is already occupied. |
| 400 | USERNAME_PURCHASE_AVAILABLE | The specified username can be purchased on [https://fragment.com](https://fragment.com). |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
