---
title: "payments.paymentReceiptStars (конструктор)"
original: "https://core.telegram.org/constructor/payments.paymentReceiptStars"
section: ref
kind: constructor
layout: layout.njk
---

# payments.paymentReceiptStars

*Конструктор из схемы TL.*

> Receipt for [payment made using Telegram Stars](https://core.telegram.org/api/stars).

## Определение TL

```
payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| date | [int](/type/int/) | Date of generation |
| bot_id | [long](/type/long/) | Bot ID |
| title | [string](/type/string/) | Title |
| description | [string](/type/string/) | Description |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[WebDocument](/type/WebDocument/) | Product photo |
| invoice | [Invoice](/type/Invoice/) | Invoice |
| currency | [string](/type/string/) | Currency, always XTR. |
| total_amount | [long](/type/long/) | Amount of [Telegram Stars](https://core.telegram.org/api/stars). |
| transaction_id | [string](/type/string/) | Transaction ID |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about users mentioned in the other fields. |

## Тип

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
