---
title: "themeSettings (конструктор)"
original: "https://core.telegram.org/constructor/themeSettings"
section: ref
kind: constructor
layout: layout.njk
---

# themeSettings

*Конструктор из схемы TL.*

> Theme settings

## Определение TL

```
themeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| message_colors_animated | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, the freeform gradient fill needs to be animated on every sent message. |
| base_theme | [BaseTheme](/type/BaseTheme/) | Base theme |
| accent_color | [int](/type/int/) | Accent color, ARGB format |
| outbox_accent_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Accent color of outgoing messages in ARGB format |
| message_colors | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | The fill to be used as a background for outgoing messages, in RGB24 format. If just one or two equal colors are provided, describes a solid fill of a background. If two different colors are provided, describes the top and bottom colors of a 0-degree gradient. If three or four colors are provided, describes a freeform gradient fill of a background. |
| wallpaper | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[WallPaper](/type/WallPaper/) | [Wallpaper](https://core.telegram.org/api/wallpapers) |

## Тип

[ThemeSettings](/type/ThemeSettings/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
