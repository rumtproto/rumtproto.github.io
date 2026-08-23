---
title: "secureCredentialsEncrypted (конструктор)"
original: "https://core.telegram.org/constructor/secureCredentialsEncrypted"
section: ref
kind: constructor
layout: layout.njk
---

# secureCredentialsEncrypted

*Конструктор из схемы TL.*

> Encrypted credentials required to decrypt [telegram passport](https://core.telegram.org/passport) data.

## Определение TL

```
secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| data | [bytes](/type/bytes/) | Encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication, as described in [decrypting data »](https://core.telegram.org/passport#decrypting-data) |
| hash | [bytes](/type/bytes/) | Data hash for data authentication as described in [decrypting data »](https://core.telegram.org/passport#decrypting-data) |
| secret | [bytes](/type/bytes/) | Secret, encrypted with the bot's public RSA key, required for data decryption as described in [decrypting data »](https://core.telegram.org/passport#decrypting-data) |

## Тип

[SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
