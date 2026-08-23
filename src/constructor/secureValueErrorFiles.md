---
title: "secureValueErrorFiles (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorFiles"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorFiles

*Конструктор из схемы TL.*

> Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

## Определение TL

```
secureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/), [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/), [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/), [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/), [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) |
| file_hash | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | File hash |
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
