---
title: "payments.PaymentForm"
original: "https://core.telegram.org/type/payments.PaymentForm"
section: ref
kind: type
description: "Форма оплаты"
layout: layout.njk
---

# Payments.PaymentForm

Форма оплаты

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;

---functions---

payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentForm">payments.paymentForm</a></td><td>Форма оплаты</td></tr><tr><td><a href="/constructor/payments.paymentFormStars">payments.paymentFormStars</a></td><td>Представляет форму оплаты для платежей за <a href="/api/stars">Telegram Stars, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/payments.paymentFormStarGift">payments.paymentFormStarGift</a></td><td>Представляет форму оплаты <a href="/api/gifts">подарка, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentForm">payments.getPaymentForm</a></td><td>Получить форму оплаты</td></tr></tbody></table>
