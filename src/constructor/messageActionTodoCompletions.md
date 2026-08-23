---
title: "messageActionTodoCompletions (конструктор)"
original: "https://core.telegram.org/constructor/messageActionTodoCompletions"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionTodoCompletions

*Конструктор из схемы TL.*

> Items were marked as completed or not completed in a [todo list »](https://core.telegram.org/api/todo).

## Определение TL

```
messageActionTodoCompletions#cc7c5c89 completed:Vector<int> incompleted:Vector<int> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| completed | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Items marked as completed. |
| incompleted | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Items marked as not completed. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
