---
title: "updateShortSentMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateShortSentMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateShortSentMessage

*Конструктор из схемы TL.*

> Shortened constructor containing info on one outgoing message to a contact (the destination chat has to be extracted from the method call that returned this object).

## Определение TL

```
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the message is outgoing |
| id | [int](/type/int/) | ID of the sent message |
| pts | [int](/type/int/) | [PTS](/api/updates/) |
| pts_count | [int](/type/int/) | [PTS count](/api/updates/) |
| date | [int](/type/int/) | [date](/api/updates/) |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[MessageMedia](/type/MessageMedia/) | Attached media |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Entities](https://core.telegram.org/api/entities) for styled text |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[int](/type/int/) | Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. |

## Тип

[Updates](/type/Updates/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
