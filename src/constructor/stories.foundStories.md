---
title: "stories.foundStories (конструктор)"
original: "https://core.telegram.org/constructor/stories.foundStories"
section: ref
kind: constructor
layout: layout.njk
---

# stories.foundStories

*Конструктор из схемы TL.*

> Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories).

## Определение TL

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results found for the query. |
| stories | [Vector](https://core.telegram.org/type/Vector%20t)<[FoundStory](/type/FoundStory/)> | Matching stories. |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset used to fetch the next page, if not set this is the final page. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[stories.FoundStories](/type/stories.FoundStories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
