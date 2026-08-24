---
title: "auth.resetLoginEmail"
original: "https://core.telegram.org/method/auth.resetLoginEmail"
section: ref
kind: method
description: "Сбросить почту для входа »."
layout: layout.njk
---

# auth.resetLoginEmail

Сбросить [почту для входа »](/api/auth/#email-verification).

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона аккаунта</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, полученный как описано в <a href="/api/auth">документации »</a></td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Попытка отправить код на почту для восстановления, но почта не настроена.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>400</td><td>TASK_ALREADY_EXISTS</td><td>Сброс адреса электронной почты уже был запрошен.</td></tr></tbody></table>

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
