---
title: "stats.MessageStats (тип)"
original: "https://core.telegram.org/type/stats.MessageStats"
section: ref
kind: type
layout: layout.njk
---

# stats.MessageStats

*Тип из схемы TL.*

> Message statistics

## Определение TL

```
stats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;

---functions---

stats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stats.messageStats](/constructor/stats.messageStats/) | Message statistics |

## Методы

| Method | Описание |
|---|---|
| [stats.getMessageStats](/method/stats.getMessageStats/) | Get [message statistics](https://core.telegram.org/api/stats) |
