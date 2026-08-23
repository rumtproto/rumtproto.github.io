---
title: "account.EmojiStatuses (тип)"
original: "https://core.telegram.org/type/account.EmojiStatuses"
section: ref
kind: type
layout: layout.njk
---

# account.EmojiStatuses

*Тип из схемы TL.*

> A list of [emoji statuses](https://core.telegram.org/api/emoji-status)

## Определение TL

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

---functions---

account.getDefaultEmojiStatuses#d6753386 hash:long = account.EmojiStatuses;
account.getRecentEmojiStatuses#f578105 hash:long = account.EmojiStatuses;
account.getChannelDefaultEmojiStatuses#7727a7d5 hash:long = account.EmojiStatuses;
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.emojiStatusesNotModified](/constructor/account.emojiStatusesNotModified/) | The server-side list of [emoji statuses](https://core.telegram.org/api/emoji-status) hasn't changed |
| [account.emojiStatuses](/constructor/account.emojiStatuses/) | A list of [emoji statuses](https://core.telegram.org/api/emoji-status) |

## Методы

| Method | Описание |
|---|---|
| [account.getDefaultEmojiStatuses](/method/account.getDefaultEmojiStatuses/) | Get a list of default suggested [emoji statuses](https://core.telegram.org/api/emoji-status) |
| [account.getRecentEmojiStatuses](/method/account.getRecentEmojiStatuses/) | Get recently used [emoji statuses](https://core.telegram.org/api/emoji-status) |
| [account.getChannelDefaultEmojiStatuses](/method/account.getChannelDefaultEmojiStatuses/) | Get a list of default suggested [channel emoji statuses](https://core.telegram.org/api/emoji-status). |
| [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/) | Obtain a list of [emoji statuses »](https://core.telegram.org/api/emoji-status) for owned or [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts). |

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
