---
title: "payments.starsRevenueStats"
original: "https://core.telegram.org/constructor/payments.starsRevenueStats"
section: ref
kind: constructor
description: "Статистика доходов в Stars; подробнее см. здесь »."
layout: layout.njk
---

# payments.starsRevenueStats

[Статистика доходов в Stars; подробнее см. здесь »](/api/stars/).

Обратите внимание, что все балансы, денежные суммы и значения графиков указаны в Stars.

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>top_hours_graph</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/StatsGraph">StatsGraph</a></td><td>Для статистики доходов от рекламы — график показов рекламы</td></tr><tr><td><strong>revenue_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График доходов в Stars (число заработанных Stars)</td></tr><tr><td><strong>status</strong></td><td style="text-align: center;"><a href="/type/StarsRevenueStatus">StarsRevenueStatus</a></td><td>Текущий баланс, текущий баланс, доступный для вывода, и общее количество заработанных Telegram Stars</td></tr><tr><td><strong>usd_rate</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Текущий курс пересчёта Telegram Stars в USD</td></tr></tbody></table>

### Тип

[payments.StarsRevenueStats](/type/payments.StarsRevenueStats/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
