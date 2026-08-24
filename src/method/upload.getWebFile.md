---
title: "upload.getWebFile"
original: "https://core.telegram.org/method/upload.getWebFile"
section: ref
kind: method
description: "Возвращает содержимое веб-файла, проксируя запрос через Telegram; подробнее см. документацию по веб-файлам."
layout: layout.njk
---

# upload.getWebfile

Возвращает содержимое веб-файла, проксируя запрос через Telegram; подробнее см. [документацию по веб-файлам](/api/files/#downloading-webfiles).

**Примечание**: запрос должен отправляться в дата-центр, указанный в поле `webfile_dc_id` [конфигурации MTProto](/api/config/#mtproto-configuration).

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;
---functions---
upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputWebFileLocation">InputWebFileLocation</a></td><td>Файл для скачивания</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пропускаемых байт</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых байт</td></tr></tbody></table>

### Результат

[upload.WebFile](/type/upload.WebFile/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>Указанное местоположение недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
