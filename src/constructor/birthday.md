---
title: "birthday"
original: "https://core.telegram.org/constructor/birthday"
section: ref
kind: constructor
description: "Сведения о дне рождения пользователя."
layout: layout.njk
---

# birthday

Сведения о [дне рождения](/api/profile/#birthday) пользователя.

Также используется, чтобы предложить подарить [подписки Telegram Premium »](/api/premium/#gifting-telegram-premium) другим пользователям, у которых день рождения приходится на промежуток ±1 день от текущего дня.

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>day</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>День рождения (день)</td></tr><tr><td><strong>month</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>День рождения (месяц)</td></tr><tr><td><strong>year</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>(Необязательно) Год рождения.</td></tr></tbody></table>

### Тип

[Birthday](/type/Birthday/)

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
