---
title: "payments.PaymentReceipt"
original: "https://core.telegram.org/type/payments.PaymentReceipt"
section: ref
kind: type
description: "Чек об оплате"
layout: layout.njk
---

# Payments.PaymentReceipt

Чек об оплате

```
payments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;
payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;

---functions---

payments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentReceipt">payments.paymentReceipt</a></td><td>Чек</td></tr><tr><td><a href="/constructor/payments.paymentReceiptStars">payments.paymentReceiptStars</a></td><td>Чек за <a href="/api/stars">платёж, совершённый с помощью Telegram Stars</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentReceipt">payments.getPaymentReceipt</a></td><td>Получить чек об оплате</td></tr></tbody></table>
