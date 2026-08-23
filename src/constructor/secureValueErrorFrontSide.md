---
title: "secureValueErrorFrontSide (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorFrontSide"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorFrontSide

*Конструктор из схемы TL.*

> Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

## Определение TL

```
secureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;
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
