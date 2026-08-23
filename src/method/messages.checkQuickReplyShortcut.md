---
title: "messages.checkQuickReplyShortcut (метод)"
original: "https://core.telegram.org/method/messages.checkQuickReplyShortcut"
section: ref
kind: method
layout: layout.njk
---

# messages.checkQuickReplyShortcut

*Метод из схемы TL.*

> Before offering the user the choice to add a message to a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts), to make sure that none of the limits specified [here »](https://core.telegram.org/api/business#quick-reply-shortcuts) were reached.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.checkQuickReplyShortcut#f1d0fbd3 shortcut:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut | [string](/type/string/) | Shorcut name (not ID!). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
