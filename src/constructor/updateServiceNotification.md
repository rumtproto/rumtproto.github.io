---
title: "updateServiceNotification (конструктор)"
original: "https://core.telegram.org/constructor/updateServiceNotification"
section: ref
kind: constructor
layout: layout.njk
---

# updateServiceNotification

*Конструктор из схемы TL.*

> A service message for the user.
> The app must show the message to the user upon receiving this update. In case the **popup** parameter was passed, the text message must be displayed in a popup alert immediately upon receipt. It is recommended to handle the text as you would an ordinary message in terms of highlighting links, etc. The message must also be stored locally as part of the message history with the user id `777000` (Telegram Notifications).

## Определение TL

```
updateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| popup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the message must be displayed in a popup. |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| inbox_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | When was the notification received The message must also be stored locally as part of the message history with the user id 777000 (Telegram Notifications). |
| type | [string](/type/string/) | String, identical in format and contents to the [type](https://core.telegram.org/api/errors/#error-type) field in API errors. Describes type of service message. It is acceptable to ignore repeated messages of the same type within a short period of time (15 minutes). |
| message | [string](/type/string/) | Message text |
| media | [MessageMedia](/type/MessageMedia/) | Media content (optional) |
| entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Error handling](/api/errors/)

How to handle API return errors correctly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
