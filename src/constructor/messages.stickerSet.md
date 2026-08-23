---
title: "messages.stickerSet (конструктор)"
original: "https://core.telegram.org/constructor/messages.stickerSet"
section: ref
kind: constructor
layout: layout.njk
---

# messages.stickerSet

*Конструктор из схемы TL.*

> Stickerset and stickers inside it

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| set | [StickerSet](/type/StickerSet/) | The stickerset |
| packs | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerPack](/type/StickerPack/)> | Emoji info for stickers |
| keywords | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerKeyword](/type/StickerKeyword/)> | Keywords for some or every sticker in the stickerset. |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Stickers in stickerset |

## Тип

[messages.StickerSet](/type/messages.StickerSet/)
