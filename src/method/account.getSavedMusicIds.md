---
title: "account.getSavedMusicIds (метод)"
original: "https://core.telegram.org/method/account.getSavedMusicIds"
section: ref
kind: method
layout: layout.njk
---

# account.getSavedMusicIds

*Метод из схемы TL.*

> Fetch the full list of only the IDs of [songs currently added to the profile, see here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
---functions---
account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Hash [generated »](https://core.telegram.org/api/offsets#hash-generation) from the previously returned list of IDs. |

## Результат

[account.SavedMusicIds](/type/account.SavedMusicIds/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
