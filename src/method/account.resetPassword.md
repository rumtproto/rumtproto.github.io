---
title: "account.resetPassword (метод)"
original: "https://core.telegram.org/method/account.resetPassword"
section: ref
kind: method
layout: layout.njk
---

# account.resetPassword

*Метод из схемы TL.*

> Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp/#password-reset)

## Определение TL

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;
---functions---
account.resetPassword#9308ce1b = account.ResetPasswordResult;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_EMPTY | The provided password is empty. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
