---
title: "updateDeleteQuickReplyMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteQuickReplyMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteQuickReplyMessages

*Конструктор из схемы TL.*

> One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted.

## Определение TL

```
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | Quick reply shortcut ID. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the deleted messages. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
