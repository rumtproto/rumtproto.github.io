---
title: "MaskCoords (тип)"
original: "https://core.telegram.org/type/MaskCoords"
section: ref
kind: type
layout: layout.njk
---

# MaskCoords

*Тип из схемы TL.*

> Mask coordinates (if this is a mask sticker, attached to a photo)

## Определение TL

```
maskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [maskCoords](/constructor/maskCoords/) | Position on a photo where a mask should be placed when [attaching stickers to media »](https://core.telegram.org/api/stickers#attached-stickers) The n position indicates where the mask should be placed: - 0 => Relative to the forehead - 1 => Relative to the eyes - 2 => Relative to the mouth - 3 => Relative to the chin |
