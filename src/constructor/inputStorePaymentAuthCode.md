---
title: "inputStorePaymentAuthCode"
original: "https://core.telegram.org/constructor/inputStorePaymentAuthCode"
section: ref
kind: constructor
description: "Обозначает оплату кода для входа."
layout: layout.njk
---

# inputStorePaymentAuthCode

Обозначает оплату кода для входа.

```
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы восстановить ранее совершённую покупку.</td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона.</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>phone_code_hash</code>, возвращённый методом <a href="/method/auth.sendCode">auth.sendCode</a>.</td></tr><tr><td><strong>premium_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия подписки <a href="/api/premium">Telegram Premium</a>, предоставляемой этой покупкой, в днях, как указано в <a href="/constructor/auth.sentCodePaymentRequired">auth.sentCodePaymentRequired</a>.<code>premium_days</code>.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена товара в наименьших единицах валюты (целое число, не число с плавающей точкой). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число цифр после десятичной запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)

Официальные приложения могут получить этот конструктор: он означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения входа или регистрации пользователь обязан приобрести подписку [Telegram Premium](/api/premium/); подробнее [см. здесь »](/api/auth/#paid-auth).

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
