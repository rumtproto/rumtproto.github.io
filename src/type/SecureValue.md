---
title: "SecureValue"
original: "https://core.telegram.org/type/SecureValue"
section: ref
kind: type
description: "Защищённое значение Telegram Passport"
layout: layout.njk
---

# SecureValue

Защищённое значение Telegram Passport

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;

---functions---

account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/secureValue">secureValue</a></td><td>Защищённое значение</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.saveSecureValue">account.saveSecureValue</a></td><td>Безопасно сохранить документ <a href="/passport">Telegram Passport</a>, <a href="/passport/encryption#encryption">подробнее см. в документации по Passport »</a></td></tr></tbody></table>
