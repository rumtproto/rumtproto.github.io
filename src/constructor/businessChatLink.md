---
title: "businessChatLink (конструктор)"
original: "https://core.telegram.org/constructor/businessChatLink"
section: ref
kind: constructor
layout: layout.njk
---

# businessChatLink

*Конструктор из схемы TL.*

> Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) created by the current account.

## Определение TL

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| link | [string](/type/string/) | [Business chat deep link](https://core.telegram.org/api/links#business-chat-links). |
| message | [string](/type/string/) | Message to pre-fill in the message input field. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Human-readable name of the link, to simplify management in the UI (only visible to the creator of the link). |
| views | [int](/type/int/) | Number of times the link was resolved (clicked/scanned/etc...). |

## Тип

[BusinessChatLink](/type/BusinessChatLink/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
