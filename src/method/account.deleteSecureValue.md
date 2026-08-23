---
title: "account.deleteSecureValue (метод)"
original: "https://core.telegram.org/method/account.deleteSecureValue"
section: ref
kind: method
layout: layout.njk
---

# account.deleteSecureValue

*Метод из схемы TL.*

> Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteSecureValue#b880bc4b types:Vector<SecureValueType> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| types | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueType](/type/SecureValueType/)> | Document types to delete |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
