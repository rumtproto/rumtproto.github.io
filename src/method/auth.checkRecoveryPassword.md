---
title: "auth.checkRecoveryPassword (метод)"
original: "https://core.telegram.org/method/auth.checkRecoveryPassword"
section: ref
kind: method
layout: layout.njk
---

# auth.checkRecoveryPassword

*Метод из схемы TL.*

> Check if the [2FA recovery code](/api/srp/) sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/) is valid, before passing it to [auth.recoverPassword](/method/auth.recoverPassword/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.checkRecoveryPassword#d36bf79 code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| code | [string](/type/string/) | Code received via email |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CODE_EMPTY | The provided code is empty. |
| 400 | PASSWORD_RECOVERY_EXPIRED | The recovery code has expired. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification).

#### [auth.recoverPassword](/method/auth.recoverPassword/)

Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).
