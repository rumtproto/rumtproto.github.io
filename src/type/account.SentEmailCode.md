---
title: "account.SentEmailCode (тип)"
original: "https://core.telegram.org/type/account.SentEmailCode"
section: ref
kind: type
layout: layout.njk
---

# account.SentEmailCode

*Тип из схемы TL.*

> The email code that was sent

## Определение TL

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;

---functions---

account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.sentEmailCode](/constructor/account.sentEmailCode/) | The sent email code |

## Методы

| Method | Описание |
|---|---|
| [account.sendVerifyEmailCode](/method/account.sendVerifyEmailCode/) | Send an email verification code. |
