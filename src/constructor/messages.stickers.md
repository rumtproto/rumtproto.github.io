---
title: "messages.stickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.stickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.stickers

*Конструктор из схемы TL.*

> Found stickers

## Определение TL

```
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| stickers | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Stickers |

## Тип

[messages.Stickers](/type/messages.Stickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
