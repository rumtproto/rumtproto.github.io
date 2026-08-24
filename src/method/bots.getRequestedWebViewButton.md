---
title: "bots.getRequestedWebViewButton"
original: "https://core.telegram.org/method/bots.getRequestedWebViewButton"
section: ref
kind: method
description: "Получить кнопку запроса пира, подготовленную ботом для Mini App с помощью bots.requestWebViewButton; вызывается, когда Mini App генерирует событие web_app_request_chat; подробнее…"
layout: layout.njk
---

# bots.getRequestedWebViewButton

[@term:Mini App] Получить кнопку запроса пира, подготовленную ботом для [Mini App](/api/bots/webapps/) с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); вызывается, когда Mini App генерирует событие [`web_app_request_chat`](/api/web-events/#web-app-request-chat); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит Mini App</td></tr><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор запроса Mini App, взятый из события <a href="/api/web-events#web-app-request-chat"><code>web_app_request_chat</code></a>, поле <code>req_id</code></td></tr></tbody></table>

### Результат

[KeyboardButton](/type/KeyboardButton/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_ID_INVALID</td><td>Указанный идентификатор бота недействителен.</td></tr><tr><td>400</td><td>WEBAPP_REQ_ID_INVALID</td><td>Указанный webapp_req_id недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
