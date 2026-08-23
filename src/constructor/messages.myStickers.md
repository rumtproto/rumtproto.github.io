---
title: "messages.myStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.myStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.myStickers

*Конструктор из схемы TL.*

> The list of [stickersets owned by the current account »](https://core.telegram.org/api/stickers).

## Определение TL

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of owned stickersets. |
| sets | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)> | Stickersets |

## Тип

[messages.MyStickers](/type/messages.MyStickers/)

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
