---
title: "messages.requestAppWebView"
original: "https://core.telegram.org/method/messages.requestAppWebView"
section: ref
kind: method
description: "Открыть mini app бота по прямой ссылке на Mini App, передав сведения о пользователе после его подтверждения."
layout: layout.njk
---

# messages.requestAppWebView

[@term:Mini App] Открыть [mini app бота](https://core.telegram.org/bots/webapps) по [прямой ссылке на Mini App](/api/links/#direct-mini-app-links), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestAppWebView#53618bce flags:# write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = WebViewResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если бот запрашивает разрешение отправлять пользователю сообщения, как описано в документации по <a href="/api/links#direct-mini-app-links">прямым глубоким ссылкам на Mini App</a>, и пользователь согласился.</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в компактном режиме (в отличие от обычного и полноэкранного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#direct-mini-app-links">прямой глубокой ссылки на Mini App</a> равен <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в полноэкранном режиме (в отличие от компактного и обычного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#direct-mini-app-links">прямой глубокой ссылки на Mini App</a> равен <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Если клиент нажал на ссылку в чате Telegram, передайте информацию о пире этого чата; иначе передайте информацию о пире бота.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/InputBotApp">InputBotApp</a></td><td>Приложение, полученное вызовом <a href="/method/messages.getBotApp">messages.getBotApp</a>, как описано в документации по <a href="/api/links#direct-mini-app-links">прямым глубоким ссылкам на Mini App</a>.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если параметр строки запроса <code>startapp</code> присутствует в <a href="/api/links#direct-mini-app-links">прямой ссылке на Mini App</a>, передайте его в <code>start_param</code>.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/DataJSON">DataJSON</a></td><td><a href="/api/bots/webapps#theme-parameters">Параметры темы оформления »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Краткое имя приложения; 0–64 латинские буквы, цифры и подчёркивания</td></tr></tbody></table>

### Результат

[WebViewResult](/type/WebViewResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_APP_BOT_INVALID</td><td>Значение bot_id, переданное в конструкторе inputBotAppShortName, недействительно.</td></tr><tr><td>400</td><td>BOT_APP_INVALID</td><td>Указанное приложение бота недействительно.</td></tr><tr><td>400</td><td>BOT_APP_SHORTNAME_INVALID</td><td>Указанное короткое имя приложения бота недействительно.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>THEME_PARAMS_INVALID</td><td>Указанное поле <code>theme_params</code> недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [messages.getBotApp](/method/messages.getBotApp/)

Получить сведения о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Сообщить серверу (со стороны пользователя), что пользователь всё ещё работает с веб-приложением.

Если метод возвращает ошибку `QUERY_ID_INVALID`, веб-представление необходимо закрыть.
