---
title: "account.getWallPaper (метод)"
original: "https://core.telegram.org/method/account.getWallPaper"
section: ref
kind: method
layout: layout.njk
---

# account.getWallPaper

*Метод из схемы TL.*

> Get info about a certain [wallpaper](https://core.telegram.org/api/wallpapers)

## Определение TL

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| wallpaper | [InputWallPaper](/type/InputWallPaper/) | The [wallpaper](https://core.telegram.org/api/wallpapers) to get info about |

## Результат

[WallPaper](/type/WallPaper/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | WALLPAPER_INVALID | The specified wallpaper is invalid. |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
