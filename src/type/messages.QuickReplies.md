---
title: "messages.QuickReplies (тип)"
original: "https://core.telegram.org/type/messages.QuickReplies"
section: ref
kind: type
layout: layout.njk
---

# messages.QuickReplies

*Тип из схемы TL.*

> Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;

---functions---

messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.quickReplies](/constructor/messages.quickReplies/) | Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [messages.quickRepliesNotModified](/constructor/messages.quickRepliesNotModified/) | Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) hasn't changed. |

## Методы

| Method | Описание |
|---|---|
| [messages.getQuickReplies](/method/messages.getQuickReplies/) | Fetch basic info about all existing [quick reply shortcuts](https://core.telegram.org/api/business#quick-reply-shortcuts). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
