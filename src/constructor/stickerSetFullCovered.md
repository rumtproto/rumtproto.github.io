---
title: "stickerSetFullCovered (конструктор)"
original: "https://core.telegram.org/constructor/stickerSetFullCovered"
section: ref
kind: constructor
layout: layout.njk
---

# stickerSetFullCovered

*Конструктор из схемы TL.*

> Stickerset preview with all stickers of the stickerset included.  
> Currently used only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), to avoid a further call to [messages.getStickerSet](/method/messages.getStickerSet/).

## Определение TL

```
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| set | [StickerSet](/type/StickerSet/) | Stickerset |
| packs | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerPack](/type/StickerPack/)> | Emoji information about every sticker in the stickerset |
| keywords | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerKeyword](/type/StickerKeyword/)> | Keywords for some or every sticker in the stickerset. |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Stickers |

## Тип

[StickerSetCovered](/type/StickerSetCovered/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.getStickerSet](/method/messages.getStickerSet/)

Get info about a stickerset
