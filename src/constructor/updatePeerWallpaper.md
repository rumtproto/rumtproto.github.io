---
title: "updatePeerWallpaper (конструктор)"
original: "https://core.telegram.org/constructor/updatePeerWallpaper"
section: ref
kind: constructor
layout: layout.njk
---

# updatePeerWallpaper

*Конструктор из схемы TL.*

> The [wallpaper »](https://core.telegram.org/api/wallpapers) of a given peer has changed.

## Определение TL

```
updatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| wallpaper_overridden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the other user has chosen a custom wallpaper for us using [messages.setChatWallPaper](/method/messages.setChatWallPaper/) and the for_both flag, see [here »](https://core.telegram.org/api/wallpapers#installing-wallpapers-in-a-specific-chat-or-channel) for more info. |
| peer | [Peer](/type/Peer/) | The peer where the wallpaper has changed. |
| wallpaper | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[WallPaper](/type/WallPaper/) | The new wallpaper, if none the wallpaper was removed and the default wallpaper should be used. |

## Тип

[Update](/type/Update/)

## Related pages

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
