---
title: "inputWallPaperNoFile (конструктор)"
original: "https://core.telegram.org/constructor/inputWallPaperNoFile"
section: ref
kind: constructor
layout: layout.njk
---

# inputWallPaperNoFile

*Конструктор из схемы TL.*

> [Wallpaper](https://core.telegram.org/api/wallpapers) with no file access hash, used for example when deleting (`unsave=true`) wallpapers using [account.saveWallPaper](/method/account.saveWallPaper/), specifying just the wallpaper ID.

## Определение TL

```
inputWallPaperNoFile#967a462e id:long = InputWallPaper;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Wallpaper ID |

## Тип

[InputWallPaper](/type/InputWallPaper/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [account.saveWallPaper](/method/account.saveWallPaper/)

Install/uninstall [wallpaper](https://core.telegram.org/api/wallpapers)
