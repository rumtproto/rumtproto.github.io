---
title: "account.sendVerifyEmailCode"
original: "https://core.telegram.org/method/account.sendVerifyEmailCode"
section: ref
kind: method
description: "Отправить код подтверждения по электронной почте."
layout: layout.njk
---

# account.sendVerifyEmailCode

Отправить код подтверждения по электронной почте.

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;
---functions---
account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/EmailVerifyPurpose">EmailVerifyPurpose</a></td><td>Назначение верификации.</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес электронной почты, на который следует отправить код.</td></tr></tbody></table>

### Результат

[account.SentEmailCode](/type/account.SentEmailCode/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INVALID</td><td>Указанный адрес электронной почты недействителен.</td></tr><tr><td>400</td><td>EMAIL_NOT_ALLOWED</td><td>Указанный адрес электронной почты нельзя использовать для выполнения операции.</td></tr><tr><td>400</td><td>EMAIL_NOT_SETUP</td><td>Чтобы сменить почту для входа с помощью emailVerifyPurposeLoginChange, необходимо, чтобы почта для входа уже была задана через emailVerifyPurposeLoginSetup.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_HASH_EXPIRED</td><td>Передан недействительный или просроченный <code>phone_code_hash</code>.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>
