---
title: "stories.stories (конструктор)"
original: "https://core.telegram.org/constructor/stories.stories"
section: ref
kind: constructor
layout: layout.njk
---

# stories.stories

*Конструктор из схемы TL.*

> List of [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories)

## Определение TL

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of stories that can be fetched |
| stories | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryItem](/type/StoryItem/)> | Stories |
| pinned_to_top | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of pinned stories. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[stories.Stories](/type/stories.Stories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
