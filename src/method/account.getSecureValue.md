---
title: "account.getSecureValue (метод)"
original: "https://core.telegram.org/method/account.getSecureValue"
section: ref
kind: method
layout: layout.njk
---

# account.getSecureValue

*Метод из схемы TL.*

> Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
---functions---
account.getSecureValue#73665bc2 types:Vector<SecureValueType> = Vector<SecureValue>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| types | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueType](/type/SecureValueType/)> | Requested value types |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)\>

## Only users can use this method

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
