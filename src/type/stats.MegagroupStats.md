---
title: "stats.MegagroupStats"
original: "https://core.telegram.org/type/stats.MegagroupStats"
section: ref
kind: type
description: "Статистика супергруппы"
layout: layout.njk
---

# stats.MegagroupStats

Статистика супергруппы

```
stats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;

---functions---

stats.getMegagroupStats#dcdf8607 flags:# dark:flags.0?true channel:InputChannel = stats.MegagroupStats;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stats.megagroupStats">stats.megagroupStats</a></td><td><a href="/api/stats">Статистика</a> супергруппы</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stats.getMegagroupStats">stats.getMegagroupStats</a></td><td>Получить <a href="/api/stats">статистику супергруппы</a></td></tr></tbody></table>
