---
title: "users.getSavedMusic (метод)"
original: "https://core.telegram.org/method/users.getSavedMusic"
section: ref
kind: method
layout: layout.njk
---

# users.getSavedMusic

*Метод из схемы TL.*

> Get songs [pinned to the user's profile, see here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
---functions---
users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | The ID of the user. |
| offset | [int](/type/int/) | Offset for pagination. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash »](https://core.telegram.org/api/offsets#hash-generation) of the IDs of previously added songs, to avoid returning any result if there was no change. |

## Результат

[users.SavedMusic](/type/users.SavedMusic/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
