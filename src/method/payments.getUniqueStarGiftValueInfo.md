---
title: "payments.getUniqueStarGiftValueInfo"
original: "https://core.telegram.org/method/payments.getUniqueStarGiftValueInfo"
section: ref
kind: method
description: "Получить информацию о стоимости коллекционного подарка »."
layout: layout.njk
---

# payments.getUniqueStarGiftValueInfo

Получить информацию о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;
---functions---
payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] <code>slug</code> из <a href="/constructor/starGiftUnique">starGiftUnique</a>.</td></tr></tbody></table>

### Результат

[payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
