---
title: "messages.getQuickReplies (метод)"
original: "https://core.telegram.org/method/messages.getQuickReplies"
section: ref
kind: method
layout: layout.njk
---

# messages.getQuickReplies

*Метод из схемы TL.*

> Fetch basic info about all existing [quick reply shortcuts](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;
---functions---
messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Hash for pagination, generated as specified [here »](https://core.telegram.org/api/business#quick-reply-shortcuts) (not the usual algorithm used for hash generation.) |

## Результат

[messages.QuickReplies](/type/messages.QuickReplies/)

## Only users can use this method

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
