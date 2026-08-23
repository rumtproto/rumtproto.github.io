---
title: "stories.storyReactionsList (конструктор)"
original: "https://core.telegram.org/constructor/stories.storyReactionsList"
section: ref
kind: constructor
layout: layout.njk
---

# stories.storyReactionsList

*Конструктор из схемы TL.*

> List of peers that reacted to or intercated with a specific [story](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of reactions matching query |
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryReaction](/type/StoryReaction/)> | List of peers that reacted to or interacted with a specific story |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, indicates the next offset to use to load more results by invoking [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/). |

## Тип

[stories.StoryReactionsList](/type/stories.StoryReactionsList/)

## Related pages

#### [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/)

Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction.

Can only be used by channel admins.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
