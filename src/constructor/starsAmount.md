---
title: "starsAmount (конструктор)"
original: "https://core.telegram.org/constructor/starsAmount"
section: ref
kind: constructor
layout: layout.njk
---

# starsAmount

*Конструктор из схемы TL.*

> Describes a real (i.e. possibly decimal) amount of [Telegram Stars](https://core.telegram.org/api/stars).

## Определение TL

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| amount | [long](/type/long/) | The integer amount of Telegram Stars. |
| nanos | [int](/type/int/) | The decimal amount of Telegram Stars, expressed as nanostars (i.e. 1 nanostar is equal to 1/1_000_000_000th (one billionth) of a Telegram Star). This field may also be negative (the allowed range is from -999_999_999 to 999_999_999). |

## Тип

[StarsAmount](/type/StarsAmount/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
