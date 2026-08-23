---
title: "inputStorePaymentStarsGift (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGift"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentStarsGift

*Конструктор из схемы TL.*

> Used to gift [Telegram Stars](https://core.telegram.org/api/stars) to a friend.

## Определение TL

```
inputStorePaymentStarsGift#1d741ef7 user_id:InputUser stars:long currency:string amount:long = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | The user to which the stars should be gifted. |
| stars | [long](/type/long/) | Amount of stars to gift |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
