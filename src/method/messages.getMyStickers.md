---
title: "messages.getMyStickers (метод)"
original: "https://core.telegram.org/method/messages.getMyStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getMyStickers

*Метод из схемы TL.*

> Fetch all [stickersets »](https://core.telegram.org/api/stickers) owned by the current user.

## Определение TL

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
---functions---
messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset_id | [long](/type/long/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.MyStickers](/type/messages.MyStickers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
