---
title: "messages.ForumTopics (тип)"
original: "https://core.telegram.org/type/messages.ForumTopics"
section: ref
kind: type
layout: layout.njk
---

# messages.ForumTopics

*Тип из схемы TL.*

> Contains information about multiple [forum topics](https://core.telegram.org/api/forum#forum-topics)

## Определение TL

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;

---functions---

messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.forumTopics](/constructor/messages.forumTopics/) | Contains information about multiple [forum topics](https://core.telegram.org/api/forum#forum-topics) |

## Методы

| Method | Описание |
|---|---|
| [messages.getForumTopics](/method/messages.getForumTopics/) | Get [topics of a forum](https://core.telegram.org/api/forum) |
| [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) | Get forum topics by their ID |

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
