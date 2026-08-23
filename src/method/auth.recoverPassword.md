---
title: "auth.recoverPassword (метод)"
original: "https://core.telegram.org/method/auth.recoverPassword"
section: ref
kind: method
layout: layout.njk
---

# auth.recoverPassword

*Метод из схемы TL.*

> Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| code | [string](/type/string/) | Code received via email |
| new_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[account.PasswordInputSettings](/type/account.PasswordInputSettings/) | New password |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CODE_EMPTY | The provided code is empty. |
| 400 | NEW_SETTINGS_INVALID | The new password settings are invalid. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp/#email-verification).
