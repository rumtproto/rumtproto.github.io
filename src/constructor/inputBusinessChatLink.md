---
title: "inputBusinessChatLink (конструктор)"
original: "https://core.telegram.org/constructor/inputBusinessChatLink"
section: ref
kind: constructor
layout: layout.njk
---

# inputBusinessChatLink

*Конструктор из схемы TL.*

> Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) to be created by the current account.

## Определение TL

```
inputBusinessChatLink#11679fa7 flags:# message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string = InputBusinessChatLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| message | [string](/type/string/) | Message to pre-fill in the message input field. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Human-readable name of the link, to simplify management in the UI (only visible to the creator of the link). |

## Тип

[InputBusinessChatLink](/type/InputBusinessChatLink/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
