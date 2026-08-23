---
title: "account.getChannelDefaultEmojiStatuses (метод)"
original: "https://core.telegram.org/method/account.getChannelDefaultEmojiStatuses"
section: ref
kind: method
layout: layout.njk
---

# account.getChannelDefaultEmojiStatuses

*Метод из схемы TL.*

> Get a list of default suggested [channel emoji statuses](https://core.telegram.org/api/emoji-status).

## Определение TL

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
---functions---
account.getChannelDefaultEmojiStatuses#7727a7d5 hash:long = account.EmojiStatuses;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[account.EmojiStatuses](/type/account.EmojiStatuses/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
