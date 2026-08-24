---
title: "InputSecureFile"
original: "https://core.telegram.org/type/InputSecureFile"
section: ref
kind: type
description: "Защищённый файл passport; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# InputSecureFile

Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureFileUploaded">inputSecureFileUploaded</a></td><td>Загруженный защищённый файл; подробнее <a href="/passport/encryption#inputsecurefile">см. документацию по Telegram Passport »</a></td></tr><tr><td><a href="/constructor/inputSecureFile">inputSecureFile</a></td><td>Заранее загруженный файл <a href="/passport">passport</a>; подробнее <a href="/passport/encryption#inputsecurefile">см. документацию по Telegram Passport »</a></td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
