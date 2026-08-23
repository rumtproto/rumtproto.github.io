---
title: "upload.CdnFile (тип)"
original: "https://core.telegram.org/type/upload.CdnFile"
section: ref
kind: type
layout: layout.njk
---

# upload.CdnFile

*Тип из схемы TL.*

> Represents the download status of a CDN file

## Определение TL

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;

---functions---

upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [upload.cdnFileReuploadNeeded](/constructor/upload.cdnFileReuploadNeeded/) | The file was cleared from the temporary RAM cache of the [CDN](https://core.telegram.org/cdn) and has to be re-uploaded. |
| [upload.cdnFile](/constructor/upload.cdnFile/) | Represent a chunk of a [CDN](https://core.telegram.org/cdn) file. |

## Методы

| Method | Описание |
|---|---|
| [upload.getCdnFile](/method/upload.getCdnFile/) | Download a [CDN](https://core.telegram.org/cdn) file. |
