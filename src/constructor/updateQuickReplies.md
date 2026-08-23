---
title: "updateQuickReplies (конструктор)"
original: "https://core.telegram.org/constructor/updateQuickReplies"
section: ref
kind: constructor
layout: layout.njk
---

# updateQuickReplies

*Конструктор из схемы TL.*

> Info about or the order of [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) was changed.

## Определение TL

```
updateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| quick_replies | [Vector](https://core.telegram.org/type/Vector%20t)<[QuickReply](/type/QuickReply/)> | New quick reply shortcut order and information. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
