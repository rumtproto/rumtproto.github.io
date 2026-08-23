---
title: "Messages.Stickers (тип)"
original: "https://core.telegram.org/type/messages.Stickers"
section: ref
kind: type
layout: layout.njk
---

# Messages.Stickers

*Тип из схемы TL.*

> Stickers

## Определение TL

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.stickersNotModified](/constructor/messages.stickersNotModified/) | No new stickers were found for the given query |
| [messages.stickers](/constructor/messages.stickers/) | Found stickers |

## Методы

| Method | Описание |
|---|---|
| [messages.getStickers](/method/messages.getStickers/) | Get stickers by emoji |
