---
title: "account.deleteBusinessChatLink (метод)"
original: "https://core.telegram.org/method/account.deleteBusinessChatLink"
section: ref
kind: method
layout: layout.njk
---

# account.deleteBusinessChatLink

*Метод из схемы TL.*

> Delete a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteBusinessChatLink#60073674 slug:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | Slug of the link, obtained as specified [here »](https://core.telegram.org/api/links#business-chat-links). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHATLINK_SLUG_EMPTY | The specified slug is empty. |
| 400 | CHATLINK_SLUG_EXPIRED | The specified [business chat link](https://core.telegram.org/api/business#business-chat-links) has expired. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
