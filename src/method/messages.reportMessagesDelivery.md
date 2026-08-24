---
title: "messages.reportMessagesDelivery"
original: "https://core.telegram.org/method/messages.reportMessagesDelivery"
section: ref
kind: method
description: "Используется для проверочных сообщений Telegram Gateway »: сообщает серверу, что одно или несколько сообщений были получены клиентом, если этого требует флаг…"
layout: layout.njk
---

# messages.reportMessagesDelivery

Используется для [проверочных сообщений Telegram Gateway »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): сообщает серверу, что одно или несколько [сообщений](/constructor/message/) были получены клиентом, если этого требует флаг [message](/constructor/message/).**report\_delivery\_until\_date** или равнозначный флаг в [push-уведомлениях](/api/push-updates/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportMessagesDelivery#5a6d7395 flags:# push:flags.0?true peer:InputPeer id:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>push</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Обязано устанавливаться, если сообщения были получены из <a href="/api/push-updates">push-уведомления</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором были получены сообщения.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы полученных сообщений.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их

#### [message](/constructor/message/)

Сообщение
