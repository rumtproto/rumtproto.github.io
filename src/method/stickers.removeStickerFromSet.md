---
title: "stickers.removeStickerFromSet (метод)"
original: "https://core.telegram.org/method/stickers.removeStickerFromSet"
section: ref
kind: method
layout: layout.njk
---

# stickers.removeStickerFromSet

*Метод из схемы TL.*

> Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sticker | [InputDocument](/type/InputDocument/) | The sticker to remove |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_INVALID | The provided sticker is invalid. |
