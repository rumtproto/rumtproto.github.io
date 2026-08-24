---
title: "channels.getForumTopicsByID"
original: "https://core.telegram.org/method/channels.getForumTopicsByID"
section: ref
kind: method
description: "Получить темы форума по их идентификаторам"
layout: layout.njk
---

# channels.getForumTopicsByID

Получить темы форума по их идентификаторам

```
 Method schema is available as of layer 216. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Форум</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы тем</td></tr></tbody></table>

### Результат

[messages.ForumTopics](/type/messages.ForumTopics/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_FORUM_MISSING</td><td>Эта супергруппа не является форумом.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>TOPICS_EMPTY</td><td>Вы не указали ни одного идентификатора темы.</td></tr></tbody></table>
