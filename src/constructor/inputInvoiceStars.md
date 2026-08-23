---
title: "inputInvoiceStars (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStars"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStars

*Конструктор из схемы TL.*

> Used to top up the [Telegram Stars](https://core.telegram.org/api/stars) balance of the current account or someone else's account, or to start a [Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways).

## Определение TL

```
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | An [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/), [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/) or [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/). |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Used to pay for a [star giveaway, see here »](https://core.telegram.org/api/giveaways#star-giveaways) for more info.

#### [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/)

Used to top up the [Telegram Stars balance](https://core.telegram.org/api/stars) of the current account.

#### [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/)

Used to gift [Telegram Stars](https://core.telegram.org/api/stars) to a friend.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
