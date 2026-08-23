---
title: "Messages.FoundStickers (тип)"
original: "https://core.telegram.org/type/messages.FoundStickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.FoundStickers

*Тип из схемы TL.*

> Found [stickers](https://core.telegram.org/api/stickers)

## Определение TL

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;

---functions---

messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.foundStickersNotModified](/constructor/messages.foundStickersNotModified/) | No new stickers were found for the specified query |
| [messages.foundStickers](/constructor/messages.foundStickers/) | Found stickers |

## Методы

| Method | Описание |
|---|---|
| [messages.searchStickers](/method/messages.searchStickers/) | Search for stickers using AI-powered keyword search |

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
