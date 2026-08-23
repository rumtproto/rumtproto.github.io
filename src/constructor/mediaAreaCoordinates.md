---
title: "mediaAreaCoordinates (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaCoordinates"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaCoordinates

*Конструктор из схемы TL.*

> Coordinates and size of a clickable rectangular area on top of a story.

## Определение TL

```
mediaAreaCoordinates#cfc9e002 flags:# x:double y:double w:double h:double rotation:double radius:flags.0?double = MediaAreaCoordinates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| x | [double](/type/double/) | The abscissa of the rectangle's center, as a percentage of the media width (0-100). |
| y | [double](/type/double/) | The ordinate of the rectangle's center, as a percentage of the media height (0-100). |
| w | [double](/type/double/) | The width of the rectangle, as a percentage of the media width (0-100). |
| h | [double](/type/double/) | The height of the rectangle, as a percentage of the media height (0-100). |
| rotation | [double](/type/double/) | Clockwise rotation angle of the rectangle, in degrees (0-360). |
| radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[double](/type/double/) | The radius of the rectangle corner rounding, as a percentage of the media width. |

## Тип

[MediaAreaCoordinates](/type/MediaAreaCoordinates/)
