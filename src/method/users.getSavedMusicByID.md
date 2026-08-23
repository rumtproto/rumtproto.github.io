---
title: "users.getSavedMusicByID (метод)"
original: "https://core.telegram.org/method/users.getSavedMusicByID"
section: ref
kind: method
layout: layout.njk
---

# users.getSavedMusicByID

*Метод из схемы TL.*

> Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile [see here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
---functions---
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | The ID of the user. |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDocument](/type/InputDocument/)> | The songs (here, file_reference can be empty to refresh file references). |

## Результат

[users.SavedMusic](/type/users.SavedMusic/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
