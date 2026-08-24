---
title: "secureValueErrorTranslationFile"
original: "https://core.telegram.org/constructor/secureValueErrorTranslationFile"
section: ref
kind: constructor
description: "Представляет проблему с одним из файлов, составляющих перевод документа. Ошибка считается устранённой, когда файл меняется."
layout: layout.njk
---

# secureValueErrorTranslationFile

Представляет проблему с одним из файлов, составляющих перевод документа. Ошибка считается устранённой, когда файл меняется.

```
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>Одно из значений: <a href="/constructor/secureValueTypePersonalDetails">secureValueTypePersonalDetails</a>, <a href="/constructor/secureValueTypePassport">secureValueTypePassport</a>, <a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a>, <a href="/constructor/secureValueTypeInternalPassport">secureValueTypeInternalPassport</a>, <a href="/constructor/secureValueTypeUtilityBill">secureValueTypeUtilityBill</a>, <a href="/constructor/secureValueTypeBankStatement">secureValueTypeBankStatement</a>, <a href="/constructor/secureValueTypeRentalAgreement">secureValueTypeRentalAgreement</a>, <a href="/constructor/secureValueTypePassportRegistration">secureValueTypePassportRegistration</a>, <a href="/constructor/secureValueTypeTemporaryRegistration">secureValueTypeTemporaryRegistration</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш файла</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст ошибки</td></tr></tbody></table>

### Тип

[SecureValueError](/type/SecureValueError/)

### Связанные страницы

#### [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/)

Личные данные

#### [secureValueTypePassport](/constructor/secureValueTypePassport/)

Passport

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Водительское удостоверение

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Удостоверение личности

#### [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/)

Внутренний [passport](https://core.telegram.org/passport)

#### [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/)

Счёт за коммунальные услуги

#### [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/)

Выписка из банка

#### [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/)

Договор аренды

#### [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/)

Внутренняя регистрация [passport](https://core.telegram.org/passport)

#### [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/)

Временная регистрация
