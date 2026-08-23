---
title: "account.createBusinessChatLink (метод)"
original: "https://core.telegram.org/method/account.createBusinessChatLink"
section: ref
kind: method
layout: layout.njk
---

# account.createBusinessChatLink

*Метод из схемы TL.*

> Create a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
---functions---
account.createBusinessChatLink#8851e68e link:InputBusinessChatLink = BusinessChatLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| link | [InputBusinessChatLink](/type/InputBusinessChatLink/) | Info about the link to create. |

## Результат

[BusinessChatLink](/type/BusinessChatLink/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHATLINKS_TOO_MUCH | Too many [business chat links](https://core.telegram.org/api/business#business-chat-links) were created, please delete some older links. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
