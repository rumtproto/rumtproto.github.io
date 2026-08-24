---
title: "paymentRequestedInfo"
original: "https://core.telegram.org/constructor/paymentRequestedInfo"
section: ref
kind: constructor
description: "Сведения о заказе, указанные пользователем"
layout: layout.njk
---

# paymentRequestedInfo

Сведения о заказе, указанные пользователем

```
paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Полное имя пользователя</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Номер телефона пользователя</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Адрес электронной почты пользователя</td></tr><tr><td><strong>shipping_address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/PostAddress">PostAddress</a></td><td>Адрес доставки пользователя</td></tr></tbody></table>

### Тип

[PaymentRequestedInfo](/type/PaymentRequestedInfo/)
