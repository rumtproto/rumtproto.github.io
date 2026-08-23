---
title: "statsGroupTopPoster (конструктор)"
original: "https://core.telegram.org/constructor/statsGroupTopPoster"
section: ref
kind: constructor
layout: layout.njk
---

# statsGroupTopPoster

*Конструктор из схемы TL.*

> Information about an active user in a supergroup

## Определение TL

```
statsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |
| messages | [int](/type/int/) | Number of messages for [statistics](https://core.telegram.org/api/stats) period in consideration |
| avg_chars | [int](/type/int/) | Average number of characters per message |

## Тип

[StatsGroupTopPoster](/type/StatsGroupTopPoster/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
