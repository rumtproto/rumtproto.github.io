---
title: "Messages.AllStickers (тип)"
original: "https://core.telegram.org/type/messages.AllStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.AllStickers

*Тип из схемы TL.*

> All stickers

## Определение TL

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;

---functions---

messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
messages.getMaskStickers#640f82b8 hash:long = messages.AllStickers;
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.allStickersNotModified](/constructor/messages.allStickersNotModified/) | Info about all installed stickers hasn't changed |
| [messages.allStickers](/constructor/messages.allStickers/) | Info about all installed stickers |

## Методы

| Method | Описание |
|---|---|
| [messages.getAllStickers](/method/messages.getAllStickers/) | Get all installed stickers |
| [messages.getMaskStickers](/method/messages.getMaskStickers/) | Get installed mask stickers |
| [messages.getEmojiStickers](/method/messages.getEmojiStickers/) | Gets the list of currently installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji). |
