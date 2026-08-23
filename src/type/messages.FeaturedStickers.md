---
title: "Messages.FeaturedStickers (тип)"
original: "https://core.telegram.org/type/messages.FeaturedStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.FeaturedStickers

*Тип из схемы TL.*

> Featured stickers

## Определение TL

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;

---functions---

messages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;
messages.getOldFeaturedStickers#7ed094a1 offset:int limit:int hash:long = messages.FeaturedStickers;
messages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.featuredStickersNotModified](/constructor/messages.featuredStickersNotModified/) | Featured stickers haven't changed |
| [messages.featuredStickers](/constructor/messages.featuredStickers/) | Featured stickersets |

## Методы

| Method | Описание |
|---|---|
| [messages.getFeaturedStickers](/method/messages.getFeaturedStickers/) | Get featured stickers |
| [messages.getOldFeaturedStickers](/method/messages.getOldFeaturedStickers/) | Method for fetching previously featured stickers |
| [messages.getFeaturedEmojiStickers](/method/messages.getFeaturedEmojiStickers/) | Gets featured custom emoji stickersets. |
