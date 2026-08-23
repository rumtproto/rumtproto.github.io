---
title: "premiumGiftCodeOption (конструктор)"
original: "https://core.telegram.org/constructor/premiumGiftCodeOption"
section: ref
kind: constructor
layout: layout.njk
---

# premiumGiftCodeOption

*Конструктор из схемы TL.*

> Contains info about a [giveaway/gift](https://core.telegram.org/api/giveaways) option.

## Определение TL

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| users | [int](/type/int/) | Number of users which will be able to activate the gift codes. |
| months | [int](/type/int/) | Duration in months of each gifted [Telegram Premium](https://core.telegram.org/api/premium) subscription. |
| store_product | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Identifier of the store product associated with the option, official apps only. |
| store_quantity | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Number of times the store product must be paid |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
