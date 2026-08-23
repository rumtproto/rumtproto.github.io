---
title: "stats.MegagroupStats (тип)"
original: "https://core.telegram.org/type/stats.MegagroupStats"
section: ref
kind: type
layout: layout.njk
---

# stats.MegagroupStats

*Тип из схемы TL.*

> Supergroup statistics

## Определение TL

```
stats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;

---functions---

stats.getMegagroupStats#dcdf8607 flags:# dark:flags.0?true channel:InputChannel = stats.MegagroupStats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stats.megagroupStats](/constructor/stats.megagroupStats/) | Supergroup [statistics](https://core.telegram.org/api/stats) |

## Методы

| Method | Описание |
|---|---|
| [stats.getMegagroupStats](/method/stats.getMegagroupStats/) | Get [supergroup statistics](https://core.telegram.org/api/stats) |
