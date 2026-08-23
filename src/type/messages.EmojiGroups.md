---
title: "messages.EmojiGroups (тип)"
original: "https://core.telegram.org/type/messages.EmojiGroups"
section: ref
kind: type
layout: layout.njk
---

# messages.EmojiGroups

*Тип из схемы TL.*

> Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories).

## Определение TL

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;

---functions---

messages.getEmojiGroups#7488ce5b hash:int = messages.EmojiGroups;
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.emojiGroupsNotModified](/constructor/messages.emojiGroupsNotModified/) | The list of [emoji categories](https://core.telegram.org/api/emoji-categories) hasn't changed. |
| [messages.emojiGroups](/constructor/messages.emojiGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories). |

## Методы

| Method | Описание |
|---|---|
| [messages.getEmojiGroups](/method/messages.getEmojiGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories). |
| [messages.getEmojiStatusGroups](/method/messages.getEmojiStatusGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories), to be used when selecting custom emojis to set as [custom emoji status](/api/). |
| [messages.getEmojiProfilePhotoGroups](/method/messages.getEmojiProfilePhotoGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories), to be used when selecting custom emojis to set as [profile picture](https://core.telegram.org/api/files/#sticker-profile-pictures). |
| [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/) | Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories), to be used when choosing a sticker. |

## Related pages

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
