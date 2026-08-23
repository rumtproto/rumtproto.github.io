---
title: "stories.storyViewsList (конструктор)"
original: "https://core.telegram.org/constructor/stories.storyViewsList"
section: ref
kind: constructor
layout: layout.njk
---

# stories.storyViewsList

*Конструктор из схемы TL.*

> Reaction and view counters for a [story](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results that can be fetched |
| views_count | [int](/type/int/) | Total number of story views |
| forwards_count | [int](/type/int/) | Total number of story forwards/reposts |
| reactions_count | [int](/type/int/) | Number of reactions that were added to the story |
| views | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryView](/type/StoryView/)> | Story view date and reaction information |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset for pagination |

## Тип

[stories.StoryViewsList](/type/stories.StoryViewsList/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
