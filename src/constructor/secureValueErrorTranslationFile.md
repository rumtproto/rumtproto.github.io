---
title: "secureValueErrorTranslationFile (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorTranslationFile"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorTranslationFile

*Конструктор из схемы TL.*

> Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

## Определение TL

```
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | One of [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/), [secureValueTypePassport](/constructor/secureValueTypePassport/), [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/), [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/), [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/), [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/), [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/), [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/), [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/), [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) |
| file_hash | [bytes](/type/bytes/) | File hash |
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
