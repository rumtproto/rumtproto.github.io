---
title: "requestedPeerUser"
original: "https://core.telegram.org/constructor/requestedPeerUser"
section: ref
kind: constructor
description: "Информация о пользователе, которым пользователь поделился с текущим авторизованным ботом с помощью messages.sendBotRequestedPeer."
layout: layout.njk
---

# requestedPeerUser

Информация о пользователе, которым пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Все поля, кроме идентификатора, необязательны и заполняются, если присутствуют у выбранного пользователя, в соответствии с параметрами запросившего [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

```
requestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя.</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Имя.</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Фамилия.</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Имя пользователя.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Photo">Photo</a></td><td>Фотография профиля.</td></tr></tbody></table>

### Тип

[RequestedPeer](/type/RequestedPeer/)

### Связанные страницы

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) в [клавиатуре ответа](https://core.telegram.org/bots/features#keyboards) в личном чате.

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).
