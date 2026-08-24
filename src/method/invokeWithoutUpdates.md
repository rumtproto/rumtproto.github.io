---
title: "invokeWithoutUpdates"
original: "https://core.telegram.org/method/invokeWithoutUpdates"
section: ref
kind: method
description: "Выполнить запрос, не подписывая используемое соединение на обновления (для файловых запросов это включено по умолчанию)."
layout: layout.njk
---

# invokeWithoutUpdates

Выполнить запрос, не подписывая используемое соединение на [обновления](/api/updates/) (для [файловых запросов](/api/files/) это включено по умолчанию).

```
---functions---
invokeWithoutUpdates#bf9459b7 {X:Type} query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
