---
title: "SecureValue (тип)"
original: "https://core.telegram.org/type/SecureValue"
section: ref
kind: type
layout: layout.njk
---

# SecureValue

*Тип из схемы TL.*

> Secure Telegram Passport value

## Определение TL

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;

---functions---

account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [secureValue](/constructor/secureValue/) | Secure value |

## Методы

| Method | Описание |
|---|---|
| [account.saveSecureValue](/method/account.saveSecureValue/) | Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |
