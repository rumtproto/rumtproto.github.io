---
title: "account.emojiStatuses (конструктор)"
original: "https://core.telegram.org/constructor/account.emojiStatuses"
section: ref
kind: constructor
layout: layout.njk
---

# account.emojiStatuses

*Конструктор из схемы TL.*

> A list of [emoji statuses](https://core.telegram.org/api/emoji-status)

## Определение TL

```
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| statuses | [Vector](https://core.telegram.org/type/Vector%20t)<[EmojiStatus](/type/EmojiStatus/)> | [Emoji statuses](https://core.telegram.org/api/emoji-status) |

## Тип

[account.EmojiStatuses](/type/account.EmojiStatuses/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
