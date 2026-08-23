---
title: "account.getCollectibleEmojiStatuses (метод)"
original: "https://core.telegram.org/method/account.getCollectibleEmojiStatuses"
section: ref
kind: method
layout: layout.njk
---

# account.getCollectibleEmojiStatuses

*Метод из схемы TL.*

> Obtain a list of [emoji statuses »](https://core.telegram.org/api/emoji-status) for owned or [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts).

## Определение TL

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
---functions---
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash for pagination](https://core.telegram.org/api/offsets) |

## Результат

[account.EmojiStatuses](/type/account.EmojiStatuses/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
