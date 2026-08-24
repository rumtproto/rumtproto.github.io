---
title: "messages.getBotCallbackAnswer"
original: "https://core.telegram.org/method/messages.getBotCallbackAnswer"
section: ref
kind: method
description: "Нажать инлайн-кнопку обратного вызова и получить ответ от бота"
layout: layout.njk
---

# messages.getBotCallbackAnswer

Нажать инлайн-кнопку обратного вызова и получить ответ от бота

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;
---functions---
messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>game</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это кнопкой «играть в игру»</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Куда была отправлена инлайн-клавиатура</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с инлайн-клавиатурой</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Данные для callback-запроса</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Для кнопок, <a href="/constructor/keyboardButtonCallback">требующих подтверждения личности паролем двухфакторной аутентификации</a>, — полезная нагрузка SRP, сформированная с помощью <a href="/api/srp">SRP</a>.</td></tr></tbody></table>

### Результат

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_RESPONSE_TIMEOUT</td><td>При получении данных от бота истекло время ожидания.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Зашифрованные данные недействительны.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>Перед выполнением этой операции вы обязаны <a href="/api/srp">включить двухфакторную аутентификацию</a>.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>-503</td><td>Timeout</td><td>Тайм-аут при получении данных.</td></tr></tbody></table>

### Связанные страницы

#### [keyboardButtonCallback](/constructor/keyboardButtonCallback/)

Callback-кнопка

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты отправляют боту `data`, при необходимости передавая [параметры 2FA SRP](/api/srp/) пользователя для подтверждения личности, как описано в разделе [callback-запросов](/api/bots/buttons/#callback-queries).

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
