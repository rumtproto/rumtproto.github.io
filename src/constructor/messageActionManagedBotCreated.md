---
title: "messageActionManagedBotCreated"
original: "https://core.telegram.org/constructor/messageActionManagedBotCreated"
section: ref
kind: constructor
description: "Сервисное сообщение, отправляемое пользователем боту-менеджеру, когда через него создаётся новый управляемый бот » вызовом messages.sendBotRequestedPeer с…"
layout: layout.njk
---

# messageActionManagedBotCreated

Сервисное сообщение, отправляемое пользователем боту-менеджеру, когда через него создаётся новый [управляемый бот »](/api/bots/managed-bots/) вызовом [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) с [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/); подробнее см. [здесь »](/api/bots/buttons/#requesting-a-managed-bot).

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор только что созданного управляемого бота</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

#### [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/)

Используется в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) [ботом-менеджером](/api/bots/managed-bots/), чтобы попросить пользователя создать новый [управляемый бот »](/api/bots/managed-bots/); подробнее см. [здесь »](/api/bots/buttons/#requesting-a-managed-bot).

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
