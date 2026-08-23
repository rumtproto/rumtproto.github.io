---
title: "messageActionPaymentSentMe (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPaymentSentMe"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPaymentSentMe

*Конструктор из схемы TL.*

> A user just sent a payment to me (a bot)

## Определение TL

```
messageActionPaymentSentMe#ffa00ccc flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge subscription_until_date:flags.4?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| recurring_init | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is the first payment of a recurring payment we just subscribed to |
| recurring_used | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this payment is part of a recurring payment |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| total_amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| payload | [bytes](/type/bytes/) | Bot specified invoice payload |
| info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Order info provided by the user |
| shipping_option_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Identifier of the shipping option chosen by the user |
| charge | [PaymentCharge](/type/PaymentCharge/) | Provider payment identifier |
| subscription_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Expiration date of the [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
