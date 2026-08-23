---
title: "wallPaperSettings (конструктор)"
original: "https://core.telegram.org/constructor/wallPaperSettings"
section: ref
kind: constructor
layout: layout.njk
---

# wallPaperSettings

*Конструктор из схемы TL.*

> [Wallpaper](https://core.telegram.org/api/wallpapers) rendering information.

## Определение TL

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blur | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | For [image wallpapers »](https://core.telegram.org/api/wallpapers#image-wallpapers): if set, the JPEG must be downscaled to fit in 450x450 square and then box-blurred with radius 12. |
| motion | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, the background needs to be slightly moved when the device is rotated. |
| background_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Used for [solid »](https://core.telegram.org/api/wallpapers#solid-fill), [gradient »](https://core.telegram.org/api/wallpapers#gradient-fill) and [freeform gradient »](https://core.telegram.org/api/wallpapers#freeform-gradient-fill) fills. |
| second_background_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Used for [gradient »](https://core.telegram.org/api/wallpapers#gradient-fill) and [freeform gradient »](https://core.telegram.org/api/wallpapers#freeform-gradient-fill) fills. |
| third_background_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Used for [freeform gradient »](https://core.telegram.org/api/wallpapers#freeform-gradient-fill) fills. |
| fourth_background_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Used for [freeform gradient »](https://core.telegram.org/api/wallpapers#freeform-gradient-fill) fills. |
| intensity | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Used for [pattern wallpapers »](https://core.telegram.org/api/wallpapers#pattern-wallpapers). |
| rotation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible by 45. |
| emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[string](/type/string/) | If set, this wallpaper can be used as a channel wallpaper and is represented by the specified UTF-8 emoji. |

## Тип

[WallPaperSettings](/type/WallPaperSettings/)

## Related pages

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
