---
title: "secureValueErrorSelfie (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorSelfie"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorSelfie

*Конструктор из схемы TL.*

> Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

## Определение TL

```
secureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypePassport](/constructor/secureValueTypePassport/), [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/), [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/), [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/) |
| file_hash | [bytes](/type/bytes/) | File hash |
| text | [string](/type/string/) | Error message |

## Тип

[SecureValueError](/type/SecureValueError/)

## Related pages

#### [secureValueTypePassport](/constructor/secureValueTypePassport/)

Passport

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card

#### [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/)

Internal [passport](https://core.telegram.org/passport)
