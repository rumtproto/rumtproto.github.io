---
title: "account.SavedMusicIds (тип)"
original: "https://core.telegram.org/type/account.SavedMusicIds"
section: ref
kind: type
layout: layout.njk
---

# account.SavedMusicIds

*Тип из схемы TL.*

> List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;

---functions---

account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.savedMusicIdsNotModified](/constructor/account.savedMusicIdsNotModified/) | The list of IDs of songs ([document](/constructor/document/).ids) currently pinned on our profile hasn't changed. |
| [account.savedMusicIds](/constructor/account.savedMusicIds/) | List of IDs of songs ([document](/constructor/document/).ids) currently pinned on our profile, see [here »](https://core.telegram.org/api/profile#music) for more info. |

## Методы

| Method | Описание |
|---|---|
| [account.getSavedMusicIds](/method/account.getSavedMusicIds/) | Fetch the full list of only the IDs of [songs currently added to the profile, see here »](https://core.telegram.org/api/profile#music) for more info. |

## Related pages

#### [document](/constructor/document/)

Document

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
