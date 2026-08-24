---
title: "Birthday"
original: "https://core.telegram.org/type/Birthday"
section: ref
kind: type
description: "Сведения о дне рождения пользователя."
layout: layout.njk
---

# Birthday

Сведения о [дне рождения](/api/profile/#birthday) пользователя.

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/birthday">birthday</a></td><td>Сведения о <a href="/api/profile#birthday">дне рождения</a> пользователя.<br><br>Также используется, чтобы предложить пользователям подарить <a href="/api/premium#gifting-telegram-premium">подписку Telegram Premium »</a> тем, у кого день рождения приходится на промежуток ±1 день относительно текущего дня.</td></tr></tbody></table>

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
