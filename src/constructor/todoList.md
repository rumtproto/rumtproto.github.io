---
title: "todoList (конструктор)"
original: "https://core.telegram.org/constructor/todoList"
section: ref
kind: constructor
layout: layout.njk
---

# todoList

*Конструктор из схемы TL.*

> Represents a [todo list »](https://core.telegram.org/api/todo).

## Определение TL

```
todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| others_can_append | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, users different from the creator of the list can append items to the list. |
| others_can_complete | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, users different from the creator of the list can complete items in the list. |
| title | [TextWithEntities](/type/TextWithEntities/) | Title of the todo list, maximum length equal to [todo_title_length_max »](https://core.telegram.org/api/config#todo-title-length-max). |
| list | [Vector](https://core.telegram.org/type/Vector%20t)<[TodoItem](/type/TodoItem/)> | Items of the list. |

## Тип

[TodoList](/type/TodoList/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
