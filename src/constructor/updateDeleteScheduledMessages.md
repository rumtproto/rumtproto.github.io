---
title: "updateDeleteScheduledMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteScheduledMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteScheduledMessages

*Конструктор из схемы TL.*

> Some [scheduled messages](https://core.telegram.org/api/scheduled-messages) were deleted (or sent) from the schedule queue of a chat

## Определение TL

```
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | Peer |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Deleted scheduled messages |
| sent_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If set, this update indicates that some scheduled messages were sent (not simply deleted from the schedule queue). In this case, the messages field will contain the scheduled message IDs for the sent messages (initially returned in [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)), and sent_messages will contain the real message IDs for the sent messages. |

## Тип

[Update](/type/Update/)

## Related pages

#### [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)

A message was added to the [schedule queue of a chat](https://core.telegram.org/api/scheduled-messages)

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages
