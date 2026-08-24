---
title: "payments.paymentReceiptStars"
original: "https://core.telegram.org/constructor/payments.paymentReceiptStars"
section: ref
kind: constructor
description: "Чек за платёж, совершённый с помощью Telegram Stars."
layout: layout.njk
---

# payments.paymentReceiptStars

Чек за [платёж, совершённый с помощью Telegram Stars](/api/stars/).

```
payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата генерации</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/WebDocument">WebDocument</a></td><td>Фотография товара</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Счёт</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Валюта, всегда <code>XTR</code>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор транзакции</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о пользователях, упомянутых в остальных полях.</td></tr></tbody></table>

### Тип

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
