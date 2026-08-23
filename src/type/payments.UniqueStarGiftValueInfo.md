---
title: "payments.UniqueStarGiftValueInfo (тип)"
original: "https://core.telegram.org/type/payments.UniqueStarGiftValueInfo"
section: ref
kind: type
layout: layout.njk
---

# payments.UniqueStarGiftValueInfo

*Тип из схемы TL.*

> Information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;

---functions---

payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.uniqueStarGiftValueInfo](/constructor/payments.uniqueStarGiftValueInfo/) | Information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Методы

| Method | Описание |
|---|---|
| [payments.getUniqueStarGiftValueInfo](/method/payments.getUniqueStarGiftValueInfo/) | Get information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
