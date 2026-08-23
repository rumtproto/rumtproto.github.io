---
title: "SecurePasswordKdfAlgo (тип)"
original: "https://core.telegram.org/type/SecurePasswordKdfAlgo"
section: ref
kind: type
layout: layout.njk
---

# SecurePasswordKdfAlgo

*Тип из схемы TL.*

> KDF algorithm to use for computing telegram [passport](https://core.telegram.org/passport) hash

## Определение TL

```
securePasswordKdfAlgoUnknown#4a8537 = SecurePasswordKdfAlgo;
securePasswordKdfAlgoPBKDF2HMACSHA512iter100000#bbf2dda0 salt:bytes = SecurePasswordKdfAlgo;
securePasswordKdfAlgoSHA512#86471d92 salt:bytes = SecurePasswordKdfAlgo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [securePasswordKdfAlgoUnknown](/constructor/securePasswordKdfAlgoUnknown/) | Unknown KDF algo (most likely the client has to be updated) |
| [securePasswordKdfAlgoPBKDF2HMACSHA512iter100000](/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000/) | PBKDF2 with SHA512 and 100000 iterations KDF algo |
| [securePasswordKdfAlgoSHA512](/constructor/securePasswordKdfAlgoSHA512/) | SHA512 KDF algo |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
