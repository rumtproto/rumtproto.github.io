---
title: "messages.botApp"
original: "https://core.telegram.org/constructor/messages.botApp"
section: ref
kind: constructor
description: "Содержит информацию о Mini App с прямой ссылкой"
layout: layout.njk
---

# messages.botApp

[@term:Mini App] Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Не использовалось ли веб-приложение пользователем ни разу, из-за чего перед его открытием необходимо запросить подтверждение.</td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Бот запрашивает разрешение отправлять сообщения пользователю: если пользователь согласен, установите флаг <code>write_allowed</code> при вызове <a href="/method/messages.requestAppWebView">messages.requestAppWebView</a>.</td></tr><tr><td><strong>has_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Устаревший флаг, можно игнорировать.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/BotApp">BotApp</a></td><td>Сведения о приложении бота</td></tr></tbody></table>

### Тип

[messages.BotApp](/type/messages.BotApp/)

### Связанные страницы

#### [messages.requestAppWebView](/method/messages.requestAppWebView/)

Открыть [mini app бота](https://core.telegram.org/bots/webapps) по [прямой ссылке на Mini App](/api/links/#direct-mini-app-links), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
