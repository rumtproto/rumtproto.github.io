---
title: "messages.getForumTopicsByID"
original: "https://core.telegram.org/method/messages.getForumTopicsByID"
section: ref
kind: method
description: "Получить темы форума по их идентификаторам"
layout: layout.njk
---

# messages.getForumTopicsByID

Получить темы форума по их идентификаторам

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
---functions---
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Форум-супергруппа, личный чат (для ботов с поддержкой форумов) или форум бота (для пользователей), где находится тема.</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы тем</td></tr></tbody></table>

### Результат

[messages.ForumTopics](/type/messages.ForumTopics/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>TOPICS_EMPTY</td><td>Вы не указали ни одного идентификатора темы.</td></tr></tbody></table>
