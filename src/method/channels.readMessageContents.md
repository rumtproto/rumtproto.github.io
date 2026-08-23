---
title: "channels.readMessageContents (метод)"
original: "https://core.telegram.org/method/channels.readMessageContents"
section: ref
kind: method
layout: layout.njk
---

# channels.readMessageContents

*Метод из схемы TL.*

> Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read, emitting an [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | [Channel/supergroup](https://core.telegram.org/api/channel) |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages whose contents should be marked as read |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/)

The specified [channel/supergroup](https://core.telegram.org/api/channel) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/))
