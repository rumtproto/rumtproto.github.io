---
title: "account.getSavedRingtones (метод)"
original: "https://core.telegram.org/method/account.getSavedRingtones"
section: ref
kind: method
layout: layout.njk
---

# account.getSavedRingtones

*Метод из схемы TL.*

> Fetch saved notification sounds

## Определение TL

```
account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;
---functions---
account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[account.SavedRingtones](/type/account.SavedRingtones/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
