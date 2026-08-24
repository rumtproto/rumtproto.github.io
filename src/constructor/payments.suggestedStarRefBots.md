---
title: "payments.suggestedStarRefBots"
original: "https://core.telegram.org/constructor/payments.suggestedStarRefBots"
section: ref
kind: constructor
description: "Список предлагаемых Mini Apps с доступными партнёрскими программами"
layout: layout.njk
---

# payments.suggestedStarRefBots

Список предлагаемых [Mini Apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/)

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов (для постраничной выборки)</td></tr><tr><td><strong>suggested_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarRefProgram">StarRefProgram</a>&gt;</td><td>Рекомендуемые партнёрские программы (полный или частичный список, получаемый постраничной выборкой)</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пиры, упомянутые в <code>suggested_bots</code></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Следующее смещение для <a href="/api/offsets">постраничной выборки</a></td></tr></tbody></table>

### Тип

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
