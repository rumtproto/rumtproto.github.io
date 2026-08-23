---
title: "secureValueErrorFile (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorFile"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorFile

*Конструктор из схемы TL.*

> Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

## Определение TL

```
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/), [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/), [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/), [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/), [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) |
| file_hash | [bytes](/type/bytes/) | File hash |
| text | [string](/type/string/) | Error message |

## Тип

[SecureValueError](/type/SecureValueError/)

## Related pages

#### [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/)

Utility bill

#### [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/)

Bank statement

#### [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/)

Rental agreement

#### [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/)

Internal registration [passport](https://core.telegram.org/passport)

#### [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/)

Temporary registration
