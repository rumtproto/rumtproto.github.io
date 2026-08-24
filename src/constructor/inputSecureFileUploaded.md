---
title: "inputSecureFileUploaded"
original: "https://core.telegram.org/constructor/inputSecureFileUploaded"
section: ref
kind: constructor
description: "Загруженный защищённый файл; подробнее см. документацию по Telegram Passport »"
layout: layout.njk
---

# inputSecureFileUploaded

Загруженный защищённый файл; подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор защищённого файла</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество частей защищённого файла</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MD5-хеш зашифрованного загруженного файла для проверки на стороне сервера</td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Хеш файла</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Секрет</td></tr></tbody></table>

### Тип

[InputSecureFile](/type/InputSecureFile/)

### Связанные страницы

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
