---
title: "InputWallPaper (тип)"
original: "https://core.telegram.org/type/InputWallPaper"
section: ref
kind: type
layout: layout.njk
---

# InputWallPaper

*Тип из схемы TL.*

> [Wallpaper](https://core.telegram.org/api/wallpapers)

## Определение TL

```
inputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;
inputWallPaperSlug#72091c80 slug:string = InputWallPaper;
inputWallPaperNoFile#967a462e id:long = InputWallPaper;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputWallPaper](/constructor/inputWallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) |
| [inputWallPaperSlug](/constructor/inputWallPaperSlug/) | [Wallpaper](https://core.telegram.org/api/wallpapers) by slug (a unique ID, obtained from a [wallpaper link »](https://core.telegram.org/api/links#wallpaper-links)) |
| [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/) | [Wallpaper](https://core.telegram.org/api/wallpapers) with no file access hash, used for example when deleting (unsave=true) wallpapers using [account.saveWallPaper](/method/account.saveWallPaper/), specifying just the wallpaper ID. |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
