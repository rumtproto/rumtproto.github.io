---
title: "upload.cdnFileReuploadNeeded"
original: "https://core.telegram.org/constructor/upload.cdnFileReuploadNeeded"
section: ref
kind: constructor
description: "Файл был удалён из временного кеша в оперативной памяти CDN, и его необходимо загрузить повторно."
layout: layout.njk
---

# upload.cdnFileReuploadNeeded

Файл был удалён из временного кеша в оперативной памяти [CDN](https://core.telegram.org/cdn), и его необходимо загрузить повторно.

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>request_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен запроса (см. <a href="/cdn">CDN</a>)</td></tr></tbody></table>

### Тип

[upload.CdnFile](/type/upload.CdnFile/)

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
