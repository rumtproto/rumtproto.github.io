---
title: "Messages.SavedGifs (тип)"
original: "https://core.telegram.org/type/messages.SavedGifs"
section: ref
kind: type
layout: layout.njk
---

# Messages.SavedGifs

*Тип из схемы TL.*

> Saved GIFs

## Определение TL

```
messages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;

---functions---

messages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.savedGifsNotModified](/constructor/messages.savedGifsNotModified/) | No new saved gifs were found |
| [messages.savedGifs](/constructor/messages.savedGifs/) | Saved gifs |

## Методы

| Method | Описание |
|---|---|
| [messages.getSavedGifs](/method/messages.getSavedGifs/) | Get saved GIFs. |
