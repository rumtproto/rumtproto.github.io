---
title: "invokeWithBusinessConnection"
original: "https://core.telegram.org/method/invokeWithBusinessConnection"
section: ref
kind: method
description: "Вызвать метод через подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »."
layout: layout.njk
---

# invokeWithBusinessConnection

Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/).

Всегда отправляйте запросы, обёрнутые в `invokeWithBusinessConnection`, в дата-центр с идентификатором, указанным в поле `dc_id` используемого [botBusinessConnection](/constructor/botBusinessConnection/).

```
---functions---
invokeWithBusinessConnection#dd289f8e {X:Type} connection_id:string query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор бизнес-подключения.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Сам запрос.</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [botBusinessConnection](/constructor/botBusinessConnection/)

Содержит информацию о [бизнес-подключении бота](/api/bots/connected-business-bots/).
