---
title: "WallPaper (тип)"
original: "https://core.telegram.org/type/WallPaper"
section: ref
kind: type
layout: layout.njk
---

# WallPaper

*Тип из схемы TL.*

> Object contains info on a [wallpaper](https://core.telegram.org/api/wallpapers).

## Определение TL

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;

---functions---

account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [wallPaper](/constructor/wallPaper/) | Represents a [wallpaper](https://core.telegram.org/api/wallpapers) based on an image. |
| [wallPaperNoFile](/constructor/wallPaperNoFile/) | Represents a [wallpaper](https://core.telegram.org/api/wallpapers) only based on colors/gradients. |

## Методы

| Method | Описание |
|---|---|
| [account.getWallPaper](/method/account.getWallPaper/) | Get info about a certain [wallpaper](https://core.telegram.org/api/wallpapers) |
| [account.uploadWallPaper](/method/account.uploadWallPaper/) | Create and upload a new [wallpaper](https://core.telegram.org/api/wallpapers) |

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
