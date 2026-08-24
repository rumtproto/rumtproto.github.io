---
title: "payments.PaymentResult"
original: "https://core.telegram.org/type/payments.PaymentResult"
section: ref
kind: type
description: "Результат оплаты"
layout: layout.njk
---

# Payments.PaymentResult

Результат оплаты

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;

---functions---

payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentResult">payments.paymentResult</a></td><td>Результат оплаты</td></tr><tr><td><a href="/constructor/payments.paymentVerificationNeeded">payments.paymentVerificationNeeded</a></td><td>Платёж не прошёл, требуется дополнительная проверка</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.sendPaymentForm">payments.sendPaymentForm</a></td><td>Отправить заполненную форму оплаты</td></tr><tr><td><a href="/method/payments.sendStarsForm">payments.sendStarsForm</a></td><td>Произвести оплату с помощью <a href="/api/stars#using-stars">Telegram Stars, подробнее »</a>.</td></tr></tbody></table>
