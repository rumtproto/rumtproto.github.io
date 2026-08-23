---
title: "stories.getStoryReactionsList (метод)"
original: "https://core.telegram.org/method/stories.getStoryReactionsList"
section: ref
kind: method
layout: layout.njk
---

# stories.getStoryReactionsList

*Метод из схемы TL.*

> Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction.
> Can only be used by channel admins.

## Определение TL

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;
---functions---
stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| forwards_first | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. |
| peer | [InputPeer](/type/InputPeer/) | Channel |
| id | [int](/type/int/) | [Story](https://core.telegram.org/api/stories) ID |
| reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Reaction](/type/Reaction/) | Get only reactions of this type |
| offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Offset for pagination (taken from the next_offset field of the returned [stories.StoryReactionsList](/type/stories.StoryReactionsList/)); empty in the first request. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stories.StoryReactionsList](/type/stories.StoryReactionsList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [stories.StoryReactionsList](/type/stories.StoryReactionsList/)

List of peers that reacted to a specific [story](https://core.telegram.org/api/stories)

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
