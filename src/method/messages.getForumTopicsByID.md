---
title: "messages.getForumTopicsByID (метод)"
original: "https://core.telegram.org/method/messages.getForumTopicsByID"
section: ref
kind: method
layout: layout.njk
---

# messages.getForumTopicsByID

*Метод из схемы TL.*

> Get forum topics by their ID

## Определение TL

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
---functions---
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located. |
| topics | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Topic IDs |

## Результат

[messages.ForumTopics](/type/messages.ForumTopics/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | TOPICS_EMPTY | You specified no topic IDs. |
