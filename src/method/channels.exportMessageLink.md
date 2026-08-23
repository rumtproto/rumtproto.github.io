---
title: "channels.exportMessageLink (метод)"
original: "https://core.telegram.org/method/channels.exportMessageLink"
section: ref
kind: method
layout: layout.njk
---

# channels.exportMessageLink

*Метод из схемы TL.*

> Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
exportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;
---functions---
channels.exportMessageLink#e63fadeb flags:# grouped:flags.0?true thread:flags.1?true channel:InputChannel id:int = ExportedMessageLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| grouped | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to include other grouped media (for albums) |
| thread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to also include a thread ID, if available, inside of the link |
| channel | [InputChannel](/type/InputChannel/) | Channel |
| id | [int](/type/int/) | Message ID |

## Результат

[ExportedMessageLink](/type/ExportedMessageLink/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
