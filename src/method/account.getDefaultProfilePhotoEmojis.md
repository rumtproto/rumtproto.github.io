---
title: "account.getDefaultProfilePhotoEmojis (метод)"
original: "https://core.telegram.org/method/account.getDefaultProfilePhotoEmojis"
section: ref
kind: method
layout: layout.njk
---

# account.getDefaultProfilePhotoEmojis

*Метод из схемы TL.*

> Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as profile picture](https://core.telegram.org/api/files/#sticker-profile-pictures)

## Определение TL

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
---functions---
account.getDefaultProfilePhotoEmojis#e2750328 hash:long = EmojiList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[EmojiList](/type/EmojiList/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
