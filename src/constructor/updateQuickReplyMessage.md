---
title: "updateQuickReplyMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateQuickReplyMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateQuickReplyMessage

*Конструктор из схемы TL.*

> A new message was added to a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
updateQuickReplyMessage#3e050d0f message:Message = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [Message](/type/Message/) | The message that was added (the [message](/constructor/message/).quick_reply_shortcut_id field will contain the shortcut ID). |

## Тип

[Update](/type/Update/)

## Related pages

#### [message](/constructor/message/)

A message

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
