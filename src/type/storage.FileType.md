---
title: "storage.FileType (тип)"
original: "https://core.telegram.org/type/storage.FileType"
section: ref
kind: type
layout: layout.njk
---

# storage.FileType

*Тип из схемы TL.*

> Object describes the file type.

## Определение TL

```
storage.fileUnknown#aa963b05 = storage.FileType;
storage.filePartial#40bc6f52 = storage.FileType;
storage.fileJpeg#7efe0e = storage.FileType;
storage.fileGif#cae1aadf = storage.FileType;
storage.filePng#a4f63c0 = storage.FileType;
storage.filePdf#ae1e508d = storage.FileType;
storage.fileMp3#528a0677 = storage.FileType;
storage.fileMov#4b09ebbc = storage.FileType;
storage.fileMp4#b3cea0e4 = storage.FileType;
storage.fileWebp#1081464c = storage.FileType;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storage.fileUnknown](/constructor/storage.fileUnknown/) | Unknown type. |
| [storage.filePartial](/constructor/storage.filePartial/) | Part of a bigger file. |
| [storage.fileJpeg](/constructor/storage.fileJpeg/) | JPEG image. MIME type: image/jpeg. |
| [storage.fileGif](/constructor/storage.fileGif/) | GIF image. MIME type: image/gif. |
| [storage.filePng](/constructor/storage.filePng/) | PNG image. MIME type: image/png. |
| [storage.filePdf](/constructor/storage.filePdf/) | PDF document image. MIME type: application/pdf. |
| [storage.fileMp3](/constructor/storage.fileMp3/) | Mp3 audio. MIME type: audio/mpeg. |
| [storage.fileMov](/constructor/storage.fileMov/) | Quicktime video. MIME type: video/quicktime. |
| [storage.fileMp4](/constructor/storage.fileMp4/) | MPEG-4 video. MIME type: video/mp4. |
| [storage.fileWebp](/constructor/storage.fileWebp/) | WEBP image. MIME type: image/webp. |
