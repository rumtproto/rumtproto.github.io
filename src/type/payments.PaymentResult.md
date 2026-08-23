---
title: "Payments.PaymentResult (тип)"
original: "https://core.telegram.org/type/payments.PaymentResult"
section: ref
kind: type
layout: layout.njk
---

# Payments.PaymentResult

*Тип из схемы TL.*

> Payment result

## Определение TL

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;

---functions---

payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.paymentResult](/constructor/payments.paymentResult/) | Payment result |
| [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/) | Payment was not successful, additional verification is needed |

## Методы

| Method | Описание |
|---|---|
| [payments.sendPaymentForm](/method/payments.sendPaymentForm/) | Send compiled payment form |
| [payments.sendStarsForm](/method/payments.sendStarsForm/) | Make a payment using [Telegram Stars, see here »](https://core.telegram.org/api/stars#using-stars) for more info. |
