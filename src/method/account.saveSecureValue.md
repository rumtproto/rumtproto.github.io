---
title: "account.saveSecureValue (метод)"
original: "https://core.telegram.org/method/account.saveSecureValue"
section: ref
kind: method
layout: layout.njk
---

# account.saveSecureValue

*Метод из схемы TL.*

> Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
---functions---
account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| value | [InputSecureValue](/type/InputSecureValue/) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |
| secure_secret_id | [long](/type/long/) | Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |

## Результат

[SecureValue](/type/SecureValue/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_REQUIRED | A [2FA password](/api/srp/) must be configured to use Telegram Passport. |
| 400 | SECURE_SECRET_REQUIRED | A secure secret is required. |

## Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
