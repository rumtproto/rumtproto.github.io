---
title: "todoItem (конструктор)"
original: "https://core.telegram.org/constructor/todoItem"
section: ref
kind: constructor
layout: layout.njk
---

# todoItem

*Конструктор из схемы TL.*

> An item of a [todo list »](https://core.telegram.org/api/todo).

## Определение TL

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | ID of the item, a positive (non-zero) integer unique within the current list. |
| title | [TextWithEntities](/type/TextWithEntities/) | Text of the item, maximum length equal to [todo_item_length_max »](https://core.telegram.org/api/config#todo-item-length-max). |

## Тип

[TodoItem](/type/TodoItem/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
