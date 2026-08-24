---
title: "account.getSecureValue"
original: "https://core.telegram.org/method/account.getSecureValue"
section: ref
kind: method
description: "Получить сохранённый документ Telegram Passport, подробнее см. в документации по Passport »"
layout: layout.njk
---

# account.getSecureValue

Получить сохранённый документ [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption)

```
---functions---
account.getSecureValue#73665bc2 types:Vector<SecureValueType> = Vector<SecureValue>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueType">SecureValueType</a>&gt;</td><td>Типы запрошенных значений</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
