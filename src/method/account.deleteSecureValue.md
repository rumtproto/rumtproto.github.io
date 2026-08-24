---
title: "account.deleteSecureValue"
original: "https://core.telegram.org/method/account.deleteSecureValue"
section: ref
kind: method
description: "Удалить сохранённые документы Telegram Passport, подробнее см. в документации по Passport »"
layout: layout.njk
---

# account.deleteSecureValue

Удалить сохранённые документы [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteSecureValue#b880bc4b types:Vector<SecureValueType> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueType">SecureValueType</a>&gt;</td><td>Типы документов для удаления</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
