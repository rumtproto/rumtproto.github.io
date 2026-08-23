---
title: "upload.webFile (конструктор)"
original: "https://core.telegram.org/constructor/upload.webFile"
section: ref
kind: constructor
layout: layout.njk
---

# upload.webFile

*Конструктор из схемы TL.*

> Represents a chunk of an [HTTP webfile](/api/files/) downloaded through telegram's secure MTProto servers

## Определение TL

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| size | [int](/type/int/) | File size |
| mime_type | [string](/type/string/) | Mime type |
| file_type | [storage.FileType](/type/storage.FileType/) | File type |
| mtime | [int](/type/int/) | Modified time |
| bytes | [bytes](/type/bytes/) | Data |

## Тип

[upload.WebFile](/type/upload.WebFile/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
