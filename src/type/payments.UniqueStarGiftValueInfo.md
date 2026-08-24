---
title: "payments.UniqueStarGiftValueInfo"
original: "https://core.telegram.org/type/payments.UniqueStarGiftValueInfo"
section: ref
kind: type
description: "Информация о стоимости коллекционного подарка »."
layout: layout.njk
---

# payments.UniqueStarGiftValueInfo

Информация о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;

---functions---

payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGiftValueInfo">payments.uniqueStarGiftValueInfo</a></td><td>Информация о стоимости <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGiftValueInfo">payments.getUniqueStarGiftValueInfo</a></td><td>Получить информацию о стоимости <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
