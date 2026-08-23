---
title: "photoPathSize (конструктор)"
original: "https://core.telegram.org/constructor/photoPathSize"
section: ref
kind: constructor
layout: layout.njk
---

# photoPathSize

*Конструктор из схемы TL.*

> Messages with animated stickers can have a compressed svg (< 300 bytes) to show the outline of the sticker before fetching the actual lottie animation.

## Определение TL

```
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [string](/type/string/) | Always [j »](https://core.telegram.org/api/files/#vector-thumbnails) |
| bytes | [bytes](/type/bytes/) | Compressed SVG path payload, see [vector thumbnails »](https://core.telegram.org/api/files/#vector-thumbnails) |

## Тип

[PhotoSize](/type/PhotoSize/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
