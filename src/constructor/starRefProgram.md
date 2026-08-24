---
title: "starRefProgram"
original: "https://core.telegram.org/constructor/starRefProgram"
section: ref
kind: constructor
description: "Информация о партнёрской программе, предлагаемой ботом"
layout: layout.njk
---

# starRefProgram

Информация о [партнёрской программе, предлагаемой ботом](/api/bots/referrals/)

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота, предлагающего программу</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:Mini App] Партнёр получает комиссию в размере <a href="/constructor/starRefProgram">starRefProgram</a>.<code>commission_permille</code>‰ <a href="/api/stars">Telegram Stars</a> за каждую транзакцию в mini app, совершённую привлечёнными им пользователями</td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Партнёр получает комиссию за каждую транзакцию в mini app, совершённую привлечёнными им пользователями, в течение <code>duration_months</code> месяцев после импорта партнёрской ссылки и первого запуска бота</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Момент времени (Unix timestamp), когда партнёрская программа будет закрыта (необязательное; если не задано, закрытие партнёрской программы не запланировано)</td></tr><tr><td><strong>daily_revenue_per_user</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/StarsAmount">StarsAmount</a></td><td>Величина дневного дохода на одного пользователя в Telegram Stars у бота, создавшего партнёрскую программу.<br>Чтобы получить приблизительный доход с одного приведённого пользователя, умножьте это значение на <code>commission_permille</code> и разделите на <code>1000</code>.</td></tr></tbody></table>

### Тип

[StarRefProgram](/type/StarRefProgram/)

### Связанные страницы

#### [starRefProgram](/constructor/starRefProgram/)

Информация о [партнёрской программе, предлагаемой ботом](/api/bots/referrals/)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Партнёрские программы](/api/bots/referrals/)

Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
