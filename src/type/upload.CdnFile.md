---
title: "upload.CdnFile"
original: "https://core.telegram.org/type/upload.CdnFile"
section: ref
kind: type
description: "Представляет состояние скачивания файла из CDN"
layout: layout.njk
---

# upload.CdnFile

Представляет состояние скачивания файла из CDN

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;

---functions---

upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/upload.cdnFileReuploadNeeded">upload.cdnFileReuploadNeeded</a></td><td>Файл был удалён из временного кеша в оперативной памяти <a href="/cdn">CDN</a>, и его необходимо загрузить повторно.</td></tr><tr><td><a href="/constructor/upload.cdnFile">upload.cdnFile</a></td><td>Представляет фрагмент файла <a href="/cdn">CDN</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/upload.getCdnFile">upload.getCdnFile</a></td><td>Скачать файл из <a href="/cdn">CDN</a>.</td></tr></tbody></table>
