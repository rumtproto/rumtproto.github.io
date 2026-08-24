---
title: "messages.botResults"
original: "https://core.telegram.org/constructor/messages.botResults"
section: ref
kind: constructor
description: "Результат запроса к инлайн-боту"
layout: layout.njk
---

# messages.botResults

Результат запроса к инлайн-боту

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>gallery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли результат галереей изображений</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>[@term:next_offset] Следующее смещение, которое следует использовать при переходе по результатам</td></tr><tr><td><strong>switch_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InlineBotSwitchPM">InlineBotSwitchPM</a></td><td>Показывается как кнопка над остальным списком инлайн-результатов; при нажатии перенаправляет пользователя в личный чат с ботом с указанным стартовым параметром.</td></tr><tr><td><strong>switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InlineBotWebView">InlineBotWebView</a></td><td>[@term:Mini App] Показывается как кнопка над остальным списком инлайн-результатов; при нажатии открывает указанный <a href="/api/bots/webapps#inline-mode-mini-apps">Mini App в инлайн-режиме</a>.</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotInlineResult">BotInlineResult</a>&gt;</td><td>Результаты</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время кеширования результатов</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в результатах</td></tr></tbody></table>

### Тип

[messages.BotResults](/type/messages.BotResults/)

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
