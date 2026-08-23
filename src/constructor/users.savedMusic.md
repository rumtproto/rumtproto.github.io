---
title: "users.savedMusic (конструктор)"
original: "https://core.telegram.org/constructor/users.savedMusic"
section: ref
kind: constructor
layout: layout.njk
---

# users.savedMusic

*Конструктор из схемы TL.*

> List of songs currently pinned on a user's profile, see [here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of songs (can be bigger than documents depending on the passed limit, and the default maximum limit in which case pagination is required). |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Songs. |

## Тип

[users.SavedMusic](/type/users.SavedMusic/)

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
