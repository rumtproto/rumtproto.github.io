---
title: "inputInvoicePremiumGiftCode (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftCode"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoicePremiumGiftCode

*Конструктор из схемы TL.*

> Used if the user wishes to start a channel/supergroup [giveaway](https://core.telegram.org/api/giveaways) or send some [giftcodes](https://core.telegram.org/api/giveaways) to members of a channel/supergroup, in exchange for [boosts](https://core.telegram.org/api/boost).

## Определение TL

```
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | Should be populated with [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/) for [giveaways](https://core.telegram.org/api/giveaways) and [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) for [gifts](https://core.telegram.org/api/giveaways). |
| option | [PremiumGiftCodeOption](/type/PremiumGiftCodeOption/) | Should be populated with one of the giveaway options returned by [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/), see the [giveaways »](https://core.telegram.org/api/giveaways) documentation for more info. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/)

Used to pay for a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/)

Used to gift [Telegram Premium](https://core.telegram.org/api/premium) subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see [here »](https://core.telegram.org/api/giveaways) for more info on giveaways and gifts.

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
