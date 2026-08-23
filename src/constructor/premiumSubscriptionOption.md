---
title: "premiumSubscriptionOption (конструктор)"
original: "https://core.telegram.org/constructor/premiumSubscriptionOption"
section: ref
kind: constructor
layout: layout.njk
---

# premiumSubscriptionOption

*Конструктор из схемы TL.*

> Describes a Telegram Premium subscription option

## Определение TL

```
premiumSubscriptionOption#5f2d1df2 flags:# current:flags.1?true can_purchase_upgrade:flags.2?true transaction:flags.3?string months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumSubscriptionOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| current | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this subscription option is currently in use. |
| can_purchase_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this subscription option can be used to upgrade the existing Telegram Premium subscription. When upgrading Telegram Premium subscriptions bought through stores, make sure that the store transaction ID is equal to transaction, to avoid upgrading someone else's account, if the client is currently logged into multiple accounts. |
| transaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Identifier of the last in-store transaction for the currently used subscription on the current account. |
| months | [int](/type/int/) | Duration of subscription in months |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| bot_url | [string](/type/string/) | [Deep link](https://core.telegram.org/api/links) used to initiate payment |
| store_product | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Store product ID, only for official apps |

## Тип

[PremiumSubscriptionOption](/type/PremiumSubscriptionOption/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
