---
title: "channels.readHistory (метод)"
original: "https://core.telegram.org/method/channels.readHistory"
section: ref
kind: method
layout: layout.njk
---

# channels.readHistory

*Метод из схемы TL.*

> Mark [channel/supergroup](https://core.telegram.org/api/channel) history as read

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.readHistory#cc104937 channel:InputChannel max_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | [Channel/supergroup](https://core.telegram.org/api/channel) |
| max_id | [int](/type/int/) | ID of message up to which messages should be marked as read |

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
