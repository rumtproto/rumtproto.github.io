---
title: "premium.BoostsStatus"
original: "https://core.telegram.org/type/premium.BoostsStatus"
section: ref
kind: type
description: "Содержит информацию о текущем состоянии бустов пира."
layout: layout.njk
---

# Premium.BoostsStatus

Содержит информацию о текущем [состоянии бустов](/api/boost/) пира.

```
premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;

---functions---

premium.getBoostsStatus#42f1f61 peer:InputPeer = premium.BoostsStatus;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsStatus">premium.boostsStatus</a></td><td>Содержит информацию о текущем <a href="/api/boost">состоянии бустов</a> пира.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsStatus">premium.getBoostsStatus</a></td><td>Получает текущее <a href="/api/boost">количество бустов</a> канала или супергруппы.</td></tr></tbody></table>

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
