---
title: "Stats.BroadcastStats (тип)"
original: "https://core.telegram.org/type/stats.BroadcastStats"
section: ref
kind: type
layout: layout.njk
---

# Stats.BroadcastStats

*Тип из схемы TL.*

> Channel statistics

## Определение TL

```
stats.broadcastStats#396ca5fc period:StatsDateRangeDays followers:StatsAbsValueAndPrev views_per_post:StatsAbsValueAndPrev shares_per_post:StatsAbsValueAndPrev reactions_per_post:StatsAbsValueAndPrev views_per_story:StatsAbsValueAndPrev shares_per_story:StatsAbsValueAndPrev reactions_per_story:StatsAbsValueAndPrev enabled_notifications:StatsPercentValue growth_graph:StatsGraph followers_graph:StatsGraph mute_graph:StatsGraph top_hours_graph:StatsGraph interactions_graph:StatsGraph iv_interactions_graph:StatsGraph views_by_source_graph:StatsGraph new_followers_by_source_graph:StatsGraph languages_graph:StatsGraph reactions_by_emotion_graph:StatsGraph story_interactions_graph:StatsGraph story_reactions_by_emotion_graph:StatsGraph recent_posts_interactions:Vector<PostInteractionCounters> = stats.BroadcastStats;

---functions---

stats.getBroadcastStats#ab42441a flags:# dark:flags.0?true channel:InputChannel = stats.BroadcastStats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stats.broadcastStats](/constructor/stats.broadcastStats/) | [Channel statistics](https://core.telegram.org/api/stats). |

## Методы

| Method | Описание |
|---|---|
| [stats.getBroadcastStats](/method/stats.getBroadcastStats/) | Get [channel statistics](https://core.telegram.org/api/stats) |
