---
title: "account.savedMusicIds (конструктор)"
original: "https://core.telegram.org/constructor/account.savedMusicIds"
section: ref
kind: constructor
layout: layout.njk
---

# account.savedMusicIds

*Конструктор из схемы TL.*

> List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](https://core.telegram.org/api/profile#music) for more info.

## Определение TL

```
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| ids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Full list of [document](/constructor/document/).ids |

## Тип

[account.SavedMusicIds](/type/account.SavedMusicIds/)

## Related pages

#### [document](/constructor/document/)

Document

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
