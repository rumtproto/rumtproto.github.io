---
title: "forumTopicDeleted"
original: "https://core.telegram.org/constructor/forumTopicDeleted"
section: ref
kind: constructor
description: "Представляет удалённую тему форума."
layout: layout.njk
---

# forumTopicDeleted

Представляет удалённую [тему форума](/api/forum/#forum-topics).

Этот конструктор возвращается вместо [forumTopic](/constructor/forumTopic/) методом [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) (и другими методами получения тем), когда тема больше не существует, что позволяет клиентам и ботам убедиться, что тема была удалена.

```
forumTopicDeleted#23f109b id:int = ForumTopic;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор удалённой темы форума.</td></tr></tbody></table>

### Тип

[ForumTopic](/type/ForumTopic/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [forumTopic](/constructor/forumTopic/)

Представляет [тему форума](/api/forum/#forum-topics).

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Получить темы форума по их идентификаторам
