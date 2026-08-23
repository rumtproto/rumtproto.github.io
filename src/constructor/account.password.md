---
title: "account.password (конструктор)"
original: "https://core.telegram.org/constructor/account.password"
section: ref
kind: constructor
layout: layout.njk
---

# account.password

*Конструктор из схемы TL.*

> Configuration for two-factor authorization

## Определение TL

```
account.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_recovery | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the user has a recovery method configured |
| has_secure_values | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether telegram [passport](https://core.telegram.org/passport) is enabled |
| has_password | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the user has a password |
| current_algo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[PasswordKdfAlgo](/type/PasswordKdfAlgo/) | The [KDF algorithm for SRP two-factor authentication](/api/srp/) of the current password |
| srp_B | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[bytes](/type/bytes/) | Srp B param for [SRP authorization](/api/srp/) |
| srp_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | Srp ID param for [SRP authorization](/api/srp/) |
| hint | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Text hint for the password |
| email_unconfirmed_pattern | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | A [password recovery email](https://core.telegram.org/api/srp/#email-verification) with the specified [pattern](https://core.telegram.org/api/pattern) is still awaiting verification |
| new_algo | [PasswordKdfAlgo](/type/PasswordKdfAlgo/) | The [KDF algorithm for SRP two-factor authentication](/api/srp/) to use when creating new passwords |
| new_secure_algo | [SecurePasswordKdfAlgo](/type/SecurePasswordKdfAlgo/) | The KDF algorithm for telegram [passport](https://core.telegram.org/passport) |
| secure_random | [bytes](/type/bytes/) | Secure random string |
| pending_reset_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | The 2FA password will be automatically removed at this date, unless the user cancels the operation |
| login_email_pattern | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | A verified login email with the specified [pattern](https://core.telegram.org/api/pattern) is configured |

## Тип

[account.Password](/type/account.Password/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Pattern matching](https://core.telegram.org/api/pattern)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
