---
title: "maskCoords (конструктор)"
original: "https://core.telegram.org/constructor/maskCoords"
section: ref
kind: constructor
layout: layout.njk
---

# maskCoords

*Конструктор из схемы TL.*

> Position on a photo where a mask should be placed when [attaching stickers to media »](https://core.telegram.org/api/stickers#attached-stickers)
> The `n` position indicates where the mask should be placed:
> -   0 => Relative to the forehead
> -   1 => Relative to the eyes
> -   2 => Relative to the mouth
> -   3 => Relative to the chin

## Определение TL

```
maskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| n | [int](/type/int/) | Part of the face, relative to which the mask should be placed |
| x | [double](/type/double/) | Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position) |
| y | [double](/type/double/) | Shift by Y-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just below the default mask position) |
| zoom | [double](/type/double/) | Mask scaling coefficient. (For example, 2.0 means a doubled size) |

## Тип

[MaskCoords](/type/MaskCoords/)

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
