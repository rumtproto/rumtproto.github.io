---
title: "videoSizeStickerMarkup (конструктор)"
original: "https://core.telegram.org/constructor/videoSizeStickerMarkup"
section: ref
kind: constructor
layout: layout.njk
---

# videoSizeStickerMarkup

*Конструктор из схемы TL.*

> An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers).

## Определение TL

```
videoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset |
| sticker_id | [long](/type/long/) | Sticker ID |
| background_colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 1, 2, 3 or 4 RBG-24 colors used to generate a solid (1), gradient (2) or freeform gradient (3, 4) background, similar to how [fill wallpapers](https://core.telegram.org/api/wallpapers#fill-types) are generated. The rotation angle for gradient backgrounds is 0. |

## Тип

[VideoSize](/type/VideoSize/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
