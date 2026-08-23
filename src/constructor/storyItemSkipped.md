---
title: "storyItemSkipped (конструктор)"
original: "https://core.telegram.org/constructor/storyItemSkipped"
section: ref
kind: constructor
layout: layout.njk
---

# storyItemSkipped

*Конструктор из схемы TL.*

> Represents an active story, whose full information was omitted for space and performance reasons; use [stories.getStoriesByID](/method/stories.getStoriesByID/) to fetch full info about the skipped story when and if needed.

## Определение TL

```
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| close_friends | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether this story can only be viewed by [our close friends, see here »](https://core.telegram.org/api/privacy) for more info |
| live | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether this story is a [live video stream »](https://core.telegram.org/api/stories). |
| id | [int](/type/int/) | Story ID |
| date | [int](/type/int/) | When was the story posted. |
| expire_date | [int](/type/int/) | When does the story expire. |

## Тип

[StoryItem](/type/StoryItem/)

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs.
