---
title: "messages.getEmojiStatusGroups (метод)"
original: "https://core.telegram.org/method/messages.getEmojiStatusGroups"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiStatusGroups

*Метод из схемы TL.*

> Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories), to be used when selecting custom emojis to set as [custom emoji status](/api/).

## Определение TL

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
---functions---
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.EmojiGroups](/type/messages.EmojiGroups/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

#### [Telegram APIs](/api/)
