---
title: "secureValueErrorReverseSide (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorReverseSide"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorReverseSide

*Конструктор из схемы TL.*

> Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

## Определение TL

```
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/), [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/) |
| file_hash | [bytes](/type/bytes/) | File hash |
| text | [string](/type/string/) | Error message |

## Тип

[SecureValueError](/type/SecureValueError/)

## Related pages

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card
