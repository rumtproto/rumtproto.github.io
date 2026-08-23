---
title: "account.deleteAccount (метод)"
original: "https://core.telegram.org/method/account.deleteAccount"
section: ref
kind: method
layout: layout.njk
---

# account.deleteAccount

*Метод из схемы TL.*

> Delete the user's account from the telegram servers.
> Can also be used to delete the account of a user that provided the login code, but forgot the 2FA password and no recovery method is configured, see [here »](https://core.telegram.org/api/srp/#password-recovery) for more info on password recovery, and [here »](https://core.telegram.org/api/account-deletion) for more info on account deletion.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteAccount#a2c0cf74 flags:# reason:string password:flags.0?InputCheckPasswordSRP = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reason | [string](/type/string/) | Why is the account being deleted, can be empty |
| password | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | [2FA password](/api/srp/): this field can be omitted even for accounts with 2FA enabled: in this case account account deletion will be delayed by 7 days [as specified in the docs »](https://core.telegram.org/api/account-deletion) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 420 | 2FA_CONFIRM_WAIT_%d | Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in %d seconds. |
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Account deletion](https://core.telegram.org/api/account-deletion)

How to reset an account if the 2FA password was forgotten.
