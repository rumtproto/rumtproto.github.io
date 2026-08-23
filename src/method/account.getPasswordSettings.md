---
title: "account.getPasswordSettings (метод)"
original: "https://core.telegram.org/method/account.getPasswordSettings"
section: ref
kind: method
layout: layout.njk
---

# account.getPasswordSettings

*Метод из схемы TL.*

> Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

## Определение TL

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
---functions---
account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | The password (see [SRP](/api/srp/)) |

## Результат

[account.PasswordSettings](/type/account.PasswordSettings/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
