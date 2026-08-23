---
title: "payments.paymentFormStars (конструктор)"
original: "https://core.telegram.org/constructor/payments.paymentFormStars"
section: ref
kind: constructor
layout: layout.njk
---

# payments.paymentFormStars

*Конструктор из схемы TL.*

> Represents a payment form, for payments to be using [Telegram Stars, see here »](https://core.telegram.org/api/stars) for more info.

## Определение TL

```
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| form_id | [long](/type/long/) | Form ID. |
| bot_id | [long](/type/long/) | Bot ID. |
| title | [string](/type/string/) | Form title |
| description | [string](/type/string/) | Description |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[WebDocument](/type/WebDocument/) | Product photo |
| invoice | [Invoice](/type/Invoice/) | Invoice |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about users mentioned in the other fields. |

## Тип

[payments.PaymentForm](/type/payments.PaymentForm/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
