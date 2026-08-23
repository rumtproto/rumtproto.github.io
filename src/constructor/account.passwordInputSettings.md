---
title: "account.passwordInputSettings (конструктор)"
original: "https://core.telegram.org/constructor/account.passwordInputSettings"
section: ref
kind: constructor
layout: layout.njk
---

# account.passwordInputSettings

*Конструктор из схемы TL.*

> Settings for setting up a new password

## Определение TL

```
account.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| new_algo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PasswordKdfAlgo](/type/PasswordKdfAlgo/) | The [SRP algorithm](/api/srp/) to use |
| new_password_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | The [computed password hash](/api/srp/) |
| hint | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Text hint for the password |
| email | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Password recovery email |
| new_secure_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[SecureSecretSettings](/type/SecureSecretSettings/) | Telegram [passport](https://core.telegram.org/passport) settings |

## Тип

[account.PasswordInputSettings](/type/account.PasswordInputSettings/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
