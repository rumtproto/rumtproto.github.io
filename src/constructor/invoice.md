---
title: "invoice (конструктор)"
original: "https://core.telegram.org/constructor/invoice"
section: ref
kind: constructor
layout: layout.njk
---

# invoice

*Конструктор из схемы TL.*

> Invoice

## Определение TL

```
invoice#49ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| test | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Test invoice |
| name_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Set this flag if you require the user's full name to complete the order |
| phone_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Set this flag if you require the user's phone number to complete the order |
| email_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Set this flag if you require the user's email address to complete the order |
| shipping_address_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Set this flag if you require the user's shipping address to complete the order |
| flexible | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Set this flag if the final price depends on the shipping method |
| phone_to_provider | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Set this flag if user's phone number should be sent to provider |
| email_to_provider | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Set this flag if user's email address should be sent to provider |
| recurring | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether this is a recurring payment |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| prices | [Vector](https://core.telegram.org/type/Vector%20t)<[LabeledPrice](/type/LabeledPrice/)> | Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) |
| max_tip_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| suggested_tip_amounts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | A vector of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. |
| terms_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[string](/type/string/) | Terms of service URL |
| subscription_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | The number of seconds between consecutive Telegram Star debiting for [bot subscription](https://core.telegram.org/api/subscriptions#bot-subscriptions) invoices |

## Тип

[Invoice](/type/Invoice/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Star subscriptions](https://core.telegram.org/api/subscriptions)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.
