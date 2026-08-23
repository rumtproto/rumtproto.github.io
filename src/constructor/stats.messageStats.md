---
title: "stats.messageStats (конструктор)"
original: "https://core.telegram.org/constructor/stats.messageStats"
section: ref
kind: constructor
layout: layout.njk
---

# stats.messageStats

*Конструктор из схемы TL.*

> Message statistics

## Определение TL

```
stats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| views_graph | [StatsGraph](/type/StatsGraph/) | Message view graph |
| reactions_by_emotion_graph | [StatsGraph](/type/StatsGraph/) | A graph containing the number of reactions on stories categorized by emotion |

## Тип

[stats.MessageStats](/type/stats.MessageStats/)
