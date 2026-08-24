---
title: "payments.SuggestedStarRefBots"
original: "https://core.telegram.org/type/payments.SuggestedStarRefBots"
section: ref
kind: type
description: "Список предлагаемых Mini Apps с доступными партнёрскими программами"
layout: layout.njk
---

# Payments.SuggestedStarRefBots

Список предлагаемых [Mini Apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/)

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;

---functions---

payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.suggestedStarRefBots">payments.suggestedStarRefBots</a></td><td>Список предлагаемых <a href="/api/bots/webapps">mini apps</a> с доступными <a href="/api/bots/referrals">партнёрскими программами</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getSuggestedStarRefBots">payments.getSuggestedStarRefBots</a></td><td>Получить список рекомендуемых <a href="/api/bots/webapps">mini apps</a> с доступными <a href="/api/bots/referrals">партнёрскими программами</a><br><br><code>order_by_revenue</code> и <code>order_by_date</code> взаимоисключающие: если не задан ни один из них, результаты сортируются по прибыльности.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
