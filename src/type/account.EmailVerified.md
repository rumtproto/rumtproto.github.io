---
title: "account.EmailVerified"
original: "https://core.telegram.org/type/account.EmailVerified"
section: ref
kind: type
description: "Статус подтверждения электронной почты"
layout: layout.njk
---

# account.EmailVerified

Статус подтверждения электронной почты

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;

---functions---

account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.emailVerified">account.emailVerified</a></td><td>Адрес электронной почты подтверждён верно.</td></tr><tr><td><a href="/constructor/account.emailVerifiedLogin">account.emailVerifiedLogin</a></td><td>Адрес электронной почты подтверждён верно, и на него только что был отправлен код для входа.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.verifyEmail">account.verifyEmail</a></td><td>Подтвердить адрес электронной почты.</td></tr></tbody></table>
