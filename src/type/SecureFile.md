---
title: "SecureFile"
original: "https://core.telegram.org/type/SecureFile"
section: ref
kind: type
description: "Защищённый файл passport; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# SecureFile

Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
secureFileEmpty#64199744 = SecureFile;
secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/secureFileEmpty">secureFileEmpty</a></td><td>Пустой конструктор</td></tr><tr><td><a href="/constructor/secureFile">secureFile</a></td><td>Защищённый файл <a href="/passport">passport</a>; подробнее <a href="/passport/encryption#inputsecurefile">см. документацию по Passport »</a></td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
