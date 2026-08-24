---
title: "updateBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateBotCallbackQuery"
section: ref
kind: constructor
description: "Нажата callback-кнопка, и данные кнопки отправлены боту, который её создал"
layout: layout.njk
---

# updateBotCallbackQuery

Нажата callback-кнопка, и данные кнопки отправлены боту, который её создал

```
updateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, нажавшего кнопку</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Чат, в который была отправлена инлайн-клавиатура</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Глобальный идентификатор, однозначно соответствующий чату, в который было отправлено сообщение с callback-кнопкой. Полезен для рекордов в играх.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Данные для callback-запроса</td></tr><tr><td><strong>game_short_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Короткое имя игры, которую нужно вернуть; служит её уникальным идентификатором</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
