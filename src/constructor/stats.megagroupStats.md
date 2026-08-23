---
title: "stats.megagroupStats (конструктор)"
original: "https://core.telegram.org/constructor/stats.megagroupStats"
section: ref
kind: constructor
layout: layout.njk
---

# stats.megagroupStats

*Конструктор из схемы TL.*

> Supergroup [statistics](https://core.telegram.org/api/stats)

## Определение TL

```
stats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| period | [StatsDateRangeDays](/type/StatsDateRangeDays/) | Period in consideration |
| members | [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Member count change for period in consideration |
| messages | [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Message number change for period in consideration |
| viewers | [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Number of users that viewed messages, for range in consideration |
| posters | [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Number of users that posted messages, for range in consideration |
| growth_graph | [StatsGraph](/type/StatsGraph/) | Supergroup growth graph (absolute subscriber count) |
| members_graph | [StatsGraph](/type/StatsGraph/) | Members growth (relative subscriber count) |
| new_members_by_source_graph | [StatsGraph](/type/StatsGraph/) | New members by source graph |
| languages_graph | [StatsGraph](/type/StatsGraph/) | Subscriber language graph (pie chart) |
| messages_graph | [StatsGraph](/type/StatsGraph/) | Message activity graph (stacked bar graph, message type) |
| actions_graph | [StatsGraph](/type/StatsGraph/) | Group activity graph (deleted, modified messages, blocked users) |
| top_hours_graph | [StatsGraph](/type/StatsGraph/) | Activity per hour graph (absolute) |
| weekdays_graph | [StatsGraph](/type/StatsGraph/) | Activity per day of week graph (absolute) |
| top_posters | [Vector](https://core.telegram.org/type/Vector%20t)<[StatsGroupTopPoster](/type/StatsGroupTopPoster/)> | Info about most active group members |
| top_admins | [Vector](https://core.telegram.org/type/Vector%20t)<[StatsGroupTopAdmin](/type/StatsGroupTopAdmin/)> | Info about most active group admins |
| top_inviters | [Vector](https://core.telegram.org/type/Vector%20t)<[StatsGroupTopInviter](/type/StatsGroupTopInviter/)> | Info about most active group inviters |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about users mentioned in statistics |

## Тип

[stats.MegagroupStats](/type/stats.MegagroupStats/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
