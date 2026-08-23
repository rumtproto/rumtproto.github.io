---
title: "payments.paymentFormStarGift (конструктор)"
original: "https://core.telegram.org/constructor/payments.paymentFormStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# payments.paymentFormStarGift

*Конструктор из схемы TL.*

> Represents a payment form for a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

## Определение TL

```
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| form_id | [long](/type/long/) | Form ID. |
| invoice | [Invoice](/type/Invoice/) | Invoice |

## Тип

[payments.PaymentForm](/type/payments.PaymentForm/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
