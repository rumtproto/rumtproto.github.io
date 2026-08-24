---
title: "secureValueErrorData"
original: "https://core.telegram.org/constructor/secureValueErrorData"
section: ref
kind: constructor
description: "Представляет проблему в одном из полей данных, предоставленных пользователем. Ошибка считается устранённой, когда значение поля меняется."
layout: layout.njk
---

# secureValueErrorData

Представляет проблему в одном из полей данных, предоставленных пользователем. Ошибка считается устранённой, когда значение поля меняется.

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>Раздел Telegram Passport пользователя, в котором произошла ошибка, — один из <a href="/constructor/secureValueTypePersonalDetails">secureValueTypePersonalDetails</a>, <a href="/constructor/secureValueTypePassport">secureValueTypePassport</a>, <a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a>, <a href="/constructor/secureValueTypeInternalPassport">secureValueTypeInternalPassport</a>, <a href="/constructor/secureValueTypeAddress">secureValueTypeAddress</a></td></tr><tr><td><strong>data_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш данных</td></tr><tr><td><strong>field</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название поля данных, в котором обнаружена ошибка</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст ошибки</td></tr></tbody></table>

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

#### [secureValueTypeAddress](/constructor/secureValueTypeAddress/)

Адрес
