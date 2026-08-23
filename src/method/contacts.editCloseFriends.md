---
title: "contacts.editCloseFriends (метод)"
original: "https://core.telegram.org/method/contacts.editCloseFriends"
section: ref
kind: method
layout: layout.njk
---

# contacts.editCloseFriends

*Метод из схемы TL.*

> Edit the [close friends list, see here »](https://core.telegram.org/api/privacy) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Full list of user IDs of close friends, see [here](https://core.telegram.org/api/privacy) for more info. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.
