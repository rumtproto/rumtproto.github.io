---
title: "starsGiveawayOption (конструктор)"
original: "https://core.telegram.org/constructor/starsGiveawayOption"
section: ref
kind: constructor
layout: layout.njk
---

# starsGiveawayOption

*Конструктор из схемы TL.*

> Contains info about a [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways) option.

## Определение TL

```
starsGiveawayOption#94ce852a flags:# extended:flags.0?true default:flags.1?true stars:long yearly_boosts:int store_product:flags.2?string currency:string amount:long winners:Vector<StarsGiveawayWinnersOption> = StarsGiveawayOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| extended | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this option must only be shown in the full list of giveaway options (i.e. they must be added to the list only when the user clicks on the expand button). |
| default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, this option must be pre-selected by default in the option list. |
| stars | [long](/type/long/) | The number of Telegram Stars that will be distributed among winners |
| yearly_boosts | [int](/type/int/) | Number of times the chat will be boosted for one year if the [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/).boost_peer flag is populated |
| store_product | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Identifier of the store product associated with the option, official apps only. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| winners | [Vector](https://core.telegram.org/type/Vector%20t)<[StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/)> | Allowed options for the number of giveaway winners. |

## Тип

[StarsGiveawayOption](/type/StarsGiveawayOption/)

## Related pages

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Used to pay for a [star giveaway, see here »](https://core.telegram.org/api/giveaways#star-giveaways) for more info.

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
