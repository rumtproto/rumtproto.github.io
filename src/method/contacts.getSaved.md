---
title: "contacts.getSaved"
original: "https://core.telegram.org/method/contacts.getSaved"
section: ref
kind: method
description: "Получить все контакты; требуется сессия выгрузки данных, подробнее см. здесь »."
layout: layout.njk
---

# contacts.getSaved

Получить все контакты; требуется [сессия выгрузки данных, подробнее см. здесь »](/api/takeout/).

```
---functions---
contacts.getSaved#82f1e39f = Vector<SavedContact>;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SavedContact](/type/SavedContact/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TAKEOUT_INVALID</td><td>Указанный идентификатор выгрузки данных недействителен.</td></tr><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>Сначала необходимо инициализировать сессию <a href="/api/takeout">выгрузки данных</a>, <a href="/api/takeout">подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Takeout API](/api/takeout/)

API Telegram позволяет пользователям экспортировать все свои данные через API выгрузки данных.
