---
title: "stickerPack (конструктор)"
original: "https://core.telegram.org/constructor/stickerPack"
section: ref
kind: constructor
layout: layout.njk
---

# stickerPack

*Конструктор из схемы TL.*

> A stickerpack is a group of stickers associated to the same emoji.  
> It is **not** a sticker pack the way it is usually intended, you may be looking for a [StickerSet](/type/StickerSet/).

## Определение TL

```
stickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoticon | [string](/type/string/) | Emoji |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Stickers |

## Тип

[StickerPack](/type/StickerPack/)

## Related pages

#### [StickerSet](/type/StickerSet/)

Represents a stickerset (stickerpack)
