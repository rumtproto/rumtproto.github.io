---
title: "messageActionRequestedPeerSentMe"
original: "https://core.telegram.org/constructor/messageActionRequestedPeerSentMe"
section: ref
kind: constructor
description: "Содержит информацию об одном или нескольких пирах, которыми пользователь поделился с нами (с ботом) после нажатия кнопки keyboardButtonRequestPeer (сервисное сообщение, полученное…"
layout: layout.njk
---

# messageActionRequestedPeerSentMe

Содержит информацию об одном или нескольких пирах, которыми пользователь поделился с нами (с ботом) после нажатия кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) (сервисное сообщение, полученное ботом).

```
messageActionRequestedPeerSentMe#93b31848 button_id:int peers:Vector<RequestedPeer> = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>button_id</code>, содержащийся в <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a></td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/RequestedPeer">RequestedPeer</a>&gt;</td><td>Информация о переданных пирах.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Доступно только в личных чатах, в [клавиатурах ответа](/constructor/replyKeyboardMarkup/).

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).
