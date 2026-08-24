---
title: "secureValueErrorFile"
original: "https://core.telegram.org/constructor/secureValueErrorFile"
section: ref
kind: constructor
description: "Представляет проблему со сканом документа. Ошибка считается устранённой, когда файл со сканом документа меняется."
layout: layout.njk
---

# secureValueErrorFile

Представляет проблему со сканом документа. Ошибка считается устранённой, когда файл со сканом документа меняется.

```
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>Одно из значений: <a href="/constructor/secureValueTypeUtilityBill">secureValueTypeUtilityBill</a>, <a href="/constructor/secureValueTypeBankStatement">secureValueTypeBankStatement</a>, <a href="/constructor/secureValueTypeRentalAgreement">secureValueTypeRentalAgreement</a>, <a href="/constructor/secureValueTypePassportRegistration">secureValueTypePassportRegistration</a>, <a href="/constructor/secureValueTypeTemporaryRegistration">secureValueTypeTemporaryRegistration</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш файла</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст ошибки</td></tr></tbody></table>

### Тип

[SecureValueError](/type/SecureValueError/)

### Связанные страницы

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
