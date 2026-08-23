---
title: "StickerSetCovered (тип)"
original: "https://core.telegram.org/type/StickerSetCovered"
section: ref
kind: type
layout: layout.njk
---

# StickerSetCovered

*Тип из схемы TL.*

> Stickerset preview

## Определение TL

```
stickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;
stickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
stickerSetNoCovered#77b15d1c set:StickerSet = StickerSetCovered;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stickerSetCovered](/constructor/stickerSetCovered/) | Stickerset with a single sticker as preview |
| [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) | Stickerset, with multiple stickers as preview |
| [stickerSetFullCovered](/constructor/stickerSetFullCovered/) | Stickerset preview with all stickers of the stickerset included. Currently used only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), to avoid a further call to [messages.getStickerSet](/method/messages.getStickerSet/). |
| [stickerSetNoCovered](/constructor/stickerSetNoCovered/) | Just the stickerset information, with no previews. |
