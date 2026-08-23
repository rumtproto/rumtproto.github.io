---
title: "auth.passwordRecovery (конструктор)"
original: "https://core.telegram.org/constructor/auth.passwordRecovery"
section: ref
kind: constructor
layout: layout.njk
---

# auth.passwordRecovery

*Конструктор из схемы TL.*

> Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification).

## Определение TL

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| email_pattern | [string](/type/string/) | The email to which the recovery code was sent must match this [pattern](https://core.telegram.org/api/pattern). |

## Тип

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

## Related pages

#### [Pattern matching](https://core.telegram.org/api/pattern)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
