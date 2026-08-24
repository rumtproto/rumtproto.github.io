---
title: "requestedPeerChannel"
original: "https://core.telegram.org/constructor/requestedPeerChannel"
section: ref
kind: constructor
description: "Информация о канале или супергруппе, которыми пользователь поделился с текущим авторизованным ботом с помощью messages.sendBotRequestedPeer."
layout: layout.njk
---

# requestedPeerChannel

Информация о [канале или супергруппе](/api/channel/), которыми пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Все поля, кроме идентификатора, необязательны и заполняются, если присутствуют у выбранного канала или супергруппы, в соответствии с параметрами запросившего [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

```
requestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала или супергруппы.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Название канала или супергруппы.</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Имя пользователя канала или супергруппы.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Photo">Photo</a></td><td>Фотография канала или супергруппы.</td></tr></tbody></table>

### Тип

[RequestedPeer](/type/RequestedPeer/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) в [клавиатуре ответа](https://core.telegram.org/bots/features#keyboards) в личном чате.

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).
