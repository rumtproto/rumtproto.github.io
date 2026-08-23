---
title: "auth.requestPasswordRecovery (метод)"
original: "https://core.telegram.org/method/auth.requestPasswordRecovery"
section: ref
kind: method
layout: layout.njk
---

# auth.requestPasswordRecovery

*Метод из схемы TL.*

> Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification).

## Определение TL

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;
---functions---
auth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;
```

## Параметры

This constructor does not require any parameters.

## Результат

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_EMPTY | The provided password is empty. |
| 400 | PASSWORD_RECOVERY_NA | No email was set, can't recover password via email. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
