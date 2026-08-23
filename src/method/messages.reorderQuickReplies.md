---
title: "messages.reorderQuickReplies (метод)"
original: "https://core.telegram.org/method/messages.reorderQuickReplies"
section: ref
kind: method
layout: layout.njk
---

# messages.reorderQuickReplies

*Метод из схемы TL.*

> Reorder [quick reply shortcuts](https://core.telegram.org/api/business#quick-reply-shortcuts).
> This will emit an [updateQuickReplies](/constructor/updateQuickReplies/) update to other logged-in sessions.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderQuickReplies#60331907 order:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of all created [quick reply shortcuts](https://core.telegram.org/api/business#quick-reply-shortcuts), in the desired order. |

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

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Info about or the order of [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) was changed.
