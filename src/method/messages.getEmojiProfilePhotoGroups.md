---
title: "messages.getEmojiProfilePhotoGroups (метод)"
original: "https://core.telegram.org/method/messages.getEmojiProfilePhotoGroups"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiProfilePhotoGroups

*Метод из схемы TL.*

> Represents a list of [emoji categories](https://core.telegram.org/api/emoji-categories), to be used when selecting custom emojis to set as [profile picture](https://core.telegram.org/api/files/#sticker-profile-pictures).

## Определение TL

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
---functions---
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
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

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
