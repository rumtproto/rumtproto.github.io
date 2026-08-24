---
title: "messages.ForumTopics"
original: "https://core.telegram.org/type/messages.ForumTopics"
section: ref
kind: type
description: "Содержит информацию о нескольких темах форума"
layout: layout.njk
---

# messages.ForumTopics

Содержит информацию о нескольких [темах форума](/api/forum/#forum-topics)

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;

---functions---

messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.forumTopics">messages.forumTopics</a></td><td>Содержит информацию о нескольких <a href="/api/forum#forum-topics">темах форума</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getForumTopics">messages.getForumTopics</a></td><td>Получить <a href="/api/forum">темы форума</a></td></tr><tr><td><a href="/method/messages.getForumTopicsByID">messages.getForumTopicsByID</a></td><td>Получить темы форума по их идентификаторам</td></tr></tbody></table>

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
