---
title: "upload.File (тип)"
original: "https://core.telegram.org/type/upload.File"
section: ref
kind: type
layout: layout.njk
---

# upload.File

*Тип из схемы TL.*

> Contains info on file.

## Определение TL

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;

---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [upload.file](/constructor/upload.file/) | File content. |
| [upload.fileCdnRedirect](/constructor/upload.fileCdnRedirect/) | The file must be downloaded from a [CDN DC](https://core.telegram.org/cdn). |

## Методы

| Method | Описание |
|---|---|
| [upload.getFile](/method/upload.getFile/) | Returns content of a whole file or its part. |
