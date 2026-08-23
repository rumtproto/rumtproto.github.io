---
title: "inputStorePaymentPremiumGiftCode (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumGiftCode"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentPremiumGiftCode

*Конструктор из схемы TL.*

> Used to gift [Telegram Premium](https://core.telegram.org/api/premium) subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see [here »](https://core.telegram.org/api/giveaways) for more info on giveaways and gifts.

## Определение TL

```
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | The users that will receive the [Telegram Premium](https://core.telegram.org/api/premium) subscriptions. |
| boost_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If set, the gifts will be sent on behalf of a channel/supergroup we are an admin of, which will also assign some [boosts](https://core.telegram.org/api/boost) to it. Otherwise, the gift will be sent directly from the currently logged in user, and we will gain some extra [boost slots](https://core.telegram.org/api/boost). See [here »](https://core.telegram.org/api/giveaways) for more info on giveaways and gifts. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Message attached with the gift |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Bot Payments API](https://core.telegram.org/bots/payments)
