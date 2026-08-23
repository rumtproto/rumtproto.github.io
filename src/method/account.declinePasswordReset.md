---
title: "account.declinePasswordReset (метод)"
original: "https://core.telegram.org/method/account.declinePasswordReset"
section: ref
kind: method
layout: layout.njk
---

# account.declinePasswordReset

*Метод из схемы TL.*

> Abort a pending 2FA password reset, [see here for more info »](https://core.telegram.org/api/srp/#password-reset)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.declinePasswordReset#4c9409f6 = Bool;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RESET_REQUEST_MISSING | No password reset is in progress. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
