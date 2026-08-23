---
title: "auth.PasswordRecovery (тип)"
original: "https://core.telegram.org/type/auth.PasswordRecovery"
section: ref
kind: type
layout: layout.njk
---

# auth.PasswordRecovery

*Тип из схемы TL.*

> Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification).

## Определение TL

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;

---functions---

auth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.passwordRecovery](/constructor/auth.passwordRecovery/) | Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification). |

## Методы

| Method | Описание |
|---|---|
| [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/) | Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification). |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
