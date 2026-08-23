---
title: "secureData (конструктор)"
original: "https://core.telegram.org/constructor/secureData"
section: ref
kind: constructor
layout: layout.njk
---

# secureData

*Конструктор из схемы TL.*

> Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata)

## Определение TL

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| data | [bytes](/type/bytes/) | Data |
| data_hash | [bytes](/type/bytes/) | Data hash |
| secret | [bytes](/type/bytes/) | Secret |

## Тип

[SecureData](/type/SecureData/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
