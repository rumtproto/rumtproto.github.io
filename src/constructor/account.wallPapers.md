---
title: "account.wallPapers (конструктор)"
original: "https://core.telegram.org/constructor/account.wallPapers"
section: ref
kind: constructor
layout: layout.njk
---

# account.wallPapers

*Конструктор из схемы TL.*

> Installed [wallpapers](https://core.telegram.org/api/wallpapers)

## Определение TL

```
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| wallpapers | [Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](/type/WallPaper/)> | [Wallpapers](https://core.telegram.org/api/wallpapers) |

## Тип

[account.WallPapers](/type/account.WallPapers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
