---
title: "stats.megagroupStats"
original: "https://core.telegram.org/constructor/stats.megagroupStats"
section: ref
kind: constructor
description: "Статистика супергруппы"
layout: layout.njk
---

# stats.megagroupStats

[Статистика](/api/stats/) супергруппы

```
stats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/StatsDateRangeDays">StatsDateRangeDays</a></td><td>Рассматриваемый период</td></tr><tr><td><strong>members</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev">StatsAbsValueAndPrev</a></td><td>Изменение количества участников за рассматриваемый период</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev">StatsAbsValueAndPrev</a></td><td>Изменение числа сообщений за рассматриваемый период</td></tr><tr><td><strong>viewers</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev">StatsAbsValueAndPrev</a></td><td>Количество пользователей, просматривавших сообщения, за рассматриваемый период</td></tr><tr><td><strong>posters</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev">StatsAbsValueAndPrev</a></td><td>Количество пользователей, отправлявших сообщения, за рассматриваемый период</td></tr><tr><td><strong>growth_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График роста супергруппы (абсолютное число подписчиков)</td></tr><tr><td><strong>members_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>Прирост участников (относительное количество подписчиков)</td></tr><tr><td><strong>new_members_by_source_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График новых участников по источникам</td></tr><tr><td><strong>languages_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График языков подписчиков (круговая диаграмма)</td></tr><tr><td><strong>messages_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График активности сообщений (столбчатая диаграмма с накоплением, по типу сообщений)</td></tr><tr><td><strong>actions_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График активности в группе (удалённые и изменённые сообщения, заблокированные пользователи)</td></tr><tr><td><strong>top_hours_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График активности по часам (абсолютные значения)</td></tr><tr><td><strong>weekdays_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График активности по дням недели (абсолютные значения)</td></tr><tr><td><strong>top_posters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StatsGroupTopPoster">StatsGroupTopPoster</a>&gt;</td><td>Информация о самых активных участниках группы</td></tr><tr><td><strong>top_admins</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StatsGroupTopAdmin">StatsGroupTopAdmin</a>&gt;</td><td>Информация о самых активных администраторах группы</td></tr><tr><td><strong>top_inviters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StatsGroupTopInviter">StatsGroupTopInviter</a>&gt;</td><td>Информация о пользователях, чаще всего приглашающих в группу</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о пользователях, упомянутых в статистике</td></tr></tbody></table>

### Тип

[stats.MegagroupStats](/type/stats.MegagroupStats/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
