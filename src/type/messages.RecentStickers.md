---
title: "Messages.RecentStickers (тип)"
original: "https://core.telegram.org/type/messages.RecentStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.RecentStickers

*Тип из схемы TL.*

> Recent stickers

## Определение TL

```
messages.recentStickersNotModified#b17f890 = messages.RecentStickers;
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;

---functions---

messages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.recentStickersNotModified](/constructor/messages.recentStickersNotModified/) | No new recent sticker was found |
| [messages.recentStickers](/constructor/messages.recentStickers/) | Recently used stickers |

## Методы

| Method | Описание |
|---|---|
| [messages.getRecentStickers](/method/messages.getRecentStickers/) | Get recent stickers |
