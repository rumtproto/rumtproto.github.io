---
title: "upload.getFileHashes"
original: "https://core.telegram.org/method/upload.getFileHashes"
section: ref
kind: method
description: "Получить хеши SHA256 для проверки скачанных файлов"
layout: layout.njk
---

# upload.getFileHashes

Получить хеши SHA256 для проверки скачанных файлов

```
---functions---
upload.getFileHashes#9156982a location:InputFileLocation offset:long = Vector<FileHash>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputFileLocation">InputFileLocation</a></td><td>Файл</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Смещение, начиная с которого следует получать хеши файла</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>LOCATION_INVALID</td><td>Указанное местоположение недействительно.</td></tr></tbody></table>
