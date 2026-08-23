---
title: "Messages.ArchivedStickers (тип)"
original: "https://core.telegram.org/type/messages.ArchivedStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.ArchivedStickers

*Тип из схемы TL.*

> Archived stickers

## Определение TL

```
messages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;

---functions---

messages.getArchivedStickers#57f17692 flags:# masks:flags.0?true emojis:flags.1?true offset_id:long limit:int = messages.ArchivedStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.archivedStickers](/constructor/messages.archivedStickers/) | Archived stickersets |

## Методы

| Method | Описание |
|---|---|
| [messages.getArchivedStickers](/method/messages.getArchivedStickers/) | Get all archived stickers |
