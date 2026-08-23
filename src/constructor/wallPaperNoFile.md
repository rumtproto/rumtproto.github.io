---
title: "wallPaperNoFile (конструктор)"
original: "https://core.telegram.org/constructor/wallPaperNoFile"
section: ref
kind: constructor
layout: layout.njk
---

# wallPaperNoFile

*Конструктор из схемы TL.*

> Represents a [wallpaper](https://core.telegram.org/api/wallpapers) only based on colors/gradients.

## Определение TL

```
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Wallpaper ID |
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is the default wallpaper |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this wallpaper should be used in dark mode. |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[WallPaperSettings](/type/WallPaperSettings/) | Info on how to generate the wallpaper. |

## Тип

[WallPaper](/type/WallPaper/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
