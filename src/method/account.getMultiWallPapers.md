---
title: "account.getMultiWallPapers (метод)"
original: "https://core.telegram.org/method/account.getMultiWallPapers"
section: ref
kind: method
layout: layout.njk
---

# account.getMultiWallPapers

*Метод из схемы TL.*

> Get info about multiple [wallpapers](https://core.telegram.org/api/wallpapers)

## Определение TL

```
---functions---
account.getMultiWallPapers#65ad71dc wallpapers:Vector<InputWallPaper> = Vector<WallPaper>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| wallpapers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputWallPaper](/type/InputWallPaper/)> | [Wallpapers](https://core.telegram.org/api/wallpapers) to fetch info about |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](/type/WallPaper/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | WALLPAPER_INVALID | The specified wallpaper is invalid. |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
