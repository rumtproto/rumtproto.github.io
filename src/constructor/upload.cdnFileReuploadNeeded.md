---
title: "upload.cdnFileReuploadNeeded (конструктор)"
original: "https://core.telegram.org/constructor/upload.cdnFileReuploadNeeded"
section: ref
kind: constructor
layout: layout.njk
---

# upload.cdnFileReuploadNeeded

*Конструктор из схемы TL.*

> The file was cleared from the temporary RAM cache of the [CDN](https://core.telegram.org/cdn) and has to be re-uploaded.

## Определение TL

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| request_token | [bytes](/type/bytes/) | Request token (see [CDN](https://core.telegram.org/cdn)) |

## Тип

[upload.CdnFile](/type/upload.CdnFile/)

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
