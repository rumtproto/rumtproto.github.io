---
title: "account.getAllSecureValues (метод)"
original: "https://core.telegram.org/method/account.getAllSecureValues"
section: ref
kind: method
layout: layout.njk
---

# account.getAllSecureValues

*Метод из схемы TL.*

> Get all saved [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
---functions---
account.getAllSecureValues#b288bc7d = Vector<SecureValue>;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)\>

## Only users can use this method

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
