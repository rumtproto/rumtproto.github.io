---
title: "auth.sentCodePaymentRequired"
original: "https://core.telegram.org/constructor/auth.sentCodePaymentRequired"
section: ref
kind: constructor
description: "Официальные приложения могут получить этот конструктор: он означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения…"
layout: layout.njk
---

# auth.sentCodePaymentRequired

Официальные приложения могут получить этот конструктор: он означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения входа или регистрации пользователь обязан приобрести подписку [Telegram Premium](/api/premium/); подробнее [см. здесь »](/api/auth/#paid-auth).

```
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Для официальных приложений — идентификатор магазина для подписки Telegram Premium.</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш кода подтверждения, который следует сохранить и позднее повторно использовать в <a href="/method/auth.signIn">auth.signIn</a></td></tr><tr><td><strong>support_email_address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес электронной почты, по которому можно получить дополнительные сведения об этом запросе.</td></tr><tr><td><strong>support_email_subject</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Обязательная тема письма.</td></tr><tr><td><strong>premium_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия подписки <a href="/api/premium">Telegram Premium</a>, предоставляемой этой покупкой, в днях.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[auth.SentCode](/type/auth.SentCode/)

### Связанные страницы

#### [auth.signIn](/method/auth.signIn/)

Выполняет вход пользователя с подтверждённым номером телефона.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
