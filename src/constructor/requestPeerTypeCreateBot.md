---
title: "requestPeerTypeCreateBot"
original: "https://core.telegram.org/constructor/requestPeerTypeCreateBot"
section: ref
kind: constructor
description: "Используется в keyboardButtonRequestPeer ботом-менеджером, чтобы попросить пользователя создать новый управляемый бот »; подробнее см. здесь »."
layout: layout.njk
---

# requestPeerTypeCreateBot

Используется в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) [ботом-менеджером](/api/bots/managed-bots/), чтобы попросить пользователя создать новый [управляемый бот »](/api/bots/managed-bots/); подробнее см. [здесь »](/api/bots/buttons/#requesting-a-managed-bot).

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot_managed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает создание управляемого бота; должно быть установлено всегда.</td></tr><tr><td><strong>suggested_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если установлено, имя, которое нужно подставить в форму создания управляемого бота</td></tr><tr><td><strong>suggested_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если установлено, имя пользователя, которым нужно предзаполнить форму создания управляемого бота</td></tr></tbody></table>

### Тип

[RequestPeerType](/type/RequestPeerType/)

### Связанные страницы

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Доступно только в личных чатах, в [клавиатурах ответа](/constructor/replyKeyboardMarkup/).

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
