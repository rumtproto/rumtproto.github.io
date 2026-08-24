---
title: "messageActionPaymentSentMe"
original: "https://core.telegram.org/constructor/messageActionPaymentSentMe"
section: ref
kind: constructor
description: "Пользователь только что отправил платёж мне (боту)"
layout: layout.njk
---

# messageActionPaymentSentMe

Пользователь только что отправил платёж мне (боту)

```
messageActionPaymentSentMe#ffa00ccc flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge subscription_until_date:flags.4?int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>recurring_init</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли это первым платежом по периодическим платежам, на которые мы только что подписались</td></tr><tr><td><strong>recurring_used</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли этот платёж частью периодических платежей</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217 либо <code>XTR</code> для <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена товара в наименьших единицах валюты (целое число, не число с плавающей точкой). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число цифр после десятичной запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo">PaymentRequestedInfo</a></td><td>Сведения о заказе, указанные пользователем</td></tr><tr><td><strong>shipping_option_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Идентификатор варианта доставки, выбранного пользователем</td></tr><tr><td><strong>charge</strong></td><td style="text-align: center;"><a href="/type/PaymentCharge">PaymentCharge</a></td><td>Идентификатор платежа у провайдера</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Дата истечения <a href="/api/stars#star-subscriptions">подписки за Telegram Stars »</a>.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
