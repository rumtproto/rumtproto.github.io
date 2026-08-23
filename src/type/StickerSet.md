---
title: "StickerSet (тип)"
original: "https://core.telegram.org/type/StickerSet"
section: ref
kind: type
layout: layout.njk
---

# StickerSet

*Тип из схемы TL.*

> Represents a stickerset (stickerpack)

## Определение TL

```
stickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stickerSet](/constructor/stickerSet/) | Represents a stickerset (stickerpack) |
