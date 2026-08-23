---
title: "account.getWallPapers (метод)"
original: "https://core.telegram.org/method/account.getWallPapers"
section: ref
kind: method
layout: layout.njk
---

# account.getWallPapers

*Метод из схемы TL.*

> Returns a list of available [wallpapers](https://core.telegram.org/api/wallpapers).

## Определение TL

```
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;
---functions---
account.getWallPapers#7967d36 hash:long = account.WallPapers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[account.WallPapers](/type/account.WallPapers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
