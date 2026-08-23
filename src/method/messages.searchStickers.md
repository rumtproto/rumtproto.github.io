---
title: "messages.searchStickers (метод)"
original: "https://core.telegram.org/method/messages.searchStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.searchStickers

*Метод из схемы TL.*

> Search for stickers using AI-powered keyword search

## Определение TL

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;
---functions---
messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, returns [custom emoji stickers](https://core.telegram.org/api/custom-emoji) |
| q | [string](/type/string/) | The search term |
| emoticon | [string](/type/string/) | Space-separated list of emojis to search for |
| lang_code | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | List of possible IETF language tags of the user's input language; may be empty if unknown |
| offset | [int](/type/int/) | [Offset for pagination](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). The hash may be generated locally by using the ids of the returned or stored sticker [document](/constructor/document/)s. |

## Результат

[messages.FoundStickers](/type/messages.FoundStickers/)

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [document](/constructor/document/)

Document
