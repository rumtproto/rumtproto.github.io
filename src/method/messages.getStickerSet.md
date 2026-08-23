---
title: "messages.getStickerSet (метод)"
original: "https://core.telegram.org/method/messages.getStickerSet"
section: ref
kind: method
layout: layout.njk
---

# messages.getStickerSet

*Метод из схемы TL.*

> Get info about a stickerset

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset |
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMOTICON_STICKERPACK_MISSING | inputStickerSetDice.emoji cannot be empty. |
| 406 | STICKERSET_INVALID | The provided sticker set is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
