---
title: "stats.getStoryStats (метод)"
original: "https://core.telegram.org/method/stats.getStoryStats"
section: ref
kind: method
layout: layout.njk
---

# stats.getStoryStats

*Метод из схемы TL.*

> Get [statistics](https://core.telegram.org/api/stats) for a certain [story](https://core.telegram.org/api/stories).

## Определение TL

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;
---functions---
stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to enable the dark theme for graph colors |
| peer | [InputPeer](/type/InputPeer/) | The peer that posted the story |
| id | [int](/type/int/) | Story ID |

## Результат

[stats.StoryStats](/type/stats.StoryStats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORIES_NEVER_CREATED | This peer hasn't ever posted any stories. |

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
