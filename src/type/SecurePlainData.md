---
title: "SecurePlainData (тип)"
original: "https://core.telegram.org/type/SecurePlainData"
section: ref
kind: type
layout: layout.njk
---

# SecurePlainData

*Тип из схемы TL.*

> Plaintext verified [passport data](https://core.telegram.org/passport/encryption#secureplaindata).

## Определение TL

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [securePlainPhone](/constructor/securePlainPhone/) | Phone number to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata). |
| [securePlainEmail](/constructor/securePlainEmail/) | Email address to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata). |

## Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
