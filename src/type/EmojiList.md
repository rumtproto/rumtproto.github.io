---
title: "EmojiList (тип)"
original: "https://core.telegram.org/type/EmojiList"
section: ref
kind: type
layout: layout.njk
---

# EmojiList

*Тип из схемы TL.*

> Represents a list of [custom emojis](https://core.telegram.org/api/custom-emoji).

## Определение TL

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

account.getDefaultProfilePhotoEmojis#e2750328 hash:long = EmojiList;
account.getDefaultGroupPhotoEmojis#915860ae hash:long = EmojiList;
account.getDefaultBackgroundEmojis#a60ab9ce hash:long = EmojiList;
account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;

messages.searchCustomEmoji#2c11c0d7 emoticon:string hash:long = EmojiList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emojiListNotModified](/constructor/emojiListNotModified/) | The list of [custom emojis](https://core.telegram.org/api/custom-emoji) hasn't changed. |
| [emojiList](/constructor/emojiList/) | Represents a list of [custom emojis](https://core.telegram.org/api/custom-emoji). |

## Методы

| Method | Описание |
|---|---|
| [account.getDefaultProfilePhotoEmojis](/method/account.getDefaultProfilePhotoEmojis/) | Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as profile picture](https://core.telegram.org/api/files/#sticker-profile-pictures) |
| [account.getDefaultGroupPhotoEmojis](/method/account.getDefaultGroupPhotoEmojis/) | Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as group picture](https://core.telegram.org/api/files/#sticker-profile-pictures) |
| [account.getDefaultBackgroundEmojis](/method/account.getDefaultBackgroundEmojis/) | Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be used in an [accent color pattern](https://core.telegram.org/api/colors). |
| [account.getChannelRestrictedStatusEmojis](/method/account.getChannelRestrictedStatusEmojis/) | Returns fetch the full list of [custom emoji IDs »](https://core.telegram.org/api/custom-emoji) that cannot be used in [channel emoji statuses »](https://core.telegram.org/api/emoji-status). |
| [messages.searchCustomEmoji](/method/messages.searchCustomEmoji/) | Look for [custom emojis](https://core.telegram.org/api/custom-emoji) associated to a UTF8 emoji |

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
