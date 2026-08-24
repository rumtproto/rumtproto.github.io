---
title: "webViewResultUrl"
original: "https://core.telegram.org/constructor/webViewResultUrl"
section: ref
kind: constructor
description: "Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе"
layout: layout.njk
---

# webViewResultUrl

Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>fullsize</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, приложение должно быть открыто в полноразмерном режиме, а не в компактном.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, приложение должно быть открыто в полноэкранном режиме</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>[@term:Mini App] Идентификатор сессии webview (возвращается только для <a href="/api/bots/webapps#inline-button-mini-apps">mini app из инлайн-кнопок</a>, <a href="/api/bots/webapps#menu-button-mini-apps">mini app из кнопки меню</a>, <a href="/api/bots/webapps#attachment-menu-mini-apps">mini app из меню вложений</a>).</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL webview, который нужно открыть</td></tr></tbody></table>

### Тип

[WebViewResult](/type/WebViewResult/)

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
