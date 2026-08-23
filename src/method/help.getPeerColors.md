---
title: "help.getPeerColors (метод)"
original: "https://core.telegram.org/method/help.getPeerColors"
section: ref
kind: method
layout: layout.njk
---

# help.getPeerColors

*Метод из схемы TL.*

> Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used for message accents.

## Определение TL

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;
---functions---
help.getPeerColors#da80f42f hash:int = help.PeerColors;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[help.PeerColors](/type/help.PeerColors/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
