---
title: "payments.toggleChatStarGiftNotifications"
original: "https://core.telegram.org/method/payments.toggleChatStarGiftNotifications"
section: ref
kind: method
description: "Включает или отключает получение уведомлений при каждом получении подарка » указанным каналом; может вызываться только администраторами с правом администратора post_messages."
layout: layout.njk
---

# payments.toggleChatStarGiftNotifications

Включает или отключает получение уведомлений при каждом получении [подарка »](/api/gifts/) указанным каналом; может вызываться только администраторами с [правом администратора](/constructor/chatAdminRights/) `post_messages`.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.toggleChatStarGiftNotifications#60eaefa1 flags:# enabled:flags.0?true peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включить или отключить получение уведомлений в виде сервисных сообщений <a href="/constructor/messageActionStarGiftUnique">messageActionStarGiftUnique</a> и <a href="/constructor/messageActionStarGift">messageActionStarGift</a> от канала.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал, для которого следует включить или отключить уведомления.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

[Подарок »](/api/gifts/) был улучшен до [коллекционного подарка »](/api/gifts/#collectible-gifts).

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [chatAdminRights](/constructor/chatAdminRights/)

Представляет права администратора в [канале или супергруппе](/api/channel/).
