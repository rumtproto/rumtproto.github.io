---
title: "upload.fileCdnRedirect"
original: "https://core.telegram.org/constructor/upload.fileCdnRedirect"
section: ref
kind: constructor
description: "Файл должен быть скачан из CDN DC."
layout: layout.njk
---

# upload.fileCdnRedirect

Файл должен быть скачан из [CDN DC](https://core.telegram.org/cdn).

```
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/cdn">CDN DC</a></td></tr><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен файла (см. <a href="/cdn">файлы CDN</a>)</td></tr><tr><td><strong>encryption_key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Ключ шифрования (см. <a href="/cdn">файлы CDN</a>)</td></tr><tr><td><strong>encryption_iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Вектор инициализации шифрования (см. <a href="/cdn">файлы CDN</a>)</td></tr><tr><td><strong>file_hashes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/FileHash">FileHash</a>&gt;</td><td>Хеши файла (см. <a href="/cdn">файлы CDN</a>)</td></tr></tbody></table>

### Тип

[upload.File](/type/upload.File/)

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
