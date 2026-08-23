---
title: "inputStorePaymentGiftPremium (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentGiftPremium"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentGiftPremium

*Конструктор из схемы TL.*

> Info about a gifted Telegram Premium purchase

## Определение TL

```
inputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | The user to which the Telegram Premium subscription was gifted |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
