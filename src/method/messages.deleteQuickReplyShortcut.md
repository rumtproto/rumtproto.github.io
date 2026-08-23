---
title: "messages.deleteQuickReplyShortcut (метод)"
original: "https://core.telegram.org/method/messages.deleteQuickReplyShortcut"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteQuickReplyShortcut

*Метод из схемы TL.*

> Completely delete a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts).  
> This will also emit an [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) update to other logged-in sessions (and _no_ [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcuts are also deleted by this method).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteQuickReplyShortcut#3cc04740 shortcut_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | [Shortcut ID](https://core.telegram.org/api/business#quick-reply-shortcuts) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SHORTCUT_INVALID | The specified shortcut is invalid. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/)

A [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was deleted. This will **not** emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted.
