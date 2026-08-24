---
title: "payments.paymentFormStars"
original: "https://core.telegram.org/constructor/payments.paymentFormStars"
section: ref
kind: constructor
description: "Представляет форму оплаты для платежей за Telegram Stars, подробнее см. здесь »."
layout: layout.njk
---

# payments.paymentFormStars

Представляет форму оплаты для платежей за [Telegram Stars, подробнее см. здесь »](/api/stars/).

```
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор формы.</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название формы</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/WebDocument">WebDocument</a></td><td>Фотография товара</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Счёт</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о пользователях, упомянутых в остальных полях.</td></tr></tbody></table>

### Тип

[payments.PaymentForm](/type/payments.PaymentForm/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
