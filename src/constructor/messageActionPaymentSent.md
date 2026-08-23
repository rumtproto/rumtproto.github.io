---
title: "messageActionPaymentSent (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPaymentSent"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPaymentSent

*Конструктор из схемы TL.*

> A payment was sent

## Определение TL

```
messageActionPaymentSent#c624b16e flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long invoice_slug:flags.0?string subscription_until_date:flags.4?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| recurring_init | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is the first payment of a recurring payment we just subscribed to |
| recurring_used | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this payment is part of a recurring payment |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| total_amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | An invoice slug taken from an [invoice deep link](https://core.telegram.org/api/links#invoice-links) or from the [premium_invoice_slug app config parameter »](https://core.telegram.org/api/config#premium-invoice-slug) |
| subscription_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Expiration date of the [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
