---
title: "stories.allStoriesNotModified (конструктор)"
original: "https://core.telegram.org/constructor/stories.allStoriesNotModified"
section: ref
kind: constructor
layout: layout.njk
---

# stories.allStoriesNotModified

*Конструктор из схемы TL.*

> The list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories) has not changed.

## Определение TL

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| state | [string](/type/string/) | State to use to ask for updates |
| stealth_mode | [StoriesStealthMode](/type/StoriesStealthMode/) | Current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) information |

## Тип

[stories.AllStories](/type/stories.AllStories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
