---
title: "messages.quickReplies (конструктор)"
original: "https://core.telegram.org/constructor/messages.quickReplies"
section: ref
kind: constructor
layout: layout.njk
---

# messages.quickReplies

*Конструктор из схемы TL.*

> Info about [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| quick_replies | [Vector](https://core.telegram.org/type/Vector%20t)<[QuickReply](/type/QuickReply/)> | Quick reply shortcuts. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | Messages mentioned in quick_replies. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.QuickReplies](/type/messages.QuickReplies/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
