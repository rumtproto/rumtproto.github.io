---
title: "messages.searchCustomEmoji (метод)"
original: "https://core.telegram.org/method/messages.searchCustomEmoji"
section: ref
kind: method
layout: layout.njk
---

# messages.searchCustomEmoji

*Метод из схемы TL.*

> Look for [custom emojis](https://core.telegram.org/api/custom-emoji) associated to a UTF8 emoji

## Определение TL

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
---functions---
messages.searchCustomEmoji#2c11c0d7 emoticon:string hash:long = EmojiList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoticon | [string](/type/string/) | The emoji |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[EmojiList](/type/EmojiList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMOTICON_EMPTY | The emoji is empty. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
