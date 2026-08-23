---
title: "messages.getEmojiStickers (метод)"
original: "https://core.telegram.org/method/messages.getEmojiStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiStickers

*Метод из схемы TL.*

> Gets the list of currently installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji).

## Определение TL

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
---functions---
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.AllStickers](/type/messages.AllStickers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
