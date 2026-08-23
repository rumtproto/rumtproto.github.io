---
title: "Account.WallPapers (тип)"
original: "https://core.telegram.org/type/account.WallPapers"
section: ref
kind: type
layout: layout.njk
---

# Account.WallPapers

*Тип из схемы TL.*

> [Wallpapers](https://core.telegram.org/api/wallpapers)

## Определение TL

```
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;

---functions---

account.getWallPapers#7967d36 hash:long = account.WallPapers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.wallPapersNotModified](/constructor/account.wallPapersNotModified/) | No new [wallpapers](https://core.telegram.org/api/wallpapers) were found |
| [account.wallPapers](/constructor/account.wallPapers/) | Installed [wallpapers](https://core.telegram.org/api/wallpapers) |

## Методы

| Method | Описание |
|---|---|
| [account.getWallPapers](/method/account.getWallPapers/) | Returns a list of available [wallpapers](https://core.telegram.org/api/wallpapers). |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
