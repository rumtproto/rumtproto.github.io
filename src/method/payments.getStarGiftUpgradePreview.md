---
title: "payments.getStarGiftUpgradePreview"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradePreview"
section: ref
kind: method
description: "Получить предпросмотр возможных атрибутов (выбираемых случайно), которые подарок » может получить после улучшения до коллекционного подарка »; подробнее см. здесь »."
layout: layout.njk
---

# payments.getStarGiftUpgradePreview

Получить предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts).

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
---functions---
payments.getStarGiftUpgradePreview#9c9abcb1 gift_id:long = payments.StarGiftUpgradePreview;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Подарок для улучшения.</td></tr></tbody></table>

### Результат

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>Полученный подарок можно улучшить до коллекционного только в том случае, если установлен флаг <a href="/constructor/messageActionStarGift">messageActionStarGift</a>/<a href="/constructor/savedStarGift">savedStarGift</a>.<code>can_upgrade</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [savedStarGift](/constructor/savedStarGift/)

Представляет [подарок](/api/gifts/), принадлежащий пиру.
