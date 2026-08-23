---
title: "stickers.replaceSticker (метод)"
original: "https://core.telegram.org/method/stickers.replaceSticker"
section: ref
kind: method
layout: layout.njk
---

# stickers.replaceSticker

*Метод из схемы TL.*

> Replace a sticker in a [stickerset »](https://core.telegram.org/api/stickers).

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sticker | [InputDocument](/type/InputDocument/) | Old sticker document. |
| new_sticker | [InputStickerSetItem](/type/InputStickerSetItem/) | New sticker. |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_INVALID | The provided sticker is invalid. |

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
