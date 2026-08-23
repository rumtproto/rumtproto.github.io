---
title: "messageActionSetChatWallPaper (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSetChatWallPaper"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSetChatWallPaper

*Конструктор из схемы TL.*

> The [wallpaper »](https://core.telegram.org/api/wallpapers) of the current chat was changed.

## Определение TL

```
messageActionSetChatWallPaper#5060a3f4 flags:# same:flags.0?true for_both:flags.1?true wallpaper:WallPaper = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| same | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, indicates the user applied a [wallpaper »](https://core.telegram.org/api/wallpapers) previously sent by the other user in a [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) message. |
| for_both | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, indicates the wallpaper was forcefully applied for both sides, without explicit confirmation from the other side. If the message is incoming, and we did not like the new wallpaper the other user has chosen for us, we can re-set our previous wallpaper just on our side, by invoking [messages.setChatWallPaper](/method/messages.setChatWallPaper/), providing only the revert flag (and obviously the peer parameter). |
| wallpaper | [WallPaper](/type/WallPaper/) | New [wallpaper](https://core.telegram.org/api/wallpapers) |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/)

The [wallpaper »](https://core.telegram.org/api/wallpapers) of the current chat was changed.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user.
