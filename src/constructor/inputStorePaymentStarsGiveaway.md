---
title: "inputStorePaymentStarsGiveaway (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGiveaway"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentStarsGiveaway

*Конструктор из схемы TL.*

> Used to pay for a [star giveaway, see here »](https://core.telegram.org/api/giveaways#star-giveaways) for more info.

## Определение TL

```
inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| only_new_subscribers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, only new subscribers starting from the giveaway creation date will be able to participate to the giveaway. |
| winners_are_visible | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, giveaway winners are public and will be listed in a [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/) message that will be automatically sent to the channel once the giveaway ends. |
| stars | [long](/type/long/) | Total number of Telegram Stars being given away (each user will receive stars/users stars). |
| boost_peer | [InputPeer](/type/InputPeer/) | The channel/supergroup starting the giveaway, that the user must join to participate, that will receive the giveaway [boosts](https://core.telegram.org/api/boost); see [here »](https://core.telegram.org/api/giveaways) for more info on giveaways. |
| additional_peers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Additional channels that the user must join to participate to the giveaway can be specified here. |
| countries_iso2 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The set of users that can participate to the giveaway can be restricted by passing here an explicit whitelist of up to [giveaway_countries_max](https://core.telegram.org/api/config#giveaway-countries-max) countries, specified as two-letter ISO 3166-1 alpha-2 country codes. |
| prize_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Can contain a textual description of additional giveaway prizes. |
| random_id | [long](/type/long/) | Random ID to avoid resending the giveaway. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| until_date | [int](/type/int/) | The end date of the giveaway, must be at most [giveaway_period_max](https://core.telegram.org/api/config#giveaway-period-max) seconds in the future; see [here »](https://core.telegram.org/api/giveaways) for more info on giveaways. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| users | [int](/type/int/) | Number of winners. |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

## Related pages

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

A [giveaway](https://core.telegram.org/api/giveaways) with public winners has finished, this constructor contains info about the winners.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Bot Payments API](https://core.telegram.org/bots/payments)
