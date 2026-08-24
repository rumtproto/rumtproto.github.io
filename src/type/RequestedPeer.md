---
title: "RequestedPeer"
original: "https://core.telegram.org/type/RequestedPeer"
section: ref
kind: type
description: "Информация о пире, которым пользователь поделился с текущим авторизованным ботом с помощью messages.sendBotRequestedPeer."
layout: layout.njk
---

# RequestedPeer

Информация о пире, которым пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

```
requestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChat#7307544f flags:# chat_id:long title:flags.0?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/requestedPeerUser">requestedPeerUser</a></td><td>Информация о пользователе, которым пользователь поделился с текущим авторизованным ботом с помощью <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>Все поля, кроме идентификатора, необязательны и заполняются, если присутствуют у выбранного пользователя, в соответствии с параметрами запросившего их <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChat">requestedPeerChat</a></td><td>Информация о <a href="/api/channel">чате</a>, которым пользователь поделился с текущим авторизованным ботом с помощью <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>Все поля, кроме идентификатора, необязательны и заполняются, если присутствуют у выбранного чата, в соответствии с параметрами запросившего их <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChannel">requestedPeerChannel</a></td><td>Информация о <a href="/api/channel">канале или супергруппе</a>, которыми пользователь поделился с текущим авторизованным ботом с помощью <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>Все поля, кроме идентификатора, необязательны и заполняются, если присутствуют у выбранного канала или супергруппы, в соответствии с параметрами запросившего их <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr></tbody></table>

### Связанные страницы

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).
