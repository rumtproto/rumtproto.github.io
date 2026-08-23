---
title: "upload.file (конструктор)"
original: "https://core.telegram.org/constructor/upload.file"
section: ref
kind: constructor
layout: layout.njk
---

# upload.file

*Конструктор из схемы TL.*

> File content.

## Определение TL

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [storage.FileType](/type/storage.FileType/) | File type |
| mtime | [int](/type/int/) | Modification time |
| bytes | [bytes](/type/bytes/) | Binary data, file content |

## Тип

[upload.File](/type/upload.File/)
