---
title: "account.updatePasswordSettings (метод)"
original: "https://core.telegram.org/method/account.updatePasswordSettings"
section: ref
kind: method
layout: layout.njk
---

# account.updatePasswordSettings

*Метод из схемы TL.*

> Set a new 2FA password

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updatePasswordSettings#a59b102f password:InputCheckPasswordSRP new_settings:account.PasswordInputSettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | The old password (see [SRP](/api/srp/)) |
| new_settings | [account.PasswordInputSettings](/type/account.PasswordInputSettings/) | The new password (see [SRP](/api/srp/)) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMAIL_INVALID | The specified email is invalid. |
| 400 | EMAIL_UNCONFIRMED | Email unconfirmed. |
| 400 | EMAIL_UNCONFIRMED_%d | The provided email isn't confirmed, %d is the length of the verification code that was just sent to the email: use [account.verifyEmail](/method/account.verifyEmail/) to enter the received verification code and enable the recovery email. |
| 400 | NEW_SALT_INVALID | The new salt is invalid. |
| 400 | NEW_SETTINGS_EMPTY | No password is set on the current account, and no new password was specified in new_settings. |
| 400 | NEW_SETTINGS_INVALID | The new password settings are invalid. |
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |
| 400 | SRP_ID_INVALID | Invalid SRP ID provided. |
| 400 | SRP_PASSWORD_CHANGED | Password has changed. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [account.verifyEmail](/method/account.verifyEmail/)

Verify an email address.
