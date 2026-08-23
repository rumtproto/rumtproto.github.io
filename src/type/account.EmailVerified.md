---
title: "account.EmailVerified (тип)"
original: "https://core.telegram.org/type/account.EmailVerified"
section: ref
kind: type
layout: layout.njk
---

# account.EmailVerified

*Тип из схемы TL.*

> Email verification status

## Определение TL

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;

---functions---

account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.emailVerified](/constructor/account.emailVerified/) | The email was verified correctly. |
| [account.emailVerifiedLogin](/constructor/account.emailVerifiedLogin/) | The email was verified correctly, and a login code was just sent to it. |

## Методы

| Method | Описание |
|---|---|
| [account.verifyEmail](/method/account.verifyEmail/) | Verify an email address. |
