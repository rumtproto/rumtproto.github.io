---
title: "invokeWithTakeout"
original: "https://core.telegram.org/method/invokeWithTakeout"
section: ref
kind: method
description: "Вызвать метод в рамках сессии выгрузки данных, подробнее см. здесь »."
layout: layout.njk
---

# invokeWithTakeout

Вызвать метод в рамках [сессии выгрузки данных, подробнее см. здесь »](/api/takeout/).

```
---functions---
invokeWithTakeout#aca9fd2e {X:Type} takeout_id:long query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>takeout_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/takeout">Идентификатор сессии выгрузки данных »</a></td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам

### Связанные страницы

#### [Takeout API](/api/takeout/)

API Telegram позволяет пользователям экспортировать все свои данные через API выгрузки данных.
