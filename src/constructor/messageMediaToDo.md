---
title: "messageMediaToDo (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaToDo"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaToDo

*Конструктор из схемы TL.*

> Represents a [todo list »](https://core.telegram.org/api/todo).

## Определение TL

```
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| todo | [TodoList](/type/TodoList/) | The todo list. |
| completions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[TodoCompletion](/type/TodoCompletion/)> | Completed items. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
