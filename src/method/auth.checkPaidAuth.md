---
title: "auth.checkPaidAuth"
original: "https://core.telegram.org/method/auth.checkPaidAuth"
section: ref
kind: method
description: "Проверяет состояние платежа за вход."
layout: layout.njk
---

# auth.checkPaidAuth

Проверяет состояние [платежа за вход](/api/auth/#paid-auth).

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, полученный от <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор формы оплаты, переданный в <a href="/method/payments.sendPaymentForm">payments.sendPaymentForm</a>.</td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа

#### [payments.sendPaymentForm](/method/payments.sendPaymentForm/)

Отправить заполненную форму оплаты

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
