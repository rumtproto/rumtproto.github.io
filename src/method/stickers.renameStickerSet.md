---
title: "stickers.renameStickerSet (метод)"
original: "https://core.telegram.org/method/stickers.renameStickerSet"
section: ref
kind: method
layout: layout.njk
---

# stickers.renameStickerSet

*Метод из схемы TL.*

> Renames a stickerset.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.renameStickerSet#124b1c00 stickerset:InputStickerSet title:string = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset to rename |
| title | [string](/type/string/) | New stickerset title |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKERSET_INVALID | The provided sticker set is invalid. |
