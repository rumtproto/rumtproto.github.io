---
title: "account.verifyEmail"
original: "https://core.telegram.org/method/account.verifyEmail"
section: ref
kind: method
description: "Подтвердить адрес электронной почты."
layout: layout.njk
---

# account.verifyEmail

Подтвердить адрес электронной почты.

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;
---functions---
account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/EmailVerifyPurpose">EmailVerifyPurpose</a></td><td>Назначение верификации</td></tr><tr><td><strong>verification</strong></td><td style="text-align: center;"><a href="/type/EmailVerification">EmailVerification</a></td><td>Код подтверждения или токен электронной почты</td></tr></tbody></table>

### Результат

[account.EmailVerified](/type/account.EmailVerified/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CODE_INVALID</td><td>Недействительный код.</td></tr><tr><td>400</td><td>EMAIL_INVALID</td><td>Указанный адрес электронной почты недействителен.</td></tr><tr><td>400</td><td>EMAIL_NOT_ALLOWED</td><td>Указанный адрес электронной почты нельзя использовать для выполнения операции.</td></tr><tr><td>400</td><td>EMAIL_VERIFY_EXPIRED</td><td>Срок действия письма для подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>
