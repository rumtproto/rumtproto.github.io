---
title: "inputInvoicePremiumGiftStars"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftStars"
section: ref
kind: constructor
description: "Используется, чтобы подарить другому пользователю подписку Telegram Premium с оплатой Telegram Stars."
layout: layout.njk
---

# inputInvoicePremiumGiftStars

Используется, чтобы подарить другому пользователю подписку [Telegram Premium](/api/premium/) с оплатой [Telegram Stars](/api/stars/).

```
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Кто получит подаренную подписку.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия подписки в месяцах; должен быть равен одному из вариантов с <code>currency == "XTR"</code>, возвращаемых методом <a href="/method/payments.getPremiumGiftCodeOptions">payments.getPremiumGiftCodeOptions</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Сообщение, приложенное к подарку.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Получить список вариантов [розыгрыша или подарочного кода »](/api/giveaways/) Telegram Premium.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
