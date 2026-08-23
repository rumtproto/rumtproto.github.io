---
title: "stats.storyStats (конструктор)"
original: "https://core.telegram.org/constructor/stats.storyStats"
section: ref
kind: constructor
layout: layout.njk
---

# stats.storyStats

*Конструктор из схемы TL.*

> Contains [statistics](https://core.telegram.org/api/stats) about a [story](https://core.telegram.org/api/stories).

## Определение TL

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| views_graph | [StatsGraph](/type/StatsGraph/) | A graph containing the number of story views and shares |
| reactions_by_emotion_graph | [StatsGraph](/type/StatsGraph/) | A bar graph containing the number of story reactions categorized by "emotion" (i.e. Positive, Negative, Other, etc...) |

## Тип

[stats.StoryStats](/type/stats.StoryStats/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
