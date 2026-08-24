---
title: "secureData"
original: "https://core.telegram.org/constructor/secureData"
section: ref
kind: constructor
description: "Защищённые данные passport; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# secureData

Защищённые данные [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#securedata)

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Данные</td></tr><tr><td><strong>data_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш данных</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Секрет</td></tr></tbody></table>

### Тип

[SecureData](/type/SecureData/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
