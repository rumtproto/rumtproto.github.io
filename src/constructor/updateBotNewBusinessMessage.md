---
title: "updateBotNewBusinessMessage"
original: "https://core.telegram.org/constructor/updateBotNewBusinessMessage"
section: ref
kind: constructor
description: "Сообщение получено через подключённый бизнес-чат »."
layout: layout.njk
---

# updateBotNewBusinessMessage

Сообщение получено через [подключённый бизнес-чат »](/api/bots/connected-business-bots/).

```
updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор подключения.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Новое сообщение.</td></tr><tr><td><strong>reply_to_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Message">Message</a></td><td>Сообщение, на которое отвечает <code>message</code>.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
