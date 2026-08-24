---
title: "upload.webFile"
original: "https://core.telegram.org/constructor/upload.webFile"
section: ref
kind: constructor
description: "Представляет фрагмент веб-файла HTTP, загружаемого через защищённые серверы MTProto Telegram"
layout: layout.njk
---

# upload.webFile

Представляет фрагмент [веб-файла HTTP](/api/files/), загружаемого через защищённые серверы MTProto Telegram

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Размер файла</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип</td></tr><tr><td><strong>file_type</strong></td><td style="text-align: center;"><a href="/type/storage.FileType">storage.FileType</a></td><td>Тип файла</td></tr><tr><td><strong>mtime</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время изменения</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Данные</td></tr></tbody></table>

### Тип

[upload.WebFile](/type/upload.WebFile/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
