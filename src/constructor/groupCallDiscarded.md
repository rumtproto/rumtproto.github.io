---
title: "groupCallDiscarded (конструктор)"
original: "https://core.telegram.org/constructor/groupCallDiscarded"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallDiscarded

*Конструктор из схемы TL.*

> Describes an ended [group call](https://core.telegram.org/api/group-calls).

## Определение TL

```
groupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Group call ID |
| access_hash | [long](/type/long/) | Group call access hash |
| duration | [int](/type/int/) | Group call duration |

## Тип

[GroupCall](/type/GroupCall/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
