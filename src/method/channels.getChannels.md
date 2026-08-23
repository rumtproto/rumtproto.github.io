---
title: "channels.getChannels (метод)"
original: "https://core.telegram.org/method/channels.getChannels"
section: ref
kind: method
layout: layout.njk
---

# channels.getChannels

*Метод из схемы TL.*

> Get info about [channels/supergroups](https://core.telegram.org/api/channel)

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getChannels#a7f6bbb id:Vector<InputChannel> = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputChannel](/type/InputChannel/)> | IDs of channels/supergroups to get info about |

## Результат

[messages.Chats](/type/messages.Chats/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
