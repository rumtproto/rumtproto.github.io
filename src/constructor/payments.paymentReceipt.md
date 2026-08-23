---
title: "payments.paymentReceipt (конструктор)"
original: "https://core.telegram.org/constructor/payments.paymentReceipt"
section: ref
kind: constructor
layout: layout.njk
---

# payments.paymentReceipt

*Конструктор из схемы TL.*

> Receipt

## Определение TL

```
payments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| date | [int](/type/int/) | Date of generation |
| bot_id | [long](/type/long/) | Bot ID |
| provider_id | [long](/type/long/) | Provider ID |
| title | [string](/type/string/) | Title |
| description | [string](/type/string/) | Description |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[WebDocument](/type/WebDocument/) | Photo |
| invoice | [Invoice](/type/Invoice/) | Invoice |
| info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Info |
| shipping | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ShippingOption](/type/ShippingOption/) | Selected shipping option |
| tip_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | Tipped amount |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| total_amount | [long](/type/long/) | Total amount in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| credentials_title | [string](/type/string/) | Payment credential name |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |

## Тип

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
