---
title: "inputDocumentFileLocation"
original: "https://core.telegram.org/constructor/inputDocumentFileLocation"
section: ref
kind: constructor
description: "Местоположение документа (видео, голосовое сообщение, аудио — в общем, любой тип, кроме фотографии)"
layout: layout.njk
---

# inputDocumentFileLocation

Местоположение документа (видео, голосовое сообщение, аудио — в общем, любой тип, кроме фотографии)

```
inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор документа</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Параметр <strong>access_hash</strong> из конструктора <a href="/constructor/document">document</a></td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:file_reference] <a href="/api/file-references">Ссылка на файл</a></td></tr><tr><td><strong>thumb_size</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Размер миниатюры для её скачивания</td></tr></tbody></table>

### Тип

[InputFileLocation](/type/InputFileLocation/)

### Связанные страницы

#### [document](/constructor/document/)

Документ

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.
