---
title: "messages.getWebPagePreview (метод)"
original: "https://core.telegram.org/method/messages.getWebPagePreview"
section: ref
kind: method
layout: layout.njk
---

# messages.getWebPagePreview

*Метод из схемы TL.*

> Get preview of webpage

## Определение TL

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
---functions---
messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| message | [string](/type/string/) | Message from which to extract the preview |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |

## Результат

[messages.WebPagePreview](/type/messages.WebPagePreview/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ENTITY_BOUNDS_INVALID | A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here »](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. |
| 400 | MESSAGE_EMPTY | The provided message is empty. |

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
