---
title: "updateBusinessBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateBusinessBotCallbackQuery"
section: ref
kind: constructor
description: "Была нажата callback-кнопка, отправленная через бизнес-подключение, и данные кнопки были отправлены боту, который её создал."
layout: layout.njk
---

# updateBusinessBotCallbackQuery

Была нажата callback-кнопка, отправленная через [бизнес-подключение](/api/bots/connected-business-bots/), и данные кнопки были отправлены боту, который её создал.

```
updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, нажавшего кнопку</td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/bots/connected-business-bots">Идентификатор бизнес-подключения</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Сообщение, содержащее клавиатуру (также содержит сведения о чате, в который оно было отправлено).</td></tr><tr><td><strong>reply_to_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Message">Message</a></td><td>Сообщение, на которое отвечает <code>message</code>.</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Глобальный идентификатор, однозначно соответствующий чату, в который было отправлено сообщение с callback-кнопкой. Полезен для рекордов в играх.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Данные для callback-запроса</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
