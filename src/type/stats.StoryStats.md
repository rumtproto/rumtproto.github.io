---
title: "Stats.StoryStats (тип)"
original: "https://core.telegram.org/type/stats.StoryStats"
section: ref
kind: type
layout: layout.njk
---

# Stats.StoryStats

*Тип из схемы TL.*

> Contains [statistics](https://core.telegram.org/api/stats) about a [story](https://core.telegram.org/api/stories).

## Определение TL

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;

---functions---

stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stats.storyStats](/constructor/stats.storyStats/) | Contains [statistics](https://core.telegram.org/api/stats) about a [story](https://core.telegram.org/api/stories). |

## Методы

| Method | Описание |
|---|---|
| [stats.getStoryStats](/method/stats.getStoryStats/) | Get [statistics](https://core.telegram.org/api/stats) for a certain [story](https://core.telegram.org/api/stories). |

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
