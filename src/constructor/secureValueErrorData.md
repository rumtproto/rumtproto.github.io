---
title: "secureValueErrorData (конструктор)"
original: "https://core.telegram.org/constructor/secureValueErrorData"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueErrorData

*Конструктор из схемы TL.*

> Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.

## Определение TL

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | The section of the user's Telegram Passport which has the error, one of [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/), [secureValueTypePassport](/constructor/secureValueTypePassport/), [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/), [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/), [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/), [secureValueTypeAddress](/constructor/secureValueTypeAddress/) |
| data_hash | [bytes](/type/bytes/) | Data hash |
| field | [string](/type/string/) | Name of the data field which has the error |
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

#### [secureValueTypeAddress](/constructor/secureValueTypeAddress/)

Address
