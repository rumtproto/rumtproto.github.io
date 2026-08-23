---
title: "messages.getSavedGifs (метод)"
original: "https://core.telegram.org/method/messages.getSavedGifs"
section: ref
kind: method
layout: layout.njk
---

# messages.getSavedGifs

*Метод из схемы TL.*

> Get saved GIFs.

## Определение TL

```
messages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;
---functions---
messages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.SavedGifs](/type/messages.SavedGifs/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
