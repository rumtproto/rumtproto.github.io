---
title: "todoCompletion (конструктор)"
original: "https://core.telegram.org/constructor/todoCompletion"
section: ref
kind: constructor
layout: layout.njk
---

# todoCompletion

*Конструктор из схемы TL.*

> A completed [todo list »](https://core.telegram.org/api/todo) item.

## Определение TL

```
todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | The ID of the completed item. |
| completed_by | [Peer](/type/Peer/) | ID of the user that completed the item. |
| date | [int](/type/int/) | When was the item completed. |

## Тип

[TodoCompletion](/type/TodoCompletion/)

## Related pages

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
