---
title: "upload.fileCdnRedirect (конструктор)"
original: "https://core.telegram.org/constructor/upload.fileCdnRedirect"
section: ref
kind: constructor
layout: layout.njk
---

# upload.fileCdnRedirect

*Конструктор из схемы TL.*

> The file must be downloaded from a [CDN DC](https://core.telegram.org/cdn).

## Определение TL

```
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | [CDN DC](https://core.telegram.org/cdn) ID |
| file_token | [bytes](/type/bytes/) | File token (see [CDN files](https://core.telegram.org/cdn)) |
| encryption_key | [bytes](/type/bytes/) | Encryption key (see [CDN files](https://core.telegram.org/cdn)) |
| encryption_iv | [bytes](/type/bytes/) | Encryption IV (see [CDN files](https://core.telegram.org/cdn)) |
| file_hashes | [Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)> | File hashes (see [CDN files](https://core.telegram.org/cdn)) |

## Тип

[upload.File](/type/upload.File/)

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
