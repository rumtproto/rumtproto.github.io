---
title: "updateBotPrecheckoutQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBotPrecheckoutQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotPrecheckoutQuery

*Конструктор из схемы TL.*

> This object contains information about an incoming pre-checkout query.

## Определение TL

```
updateBotPrecheckoutQuery#8caa9a96 flags:# query_id:long user_id:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string currency:string total_amount:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Unique query identifier |
| user_id | [long](/type/long/) | User who sent the query |
| payload | [bytes](/type/bytes/) | Bot specified invoice payload |
| info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Order info provided by the user |
| shipping_option_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Identifier of the shipping option chosen by the user |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| total_amount | [long](/type/long/) | Total amount in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
