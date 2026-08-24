---
title: "account.getAllSecureValues"
original: "https://core.telegram.org/method/account.getAllSecureValues"
section: ref
kind: method
description: "Получить все сохранённые документы Telegram Passport, подробнее см. в документации по Passport »"
layout: layout.njk
---

# account.getAllSecureValues

Получить все сохранённые документы [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption)

```
---functions---
account.getAllSecureValues#b288bc7d = Vector<SecureValue>;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
