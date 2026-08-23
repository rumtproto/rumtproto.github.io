---
title: "starsRating (конструктор)"
original: "https://core.telegram.org/constructor/starsRating"
section: ref
kind: constructor
layout: layout.njk
---

# starsRating

*Конструктор из схемы TL.*

> Represents the profile's [star rating, see here »](https://core.telegram.org/api/stars#star-rating) for more info.

## Определение TL

```
starsRating#1b0e4f07 flags:# level:int current_level_stars:long stars:long next_level_stars:flags.0?long = StarsRating;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| level | [int](/type/int/) | The current level, may be negative. |
| current_level_stars | [long](/type/long/) | The numerical value of the rating required for the current level. |
| stars | [long](/type/long/) | Numerical value of the current rating. |
| next_level_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | The numerical value of the rating required for the next level. |

## Тип

[StarsRating](/type/StarsRating/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
