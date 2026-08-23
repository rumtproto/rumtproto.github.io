---
title: "stats.getMessageStats (метод)"
original: "https://core.telegram.org/method/stats.getMessageStats"
section: ref
kind: method
layout: layout.njk
---

# stats.getMessageStats

*Метод из схемы TL.*

> Get [message statistics](https://core.telegram.org/api/stats)

## Определение TL

```
stats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;
---functions---
stats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to enable dark theme for graph colors |
| channel | [InputChannel](/type/InputChannel/) | Channel ID |
| msg_id | [int](/type/int/) | Message ID |

## Результат

[stats.MessageStats](/type/stats.MessageStats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
