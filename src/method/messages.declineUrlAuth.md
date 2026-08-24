---
title: "messages.declineUrlAuth"
original: "https://core.telegram.org/method/messages.declineUrlAuth"
section: ref
kind: method
description: "Отклонить входящий запрос авторизации OAuth », сообщив серверу, что пользователь отказал в запросе на вход."
layout: layout.njk
---

# messages.declineUrlAuth

Отклонить входящий [запрос авторизации OAuth »](/api/url-authorization/#oauth-authorization), сообщив серверу, что пользователь отказал в запросе на вход.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.declineUrlAuth#35436bbc url:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Глубокая ссылка OAuth из <a href="/api/push-updates#oauth-request">push-уведомления OAUTH_REQUEST</a> или из <a href="/api/web-events#oauth-request">веб-события <code>oauth_request</code></a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr></tbody></table>

### Связанные страницы

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.
