---
title: "secureValueErrorTranslationFiles (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorTranslationFiles"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorTranslationFiles

*Конструктор из схемы TL.*

> Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes.

## Определение TL

```
secureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/), [secureValueTypePassport](/constructor/secureValueTypePassport/), [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/), [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/), [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/), [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/), [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/), [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/), [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/), [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) |
| file_hash | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | Hash |
| text | [string](/type/string/) | Error message |

## Тип

[SecureValueError](/type/SecureValueError/)

## Related pages

#### [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/)

Personal details

#### [secureValueTypePassport](/constructor/secureValueTypePassport/)

Passport

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card

#### [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/)

Internal [passport](https://core.telegram.org/passport)

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
