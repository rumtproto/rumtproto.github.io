---
title: "quickReply (конструктор)"
original: "https://core.telegram.org/constructor/quickReply"
section: ref
kind: constructor
layout: layout.njk
---

# quickReply

*Конструктор из схемы TL.*

> A [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
quickReply#697102b shortcut_id:int shortcut:string top_message:int count:int = QuickReply;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | Unique shortcut ID. |
| shortcut | [string](/type/string/) | Shortcut name. |
| top_message | [int](/type/int/) | ID of the last message in the shortcut. |
| count | [int](/type/int/) | Total number of messages in the shortcut. |

## Тип

[QuickReply](/type/QuickReply/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
