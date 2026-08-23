---
title: "upload.getCdnFile (метод)"
original: "https://core.telegram.org/method/upload.getCdnFile"
section: ref
kind: method
layout: layout.njk
---

# upload.getCdnFile

*Метод из схемы TL.*

> Download a [CDN](https://core.telegram.org/cdn) file.

## Определение TL

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;
---functions---
upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file_token | [bytes](/type/bytes/) | File token |
| offset | [long](/type/long/) | Offset of chunk to download |
| limit | [int](/type/int/) | Length of chunk to download |

## Результат

[upload.CdnFile](/type/upload.CdnFile/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILE_TOKEN_INVALID | The master DC did not accept the file_token (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile. |
| 404 | METHOD_INVALID | The specified method is invalid. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
