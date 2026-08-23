---
title: "stickers.deleteStickerSet (метод)"
original: "https://core.telegram.org/method/stickers.deleteStickerSet"
section: ref
kind: method
layout: layout.njk
---

# stickers.deleteStickerSet

*Метод из схемы TL.*

> Deletes a stickerset we created.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stickers.deleteStickerSet#87704394 stickerset:InputStickerSet = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset to delete |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKERSET_INVALID | The provided sticker set is invalid. |
