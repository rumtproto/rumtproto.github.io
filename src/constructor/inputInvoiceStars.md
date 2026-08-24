---
title: "inputInvoiceStars"
original: "https://core.telegram.org/constructor/inputInvoiceStars"
section: ref
kind: constructor
description: "Используется для пополнения баланса Telegram Stars текущего или чужого аккаунта, а также для запуска розыгрыша Telegram Stars »."
layout: layout.njk
---

# inputInvoiceStars

Используется для пополнения баланса [Telegram Stars](/api/stars/) текущего или чужого аккаунта, а также для запуска [розыгрыша Telegram Stars »](/api/giveaways/#star-giveaways).

```
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose">InputStorePaymentPurpose</a></td><td><a href="/constructor/inputStorePaymentStarsGiveaway">inputStorePaymentStarsGiveaway</a>, <a href="/constructor/inputStorePaymentStarsTopup">inputStorePaymentStarsTopup</a> или <a href="/constructor/inputStorePaymentStarsGift">inputStorePaymentStarsGift</a>.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Используется для оплаты [розыгрыша звёзд; подробнее см. здесь »](/api/giveaways/#star-giveaways).

#### [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/)

Используется для пополнения [баланса Telegram Stars](/api/stars/) текущего аккаунта.

#### [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/)

Используется, чтобы подарить другу [Telegram Stars](/api/stars/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
