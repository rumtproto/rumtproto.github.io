---
title: "messages.editQuickReplyShortcut (метод)"
original: "https://core.telegram.org/method/messages.editQuickReplyShortcut"
section: ref
kind: method
layout: layout.njk
---

# messages.editQuickReplyShortcut

*Метод из схемы TL.*

> Rename a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts).  
> This will emit an [updateQuickReplies](/constructor/updateQuickReplies/) update to other logged-in sessions.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editQuickReplyShortcut#5c003cef shortcut_id:int shortcut:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | [Shortcut ID](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| shortcut | [string](/type/string/) | New shortcut name. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | SHORTCUT_INVALID | The specified shortcut is invalid. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Info about or the order of [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) was changed.
