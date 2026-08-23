---
title: "stories.getStoriesViews (метод)"
original: "https://core.telegram.org/method/stories.getStoriesViews"
section: ref
kind: method
layout: layout.njk
---

# stories.getStoriesViews

*Метод из схемы TL.*

> Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](https://core.telegram.org/api/stories).

## Определение TL

```
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;
---functions---
stories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer whose stories should be fetched |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Story IDs |

## Результат

[stories.StoryViews](/type/stories.StoryViews/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_ID_EMPTY | You specified no story IDs. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
