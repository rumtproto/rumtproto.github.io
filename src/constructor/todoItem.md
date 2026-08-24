---
title: "todoItem"
original: "https://core.telegram.org/constructor/todoItem"
section: ref
kind: constructor
description: "Пункт списка задач »."
layout: layout.njk
---

# todoItem

Пункт [списка задач »](/api/todo/).

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор элемента — положительное (ненулевое) целое число, уникальное в пределах текущего списка.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текст пункта, максимальная длина равна <a href="/api/config#todo-item-length-max">todo_item_length_max »</a>.</td></tr></tbody></table>

### Тип

[TodoItem](/type/TodoItem/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.
