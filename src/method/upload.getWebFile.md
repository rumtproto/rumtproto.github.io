---
title: "upload.getWebfile (метод)"
original: "https://core.telegram.org/method/upload.getWebFile"
section: ref
kind: method
layout: layout.njk
---

# upload.getWebfile

*Метод из схемы TL.*

> Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](https://core.telegram.org/api/files/#downloading-webfiles).
> **Note**: the query must be sent to the DC specified in the `webfile_dc_id` [MTProto configuration field](https://core.telegram.org/api/config#mtproto-configuration).

## Определение TL

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;
---functions---
upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| location | [InputWebFileLocation](/type/InputWebFileLocation/) | The file to download |
| offset | [int](/type/int/) | Number of bytes to be skipped |
| limit | [int](/type/int/) | Number of bytes to be returned |

## Результат

[upload.WebFile](/type/upload.WebFile/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 400 | LOCATION_INVALID | The provided location is invalid. |

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
