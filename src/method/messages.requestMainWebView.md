---
title: "messages.requestMainWebView"
original: "https://core.telegram.org/method/messages.requestMainWebView"
section: ref
kind: method
description: "Открыть Main Mini App."
layout: layout.njk
---

# messages.requestMainWebView

[@term:Mini App] Открыть [Main Mini App](/api/bots/webapps/#main-mini-apps).

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestMainWebView#c9e01e7b flags:# compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser start_param:flags.1?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в компактном режиме (в отличие от обычного и полноэкранного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#main-mini-app-links">ссылки на основной Mini App</a> равен <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в полноэкранном режиме (в отличие от компактного и обычного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#main-mini-app-links">ссылки на основной Mini App</a> равен <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Открытый в данный момент чат; может иметь значение <a href="/constructor/inputPeerEmpty">inputPeerEmpty</a>, если сейчас не открыт ни один чат.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит главный mini app.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Параметр start, если открытие происходит по <a href="/api/links#main-mini-app-links">ссылке на главный Mini App »</a>.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/DataJSON">DataJSON</a></td><td><a href="/api/bots/webapps#theme-parameters">Параметры темы оформления »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Краткое имя приложения; 0–64 латинские буквы, цифры и подчёркивания</td></tr></tbody></table>

### Результат

[WebViewResult](/type/WebViewResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

Пустой конструктор, не задан ни пользователь, ни чат.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
