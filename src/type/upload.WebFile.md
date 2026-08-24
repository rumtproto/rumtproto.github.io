---
title: "upload.WebFile"
original: "https://core.telegram.org/type/upload.WebFile"
section: ref
kind: type
description: "Удалённый файл"
layout: layout.njk
---

# Upload.WebFile

Удалённый файл

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;

---functions---

upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/upload.webFile">upload.webFile</a></td><td>Представляет фрагмент <a href="/api/files">веб-файла HTTP</a>, загружаемого через защищённые серверы MTProto Telegram</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/upload.getWebFile">upload.getWebFile</a></td><td>Возвращает содержимое веб-файла, проксируя запрос через Telegram; подробнее см. <a href="/api/files#downloading-webfiles">документацию по веб-файлам</a>.<br><br><strong>Примечание</strong>: запрос должен отправляться в дата-центр, указанный в поле <code>webfile_dc_id</code> <a href="/api/config#mtproto-configuration">конфигурации MTProto</a>.</td></tr></tbody></table>
