---
title: "updateReadMessagesContents (конструктор)"
original: "https://core.telegram.org/constructor/updateReadMessagesContents"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadMessagesContents

*Конструктор из схемы TL.*

> Contents of messages in the common [message box](/api/updates/) were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [messages.readMessageContents](/method/messages.readMessageContents/)).

## Определение TL

```
updateReadMessagesContents#f8227181 flags:# messages:Vector<int> pts:int pts_count:int date:flags.0?int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of read messages |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |
| date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | When was the last message in messages marked as read. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [messages.readMessageContents](/method/messages.readMessageContents/)

Notifies the sender about the recipient having listened a voice message or watched a video, emitting an [updateReadMessagesContents](/constructor/updateReadMessagesContents/).
