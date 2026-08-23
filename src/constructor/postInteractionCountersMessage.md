---
title: "postInteractionCountersMessage (конструктор)"
original: "https://core.telegram.org/constructor/postInteractionCountersMessage"
section: ref
kind: constructor
layout: layout.njk
---

# postInteractionCountersMessage

*Конструктор из схемы TL.*

> Interaction counters for a message.

## Определение TL

```
postInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_id | [int](/type/int/) | Message ID |
| views | [int](/type/int/) | Number of views |
| forwards | [int](/type/int/) | Number of forwards to public channels |
| reactions | [int](/type/int/) | Number of reactions |

## Тип

[PostInteractionCounters](/type/PostInteractionCounters/)
