---
title: "BusinessChatLink (тип)"
original: "https://core.telegram.org/type/BusinessChatLink"
section: ref
kind: type
layout: layout.njk
---

# BusinessChatLink

*Тип из схемы TL.*

> Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) created by the current account.

## Определение TL

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;

---functions---

account.createBusinessChatLink#8851e68e link:InputBusinessChatLink = BusinessChatLink;
account.editBusinessChatLink#8c3410af slug:string link:InputBusinessChatLink = BusinessChatLink;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessChatLink](/constructor/businessChatLink/) | Contains info about a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |

## Методы

| Method | Описание |
|---|---|
| [account.createBusinessChatLink](/method/account.createBusinessChatLink/) | Create a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |
| [account.editBusinessChatLink](/method/account.editBusinessChatLink/) | Edit a created [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
