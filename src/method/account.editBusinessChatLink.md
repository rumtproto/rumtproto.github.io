---
title: "account.editBusinessChatLink (метод)"
original: "https://core.telegram.org/method/account.editBusinessChatLink"
section: ref
kind: method
layout: layout.njk
---

# account.editBusinessChatLink

*Метод из схемы TL.*

> Edit a created [business chat deep link »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
---functions---
account.editBusinessChatLink#8c3410af slug:string link:InputBusinessChatLink = BusinessChatLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | Slug of the link, obtained as specified [here »](https://core.telegram.org/api/links#business-chat-links). |
| link | [InputBusinessChatLink](/type/InputBusinessChatLink/) | New link information. |

## Результат

[BusinessChatLink](/type/BusinessChatLink/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHATLINK_SLUG_EMPTY | The specified slug is empty. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
