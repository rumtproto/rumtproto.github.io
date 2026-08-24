---
title: "sendMessageTextDraftAction"
original: "https://core.telegram.org/constructor/sendMessageTextDraftAction"
section: ref
kind: constructor
description: "Используется ботами для реализации потоковой передачи сообщений »."
layout: layout.njk
---

# sendMessageTextDraftAction

Используется ботами для реализации [потоковой передачи сообщений »](/api/bots/ai/#live-response-streaming).

```
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Идентификатор живого черновика: используется графическими клиентами для небольшого изменения способа отрисовки, подробнее см. <a href="/api/bots/ai#live-response-streaming">здесь »</a>. Подробнее о дедупликации случайных идентификаторов и сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Содержимое актуального черновика.</td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)

### Связанные страницы

#### [Возможности ИИ для ботов](/api/bots/ai/)

Боты Telegram предлагают ряд возможностей для ИИ-чатботов.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
