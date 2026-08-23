---
title: "account.saveWallPaper (метод)"
original: "https://core.telegram.org/method/account.saveWallPaper"
section: ref
kind: method
layout: layout.njk
---

# account.saveWallPaper

*Метод из схемы TL.*

> Install/uninstall [wallpaper](https://core.telegram.org/api/wallpapers)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveWallPaper#6c5a5b37 wallpaper:InputWallPaper unsave:Bool settings:WallPaperSettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| wallpaper | [InputWallPaper](/type/InputWallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) to install or uninstall |
| unsave | [Bool](/type/Bool/) | Uninstall wallpaper? |
| settings | [WallPaperSettings](/type/WallPaperSettings/) | Wallpaper settings |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | WALLPAPER_INVALID | The specified wallpaper is invalid. |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
