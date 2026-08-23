---
title: "account.getChannelRestrictedStatusEmojis (метод)"
original: "https://core.telegram.org/method/account.getChannelRestrictedStatusEmojis"
section: ref
kind: method
layout: layout.njk
---

# account.getChannelRestrictedStatusEmojis

*Метод из схемы TL.*

> Returns fetch the full list of [custom emoji IDs »](https://core.telegram.org/api/custom-emoji) that cannot be used in [channel emoji statuses »](https://core.telegram.org/api/emoji-status).

## Определение TL

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
---functions---
account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;
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

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
