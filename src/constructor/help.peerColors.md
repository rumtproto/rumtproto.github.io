---
title: "help.peerColors (конструктор)"
original: "https://core.telegram.org/constructor/help.peerColors"
section: ref
kind: constructor
layout: layout.njk
---

# help.peerColors

*Конструктор из схемы TL.*

> Contains info about multiple [color palettes »](https://core.telegram.org/api/colors).

## Определение TL

```
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| colors | [Vector](https://core.telegram.org/type/Vector%20t)<[help.PeerColorOption](/type/help.PeerColorOption/)> | Usable [color palettes](https://core.telegram.org/api/colors). |

## Тип

[help.PeerColors](/type/help.PeerColors/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
