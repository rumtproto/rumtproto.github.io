---
title: "account.savedRingtones (конструктор)"
original: "https://core.telegram.org/constructor/account.savedRingtones"
section: ref
kind: constructor
layout: layout.njk
---

# account.savedRingtones

*Конструктор из схемы TL.*

> A list of saved notification sounds

## Определение TL

```
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| ringtones | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Saved notification sounds |

## Тип

[account.SavedRingtones](/type/account.SavedRingtones/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
