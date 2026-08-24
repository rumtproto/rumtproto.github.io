---
title: "todoList"
original: "https://core.telegram.org/constructor/todoList"
section: ref
kind: constructor
description: "Представляет список задач »."
layout: layout.njk
---

# todoList

Представляет [список задач »](/api/todo/).

```
todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>others_can_append</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи, отличные от создателя списка, могут добавлять в него пункты.</td></tr><tr><td><strong>others_can_complete</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи, отличные от создателя списка, могут отмечать пункты списка выполненными.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Название списка задач, максимальная длина равна <a href="/api/config#todo-title-length-max">todo_title_length_max »</a>.</td></tr><tr><td><strong>list</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/TodoItem">TodoItem</a>&gt;</td><td>Пункты списка.</td></tr></tbody></table>

### Тип

[TodoList](/type/TodoList/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.
