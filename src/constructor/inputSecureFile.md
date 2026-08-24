---
title: "inputSecureFile"
original: "https://core.telegram.org/constructor/inputSecureFile"
section: ref
kind: constructor
description: "Заранее загруженный файл passport; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# inputSecureFile

Заранее загруженный файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор защищённого файла</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа к защищённому файлу</td></tr></tbody></table>

### Тип

[InputSecureFile](/type/InputSecureFile/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
