---
title: "auth.checkPassword (метод)"
original: "https://core.telegram.org/method/auth.checkPassword"
section: ref
kind: method
layout: layout.njk
---

# auth.checkPassword

*Метод из схемы TL.*

> Try logging to an account protected by a [2FA password](/api/srp/).

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | The account's password (see [SRP](/api/srp/)) |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 500 | AUTH_KEY_UNSYNCHRONIZED | Internal error, please repeat the method call. |
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |
| 400 | SRP_ID_INVALID | Invalid SRP ID provided. |
| 400 | SRP_PASSWORD_CHANGED | Password has changed. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
