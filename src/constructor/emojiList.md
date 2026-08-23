---
title: "emojiList (конструктор)"
original: "https://core.telegram.org/constructor/emojiList"
section: ref
kind: constructor
layout: layout.njk
---

# emojiList

*Конструктор из схемы TL.*

> Represents a list of [custom emojis](https://core.telegram.org/api/custom-emoji).

## Определение TL

```
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| document_id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Custom emoji IDs |

## Тип

[EmojiList](/type/EmojiList/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
