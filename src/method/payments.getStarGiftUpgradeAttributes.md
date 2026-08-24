---
title: "payments.getStarGiftUpgradeAttributes"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradeAttributes"
section: ref
kind: method
description: "Получает **полный** список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его превращения в коллекционный подарок »."
layout: layout.njk
---

# payments.getStarGiftUpgradeAttributes

Получает **полный** список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его превращения в [коллекционный подарок »](/api/gifts/#collectible-gifts).

Результат может также содержать конструкторы [starGiftAttributeModel](/constructor/starGiftAttributeModel/) с установленным флагом `crafted`: эти модели зарезервированы для [крафта »](/api/gifts/#crafting-collectible-gifts) и должны отфильтровываться из обычных предпросмотров улучшения (и наоборот).

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
---functions---
payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор базового неколлекционного подарка, из <a href="/constructor/starGift">starGift</a>.<code>id</code></td></tr></tbody></table>

### Результат

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

Модель [коллекционного подарка »](/api/gifts/#collectible-gifts).
