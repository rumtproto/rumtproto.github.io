---
title: "forumTopicDeleted (конструктор)"
original: "https://core.telegram.org/constructor/forumTopicDeleted"
section: ref
kind: constructor
layout: layout.njk
---

# forumTopicDeleted

*Конструктор из схемы TL.*

> Represents a deleted [forum topic](https://core.telegram.org/api/forum#forum-topics).
> This constructor is returned in place of a [forumTopic](/constructor/forumTopic/) by [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted.

## Определение TL

```
forumTopicDeleted#23f109b id:int = ForumTopic;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | The ID of the deleted forum topic. |

## Тип

[ForumTopic](/type/ForumTopic/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [forumTopic](/constructor/forumTopic/)

Represents a [forum topic](https://core.telegram.org/api/forum#forum-topics).

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Get forum topics by their ID
