---
title: "stories.StoryReactionsList (тип)"
original: "https://core.telegram.org/type/stories.StoryReactionsList"
section: ref
kind: type
layout: layout.njk
---

# stories.StoryReactionsList

*Тип из схемы TL.*

> List of peers that reacted to a specific [story](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;

---functions---

stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.storyReactionsList](/constructor/stories.storyReactionsList/) | List of peers that reacted to or intercated with a specific [story](https://core.telegram.org/api/stories) |

## Методы

| Method | Описание |
|---|---|
| [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/) | Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction. Can only be used by channel admins. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
