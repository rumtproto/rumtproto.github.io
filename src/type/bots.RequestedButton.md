---
title: "bots.RequestedButton"
original: "https://core.telegram.org/type/bots.RequestedButton"
section: ref
kind: type
description: "Содержит идентификатор запроса Mini App, сформированный, когда бот подготавливает кнопку запроса пира; подробнее см. здесь »."
layout: layout.njk
---

# Bots.RequestedButton

[@term:Mini App] Содержит идентификатор запроса Mini App, сформированный, когда бот подготавливает кнопку запроса пира; подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

```
Method schema is available as of layer 224. Switch »
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/bots.requestedButton">bots.requestedButton</a></td><td>Содержит идентификатор запроса, который бот должен передать в <a href="/api/bots/webapps">Mini App</a> после подготовки кнопки запроса пира с помощью <a href="/method/bots.requestWebViewButton">bots.requestWebViewButton</a>; подробнее см. <a href="/api/bots/buttons#requesting-peers-via-mini-apps">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.requestWebViewButton">bots.requestWebViewButton</a></td><td>Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для <a href="/api/bots/webapps">Mini App</a>; подробнее <a href="/api/bots/buttons#requesting-peers-via-mini-apps">см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
