---
title: "SecureData"
original: "https://core.telegram.org/type/SecureData"
section: ref
kind: type
description: "Защищённые данные passport; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# SecureData

Защищённые данные [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#securedata)

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/secureData">secureData</a></td><td>Защищённые данные <a href="/passport">passport</a>; подробнее <a href="/passport/encryption#securedata">см. документацию по Passport »</a></td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
