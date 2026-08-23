---
title: "updateDeleteQuickReply (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteQuickReply"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteQuickReply

*Конструктор из схемы TL.*

> A [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was deleted. This will **not** emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update.

## Определение TL

```
updateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | ID of the quick reply shortcut that was deleted. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted.
