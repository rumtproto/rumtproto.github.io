---
title: "stickers.addStickerToSet (метод)"
original: "https://core.telegram.org/method/stickers.addStickerToSet"
section: ref
kind: method
layout: layout.njk
---

# stickers.addStickerToSet

*Метод из схемы TL.*

> Add a sticker to a stickerset. The sticker set must have been created by the current user/bot.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | The stickerset |
| sticker | [InputStickerSetItem](/type/InputStickerSetItem/) | The sticker |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKERPACK_STICKERS_TOO_MUCH | There are too many stickers in this stickerpack, you can't add any more. |
| 406 | STICKERSET_INVALID | The provided sticker set is invalid. |
| 400 | STICKERS_TOO_MUCH | There are too many stickers in this stickerpack, you can't add any more. |
| 400 | STICKER_PNG_NOPNG | One of the specified stickers is not a valid PNG file. |
| 400 | STICKER_TGS_NOTGS | Invalid TGS sticker provided. |
