---
title: "messages.messages (конструктор)"
original: "https://core.telegram.org/constructor/messages.messages"
section: ref
kind: constructor
layout: layout.njk
---

# messages.messages

*Конструктор из схемы TL.*

> Full list of messages with auxiliary data.

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of messages |
| topics | [Vector](https://core.telegram.org/type/Vector%20t)<[ForumTopic](/type/ForumTopic/)> | [Forum topics](https://core.telegram.org/api/forum#forum-topics) the returned messages belong to. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in dialogs |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in messages and chats |

## Тип

[messages.Messages](/type/messages.Messages/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
