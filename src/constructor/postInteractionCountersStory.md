---
title: "postInteractionCountersStory (конструктор)"
original: "https://core.telegram.org/constructor/postInteractionCountersStory"
section: ref
kind: constructor
layout: layout.njk
---

# postInteractionCountersStory

*Конструктор из схемы TL.*

> Interaction counters for a story.

## Определение TL

```
postInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| story_id | [int](/type/int/) | Story ID |
| views | [int](/type/int/) | Number of views |
| forwards | [int](/type/int/) | Number of forwards and reposts to public chats and channels |
| reactions | [int](/type/int/) | Number of reactions |

## Тип

[PostInteractionCounters](/type/PostInteractionCounters/)
