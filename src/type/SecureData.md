---
title: "SecureData (тип)"
original: "https://core.telegram.org/type/SecureData"
section: ref
kind: type
layout: layout.njk
---

# SecureData

*Тип из схемы TL.*

> Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata)

## Определение TL

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [secureData](/constructor/secureData/) | Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata) |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
