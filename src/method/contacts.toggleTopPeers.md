---
title: "contacts.toggleTopPeers (метод)"
original: "https://core.telegram.org/method/contacts.toggleTopPeers"
section: ref
kind: method
layout: layout.njk
---

# contacts.toggleTopPeers

*Метод из схемы TL.*

> Enable/disable [top peers](https://core.telegram.org/api/top-rating)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.toggleTopPeers#8514bdda enabled:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| enabled | [Bool](/type/Bool/) | Enable/disable |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Top peer rating](https://core.telegram.org/api/top-rating)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
