---
title: "account.ResetPasswordResult (тип)"
original: "https://core.telegram.org/type/account.ResetPasswordResult"
section: ref
kind: type
layout: layout.njk
---

# account.ResetPasswordResult

*Тип из схемы TL.*

> Result of an [account.resetPassword](/method/account.resetPassword/) request.

## Определение TL

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;

---functions---

account.resetPassword#9308ce1b = account.ResetPasswordResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.resetPasswordFailedWait](/constructor/account.resetPasswordFailedWait/) | You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset. |
| [account.resetPasswordRequestedWait](/constructor/account.resetPasswordRequestedWait/) | You successfully requested a password reset, please wait until the specified date before finalizing the reset. |
| [account.resetPasswordOk](/constructor/account.resetPasswordOk/) | The 2FA password was reset successfully. |

## Методы

| Method | Описание |
|---|---|
| [account.resetPassword](/method/account.resetPassword/) | Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp/#password-reset) |

## Related pages

#### [account.resetPassword](/method/account.resetPassword/)

Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp/#password-reset)
