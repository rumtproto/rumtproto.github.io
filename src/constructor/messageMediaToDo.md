---
title: "messageMediaToDo"
original: "https://core.telegram.org/constructor/messageMediaToDo"
section: ref
kind: constructor
description: "Представляет список задач »."
layout: layout.njk
---

# messageMediaToDo

Представляет [список задач »](/api/todo/).

```
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>todo</strong></td><td style="text-align: center;"><a href="/type/TodoList">TodoList</a></td><td>Список задач.</td></tr><tr><td><strong>completions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/TodoCompletion">TodoCompletion</a>&gt;</td><td>Завершённые элементы.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.
