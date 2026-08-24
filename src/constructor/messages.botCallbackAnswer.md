---
title: "messages.botCallbackAnswer"
original: "https://core.telegram.org/constructor/messages.botCallbackAnswer"
section: ref
kind: constructor
description: "Ответ на callback-запрос, отправленный ботом в ответ на нажатие кнопки"
layout: layout.njk
---

# messages.botCallbackAnswer

Ответ на callback-запрос, отправленный ботом в ответ на нажатие кнопки

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>alert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли показать пользователю диалоговое окно вместо всплывающего уведомления</td></tr><tr><td><strong>has_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Присутствует ли URL</td></tr><tr><td><strong>native_ui</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Следует ли показывать игры в WebView или в нативном интерфейсе.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Уведомление, которое нужно показать</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>URL для открытия</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Как долго следует хранить этот ответ в кеше</td></tr></tbody></table>

### Тип

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)
