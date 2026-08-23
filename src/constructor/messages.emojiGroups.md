---
title: "messages.emojiGroups (конструктор)"
original: "https://core.telegram.org/constructor/messages.emojiGroups"
section: ref
kind: constructor
layout: layout.njk
---

# messages.emojiGroups

*Конструктор из схемы TL.*

> Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories).

## Определение TL

```
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| groups | [Vector](https://core.telegram.org/type/Vector%20t)<[EmojiGroup](/type/EmojiGroup/)> | A list of [emoji categories](https://core.telegram.org/api/emoji-categories). |

## Тип

[messages.EmojiGroups](/type/messages.EmojiGroups/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
