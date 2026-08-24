---
title: "messages.setBotCallbackAnswer"
original: "https://core.telegram.org/method/messages.setBotCallbackAnswer"
section: ref
kind: method
description: "Задать ответ обратного вызова на нажатие кнопки пользователем (только для ботов)"
layout: layout.njk
---

# messages.setBotCallbackAnswer

Задать ответ обратного вызова на нажатие кнопки пользователем (только для ботов)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotCallbackAnswer#d58f130a flags:# alert:flags.1?true query_id:long message:flags.0?string url:flags.2?string cache_time:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>alert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли показать сообщение всплывающим окном, а не всплывающим уведомлением</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Всплывающее окно, которое нужно показать</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>URL для открытия</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия кеша</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>Указанный идентификатор запроса недействителен.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
