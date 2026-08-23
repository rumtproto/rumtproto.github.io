---
title: "payments.uniqueStarGiftValueInfo (конструктор)"
original: "https://core.telegram.org/constructor/payments.uniqueStarGiftValueInfo"
section: ref
kind: constructor
layout: layout.njk
---

# payments.uniqueStarGiftValueInfo

*Конструктор из схемы TL.*

> Information about the value of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| last_sale_on_fragment | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the last sale was completed on Fragment. |
| value_is_average | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | If set, the value is calculated from the average value of sold gifts of the same type. Otherwise, it is based on the sale price of the gift. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code (a localized fiat currency used to represent prices and price estimations in this constructor). |
| value | [long](/type/long/) | Estimated value of the gift, in the smallest unit of the currency specified in currency. |
| initial_sale_date | [int](/type/int/) | Initial purchase date of the gift. |
| initial_sale_stars | [long](/type/long/) | Initial purchase price in Stars. |
| initial_sale_price | [long](/type/long/) | Initial purchase price in the smallest unit of the currency specified in currency (automatically converted from initial_sale_stars). |
| last_sale_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Last resale date of the gift. |
| last_sale_price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Last resale price, in the smallest unit of the currency specified in currency. |
| floor_price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | The current minimum price of collectible gifts of the same type, in the smallest unit of the currency specified in currency. |
| average_price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | The current average sale price of collectible gifts of the same type, in the smallest unit of the currency specified in currency. |
| listed_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Number of gifts of the same type currently being resold on Telegram. |
| fragment_listed_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Number of gifts of the same type currently being resold on fragment. |
| fragment_listed_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | Fragment link to the listing of gifts of the same type currently being resold on fragment. |

## Тип

[payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
