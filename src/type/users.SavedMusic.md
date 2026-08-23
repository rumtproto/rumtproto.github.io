---
title: "users.SavedMusic (тип)"
original: "https://core.telegram.org/type/users.SavedMusic"
section: ref
kind: type
layout: layout.njk
---

# users.SavedMusic

*Тип из схемы TL.*

> List of songs ([document](/constructor/document/).`id`s) currently pinned on a user's profile, see [here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;

---functions---

users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [users.savedMusicNotModified](/constructor/users.savedMusicNotModified/) | This subset of the songs currently pinned on a user's profile hasn't changed, see [here »](https://core.telegram.org/api/profile#music) for more info. |
| [users.savedMusic](/constructor/users.savedMusic/) | List of songs currently pinned on a user's profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |

## Методы

| Method | Описание |
|---|---|
| [users.getSavedMusic](/method/users.getSavedMusic/) | Get songs [pinned to the user's profile, see here »](https://core.telegram.org/api/profile#music) for more info. |
| [users.getSavedMusicByID](/method/users.getSavedMusicByID/) | Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile [see here »](https://core.telegram.org/api/profile#music) for more info. |

## Related pages

#### [document](/constructor/document/)

Document

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
