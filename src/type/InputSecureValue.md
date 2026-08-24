---
title: "InputSecureValue"
original: "https://core.telegram.org/type/InputSecureValue"
section: ref
kind: type
description: "Защищённое значение, подробнее см. в документации по Passport »"
layout: layout.njk
---

# InputSecureValue

Защищённое значение, [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption)

```
inputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureValue">inputSecureValue</a></td><td>Защищённое значение, <a href="/passport/encryption#encryption">подробнее см. в документации по Passport »</a></td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
