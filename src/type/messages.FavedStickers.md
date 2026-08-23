---
title: "Messages.FavedStickers (тип)"
original: "https://core.telegram.org/type/messages.FavedStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.FavedStickers

*Тип из схемы TL.*

> Favorited stickers

## Определение TL

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;

---functions---

messages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.favedStickersNotModified](/constructor/messages.favedStickersNotModified/) | No new favorited stickers were found |
| [messages.favedStickers](/constructor/messages.favedStickers/) | Favorited stickers |

## Методы

| Method | Описание |
|---|---|
| [messages.getFavedStickers](/method/messages.getFavedStickers/) | Get faved stickers |
