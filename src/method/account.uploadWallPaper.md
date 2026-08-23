---
title: "account.uploadWallPaper (метод)"
original: "https://core.telegram.org/method/account.uploadWallPaper"
section: ref
kind: method
layout: layout.njk
---

# account.uploadWallPaper

*Метод из схемы TL.*

> Create and upload a new [wallpaper](https://core.telegram.org/api/wallpapers)

## Определение TL

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| for_chat | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag when uploading wallpapers to be passed to [messages.setChatWallPaper](/method/messages.setChatWallPaper/). |
| file | [InputFile](/type/InputFile/) | The JPG/PNG wallpaper |
| mime_type | [string](/type/string/) | MIME type of uploaded wallpaper |
| settings | [WallPaperSettings](/type/WallPaperSettings/) | Wallpaper settings |

## Результат

[WallPaper](/type/WallPaper/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | WALLPAPER_FILE_INVALID | The specified wallpaper file is invalid. |
| 400 | WALLPAPER_MIME_INVALID | The specified wallpaper MIME type is invalid. |

## Related pages

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
