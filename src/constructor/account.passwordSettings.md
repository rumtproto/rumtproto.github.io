---
title: "account.passwordSettings (конструктор)"
original: "https://core.telegram.org/constructor/account.passwordSettings"
section: ref
kind: constructor
layout: layout.njk
---

# account.passwordSettings

*Конструктор из схемы TL.*

> Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

## Определение TL

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| email | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | [2FA Recovery email](https://core.telegram.org/api/srp/#email-verification) |
| secure_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[SecureSecretSettings](/type/SecureSecretSettings/) | Telegram [passport](https://core.telegram.org/passport) settings |

## Тип

[account.PasswordSettings](/type/account.PasswordSettings/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
