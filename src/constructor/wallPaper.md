---
title: "wallPaper (конструктор)"
original: "https://core.telegram.org/constructor/wallPaper"
section: ref
kind: constructor
layout: layout.njk
---

# wallPaper

*Конструктор из схемы TL.*

> Represents a [wallpaper](https://core.telegram.org/api/wallpapers) based on an image.

## Определение TL

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Identifier |
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we created this wallpaper |
| default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is the default wallpaper |
| pattern | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a [pattern wallpaper »](https://core.telegram.org/api/wallpapers#pattern-wallpapers) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this wallpaper should be used in dark mode. |
| access_hash | [long](/type/long/) | Access hash |
| slug | [string](/type/string/) | Unique wallpaper ID, used when generating [wallpaper links](https://core.telegram.org/api/links#wallpaper-links) or [importing wallpaper links](https://core.telegram.org/api/wallpapers). |
| document | [Document](/type/Document/) | The actual wallpaper |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[WallPaperSettings](/type/WallPaperSettings/) | Info on how to generate the wallpaper, according to [these instructions »](https://core.telegram.org/api/wallpapers). |

## Тип

[WallPaper](/type/WallPaper/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
