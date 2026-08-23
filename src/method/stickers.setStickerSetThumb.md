---
title: "stickers.setStickerSetThumb (метод)"
original: "https://core.telegram.org/method/stickers.setStickerSetThumb"
section: ref
kind: method
layout: layout.njk
---

# stickers.setStickerSetThumb

*Метод из схемы TL.*

> Set stickerset thumbnail

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputDocument](/type/InputDocument/) | Thumbnail (only for normal stickersets, not custom emoji stickersets). |
| thumb_document_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | Only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), ID of a custom emoji present in the set to use as thumbnail; pass 0 to fallback to the first custom emoji of the set. |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKERSET_INVALID | The provided sticker set is invalid. |
| 400 | STICKER_THUMB_PNG_NOPNG | Incorrect stickerset thumb file provided, PNG / WEBP expected. |
| 400 | STICKER_THUMB_TGS_NOTGS | Incorrect stickerset TGS thumb file provided. |

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
