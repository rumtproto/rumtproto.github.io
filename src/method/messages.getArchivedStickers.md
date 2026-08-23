---
title: "messages.getArchivedStickers (метод)"
original: "https://core.telegram.org/method/messages.getArchivedStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getArchivedStickers

*Метод из схемы TL.*

> Get all archived stickers

## Определение TL

```
messages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;
---functions---
messages.getArchivedStickers#57f17692 flags:# masks:flags.0?true emojis:flags.1?true offset_id:long limit:int = messages.ArchivedStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Get [mask stickers](https://core.telegram.org/api/stickers#mask-stickers) |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Get [custom emoji stickers](https://core.telegram.org/api/custom-emoji) |
| offset_id | [long](/type/long/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.ArchivedStickers](/type/messages.ArchivedStickers/)

## Only users can use this method

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
