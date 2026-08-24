---
title: "StarRefProgram"
original: "https://core.telegram.org/type/StarRefProgram"
section: ref
kind: type
description: "Информация о партнёрской программе, предлагаемой ботом"
layout: layout.njk
---

# StarRefProgram

Информация о [партнёрской программе, предлагаемой ботом](/api/bots/referrals/)

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;

---functions---

bots.updateStarRefProgram#778b5ab3 flags:# bot:InputUser commission_permille:int duration_months:flags.0?int = StarRefProgram;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starRefProgram">starRefProgram</a></td><td>Информация о <a href="/api/bots/referrals">партнёрской программе, предлагаемой ботом</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.updateStarRefProgram">bots.updateStarRefProgram</a></td><td>Создать, изменить или удалить <a href="/api/bots/referrals">партнёрскую программу</a> принадлежащего нам бота</td></tr></tbody></table>

### Связанные страницы

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
