---
title: "starGiftBackground (конструктор)"
original: "https://core.telegram.org/constructor/starGiftBackground"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftBackground

*Конструктор из схемы TL.*

> Contains the default background palette of a [gift type »](https://core.telegram.org/api/gifts#listing-all-possible-collectible-variants).

## Определение TL

```
starGiftBackground#aff56398 center_color:int edge_color:int text_color:int = StarGiftBackground;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| center_color | [int](/type/int/) | Center color of the background palette, in RGB24 format. |
| edge_color | [int](/type/int/) | Edge color of the background palette, in RGB24 format. |
| text_color | [int](/type/int/) | Text color to use on top of the background palette, in RGB24 format. |

## Тип

[StarGiftBackground](/type/StarGiftBackground/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
