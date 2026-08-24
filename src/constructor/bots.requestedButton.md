---
title: "bots.requestedButton"
original: "https://core.telegram.org/constructor/bots.requestedButton"
section: ref
kind: constructor
description: "Содержит идентификатор запроса, который бот должен передать в Mini App после подготовки кнопки запроса пира с помощью bots.requestWebViewButton; подробнее см. здесь »."
layout: layout.njk
---

# bots.requestedButton

[@term:Mini App] Содержит идентификатор запроса, который бот должен передать в [Mini App](/api/bots/webapps/) после подготовки кнопки запроса пира с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор запроса Mini App, который бот передаёт в Mini App, а затем обратно в <a href="/method/bots.getRequestedWebViewButton">bots.getRequestedWebViewButton</a> и <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a></td></tr></tbody></table>

### Тип

[bots.RequestedButton](/type/bots.RequestedButton/)

### Связанные страницы

#### [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/)

Получить кнопку запроса пира, подготовленную ботом для [Mini App](/api/bots/webapps/) с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); вызывается, когда Mini App генерирует событие [`web_app_request_chat`](/api/web-events/#web-app-request-chat); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
