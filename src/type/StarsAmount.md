---
title: "StarsAmount (тип)"
original: "https://core.telegram.org/type/StarsAmount"
section: ref
kind: type
layout: layout.njk
---

# StarsAmount

*Тип из схемы TL.*

> Describes a real (i.e. possibly decimal) amount of [Telegram Stars](https://core.telegram.org/api/stars).

## Определение TL

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
starsTonAmount#74aee3e0 amount:long = StarsAmount;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starsAmount](/constructor/starsAmount/) | Describes a real (i.e. possibly decimal) amount of [Telegram Stars](https://core.telegram.org/api/stars). |
| [starsTonAmount](/constructor/starsTonAmount/) | Describes an amount of Gram in nanograms (i.e. 1/1_000_000_000 of a Gram). |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
