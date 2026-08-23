---
title: "starsGiftOption (конструктор)"
original: "https://core.telegram.org/constructor/starsGiftOption"
section: ref
kind: constructor
layout: layout.njk
---

# starsGiftOption

*Конструктор из схемы TL.*

> [Telegram Stars gift option](https://core.telegram.org/api/stars#buying-or-gifting-stars).

## Определение TL

```
starsGiftOption#5e0589f1 flags:# extended:flags.1?true stars:long store_product:flags.0?string currency:string amount:long = StarsGiftOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| extended | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the option must only be shown in the full list of topup options. |
| stars | [long](/type/long/) | Amount of Telegram stars. |
| store_product | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Identifier of the store product associated with the option, official apps only. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[StarsGiftOption](/type/StarsGiftOption/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
