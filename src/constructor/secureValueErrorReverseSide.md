---
title: "secureValueErrorReverseSide"
original: "https://core.telegram.org/constructor/secureValueErrorReverseSide"
section: ref
kind: constructor
description: "Представляет проблему с обратной стороной документа. Ошибка считается устранённой, когда файл с обратной стороной документа меняется."
layout: layout.njk
---

# secureValueErrorReverseSide

Представляет проблему с обратной стороной документа. Ошибка считается устранённой, когда файл с обратной стороной документа меняется.

```
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>Одно из значений: <a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш файла</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст ошибки</td></tr></tbody></table>

### Тип

[SecureValueError](/type/SecureValueError/)

### Связанные страницы

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Водительское удостоверение

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Удостоверение личности
