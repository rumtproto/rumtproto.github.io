---
title: "payments.StarsRevenueStats"
original: "https://core.telegram.org/type/payments.StarsRevenueStats"
section: ref
kind: type
description: "Статистика доходов в Stars; подробнее см. здесь »."
layout: layout.njk
---

# payments.StarsRevenueStats

[Статистика доходов в Stars; подробнее см. здесь »](/api/stars/).

Обратите внимание, что все балансы, денежные суммы и значения графиков указаны в Stars.

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;

---functions---

payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsRevenueStats">payments.starsRevenueStats</a></td><td><a href="/api/stars">Статистика доходов в Stars; подробнее см. здесь »</a>.<br><br>Обратите внимание, что все балансы, денежные суммы и значения графиков указаны в Stars.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsRevenueStats">payments.getStarsRevenueStats</a></td><td>Получить <a href="/api/stars">статистику доходов в Telegram Stars »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
