---
title: "messages.savedGifs (конструктор)"
original: "https://core.telegram.org/constructor/messages.savedGifs"
section: ref
kind: constructor
layout: layout.njk
---

# messages.savedGifs

*Конструктор из схемы TL.*

> Saved gifs

## Определение TL

```
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| gifs | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | List of saved gifs |

## Тип

[messages.SavedGifs](/type/messages.SavedGifs/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
