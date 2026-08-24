---
title: "messages.requestSimpleWebView"
original: "https://core.telegram.org/method/messages.requestSimpleWebView"
section: ref
kind: method
description: "Открыть mini app бота."
layout: layout.njk
---

# messages.requestSimpleWebView

[@term:Mini App] Открыть [mini app бота](/api/bots/webapps/).

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>from_switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Было ли веб-приложение открыто нажатием кнопки <code>switch_webview</code>, отображаемой над списком инлайн-результатов, которые возвращает <a href="/method/messages.getInlineBotResults">messages.getInlineBotResults</a>.</td></tr><tr><td><strong>from_side_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если Mini App открывается из установленного <a href="/api/bots/attach">пункта бокового меню »</a>.</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Устарело.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Запрашивает открытие приложения в полноэкранном режиме.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит mini app</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>URL веб-приложения, если оно открывается из кнопки клавиатуры или инлайн-результата</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Устарело.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/DataJSON">DataJSON</a></td><td><a href="/api/bots/webapps#theme-parameters">Параметры темы оформления »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Краткое имя приложения; 0–64 латинские буквы, цифры и подчёркивания</td></tr></tbody></table>

### Результат

[WebViewResult](/type/WebViewResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr></tbody></table>

### Связанные страницы

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Запрос к инлайн-боту

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
