---
title: "Upload.WebFile (тип)"
original: "https://core.telegram.org/type/upload.WebFile"
section: ref
kind: type
layout: layout.njk
---

# Upload.WebFile

*Тип из схемы TL.*

> Remote file

## Определение TL

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;

---functions---

upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [upload.webFile](/constructor/upload.webFile/) | Represents a chunk of an [HTTP webfile](/api/files/) downloaded through telegram's secure MTProto servers |

## Методы

| Method | Описание |
|---|---|
| [upload.getWebFile](/method/upload.getWebFile/) | Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](https://core.telegram.org/api/files/#downloading-webfiles). Note: the query must be sent to the DC specified in the webfile_dc_id [MTProto configuration field](https://core.telegram.org/api/config#mtproto-configuration). |
