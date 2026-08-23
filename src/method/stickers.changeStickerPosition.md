---
title: "stickers.changeStickerPosition (метод)"
original: "https://core.telegram.org/method/stickers.changeStickerPosition"
section: ref
kind: method
layout: layout.njk
---

# stickers.changeStickerPosition

*Метод из схемы TL.*

> Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sticker | [InputDocument](/type/InputDocument/) | The sticker |
| position | [int](/type/int/) | The new position of the sticker, zero-based |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_INVALID | The provided sticker is invalid. |
