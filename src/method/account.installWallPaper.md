---
title: "account.installWallPaper (метод)"
original: "https://core.telegram.org/method/account.installWallPaper"
section: ref
kind: method
layout: layout.njk
---

# account.installWallPaper

*Метод из схемы TL.*

> Install [wallpaper](https://core.telegram.org/api/wallpapers)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.installWallPaper#feed5769 wallpaper:InputWallPaper settings:WallPaperSettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| wallpaper | [InputWallPaper](/type/InputWallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) to install |
| settings | [WallPaperSettings](/type/WallPaperSettings/) | [Wallpaper](https://core.telegram.org/api/wallpapers) settings |

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
