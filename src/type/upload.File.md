---
title: "upload.File"
original: "https://core.telegram.org/type/upload.File"
section: ref
kind: type
description: "Содержит информацию о файле."
layout: layout.njk
---

# upload.File

Содержит информацию о файле.

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;

---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/upload.file">upload.file</a></td><td>Содержимое файла.</td></tr><tr><td><a href="/constructor/upload.fileCdnRedirect">upload.fileCdnRedirect</a></td><td>Файл должен быть скачан из <a href="/cdn">CDN DC</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/upload.getFile">upload.getFile</a></td><td>Возвращает содержимое файла целиком или его части.</td></tr></tbody></table>
