---
title: "photoStrippedSize (конструктор)"
original: "https://core.telegram.org/constructor/photoStrippedSize"
section: ref
kind: constructor
layout: layout.njk
---

# photoStrippedSize

*Конструктор из схемы TL.*

> A low-resolution compressed JPG payload

## Определение TL

```
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [string](/type/string/) | [PhotoSize.type value »](https://core.telegram.org/api/files/#photosizetype-values) |
| bytes | [bytes](/type/bytes/) | Thumbnail data, see [stripped thumbnails »](https://core.telegram.org/api/files/#stripped-thumbnails) |

## Тип

[PhotoSize](/type/PhotoSize/)

## Photosize.type values

See [PhotoSize.type values »](https://core.telegram.org/api/files/#photosizetype-values).

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
