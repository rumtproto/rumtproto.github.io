---
title: "payments.convertStarGift"
original: "https://core.telegram.org/method/payments.convertStarGift"
section: ref
kind: method
description: "Преобразовать полученный подарок » в Telegram Stars: подарок будет безвозвратно уничтожен и превращён в starGift.convert_stars Telegram Stars, которые будут зачислены на баланс…"
layout: layout.njk
---

# payments.convertStarGift

Преобразовать [полученный подарок »](/api/gifts/) в Telegram Stars: подарок будет безвозвратно уничтожен и превращён в [starGift](/constructor/starGift/).`convert_stars` [Telegram Stars](/api/stars/), которые будут зачислены на баланс пользователя.

Обратите внимание, что значение [starGift](/constructor/starGift/).`convert_stars` будет меньше цены покупки подарка ([starGift](/constructor/starGift/).`stars`), если он изначально был куплен за Telegram Stars, приобретённые давно.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.convertStarGift#74bf076b stargift:InputSavedStarGift = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Подарок для обмена.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr><tr><td>400</td><td>STARGIFT_PEER_INVALID</td><td>Указанное значение inputSavedStarGiftChat.peer недействительно.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
