---
title: "Messages.StickerSet (тип)"
original: "https://core.telegram.org/type/messages.StickerSet"
section: ref
kind: type
layout: layout.njk
---

# Messages.StickerSet

*Тип из схемы TL.*

> Stickerset

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;

stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
stickers.changeSticker#f5537ebc flags:# sticker:InputDocument emoji:flags.0?string mask_coords:flags.1?MaskCoords keywords:flags.2?string = messages.StickerSet;
stickers.renameStickerSet#124b1c00 stickerset:InputStickerSet title:string = messages.StickerSet;
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.stickerSet](/constructor/messages.stickerSet/) | Stickerset and stickers inside it |
| [messages.stickerSetNotModified](/constructor/messages.stickerSetNotModified/) | The stickerset hasn't changed |

## Методы

| Method | Описание |
|---|---|
| [messages.getStickerSet](/method/messages.getStickerSet/) | Get info about a stickerset |
| [stickers.createStickerSet](/method/stickers.createStickerSet/) | Create a stickerset. |
| [stickers.removeStickerFromSet](/method/stickers.removeStickerFromSet/) | Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot. |
| [stickers.changeStickerPosition](/method/stickers.changeStickerPosition/) | Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot. |
| [stickers.addStickerToSet](/method/stickers.addStickerToSet/) | Add a sticker to a stickerset. The sticker set must have been created by the current user/bot. |
| [stickers.setStickerSetThumb](/method/stickers.setStickerSetThumb/) | Set stickerset thumbnail |
| [stickers.changeSticker](/method/stickers.changeSticker/) | Update the keywords, emojis or [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) of a sticker. |
| [stickers.renameStickerSet](/method/stickers.renameStickerSet/) | Renames a stickerset. |
| [stickers.replaceSticker](/method/stickers.replaceSticker/) | Replace a sticker in a [stickerset »](https://core.telegram.org/api/stickers). |
