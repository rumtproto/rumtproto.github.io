---
title: "bots.updateStarRefProgram"
original: "https://core.telegram.org/method/bots.updateStarRefProgram"
section: ref
kind: method
description: "Создать, изменить или удалить партнёрскую программу принадлежащего нам бота"
layout: layout.njk
---

# bots.updateStarRefProgram

Создать, изменить или удалить [партнёрскую программу](/api/bots/referrals/) принадлежащего нам бота

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;
---functions---
bots.updateStarRefProgram#778b5ab3 flags:# bot:InputUser commission_permille:int duration_months:flags.0?int = StarRefProgram;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Размер комиссии в промилле: указывает долю Telegram Stars, получаемую партнёрами с каждой транзакции, совершённой внутри бота приведёнными ими пользователями.<br>Минимальное и максимальное значения этого параметра содержатся в параметрах клиентской конфигурации <a href="/api/config#starref-min-commission-permille">starref_min_commission_permille</a> и <a href="/api/config#starref-max-commission-permille">starref_max_commission_permille</a>.<br>Может быть равен <code>0</code>, чтобы прекратить партнёрскую программу.<br>После создания программы как срок, так и комиссию можно только повышать: чтобы понизить их, программу необходимо сначала прекратить и создать новую.</td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Указывает срок действия партнёрской программы; если не задан, срок действия не ограничен.</td></tr></tbody></table>

### Результат

[StarRefProgram](/type/StarRefProgram/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>STARREF_AWAITING_END</td><td>Предыдущая партнёрская программа была прекращена менее 24 часов назад: дальнейшие изменения можно вносить после даты, указанной в userFull.starref_program.end_date.</td></tr><tr><td>400</td><td>STARREF_PERMILLE_INVALID</td><td>Указанное значение commission_permille недействительно: минимальное и максимальное значения этого параметра содержатся в параметрах клиентской конфигурации <a href="/api/config#starref-min-commission-permille">starref_min_commission_permille</a> и <a href="/api/config#starref-max-commission-permille">starref_max_commission_permille</a>.</td></tr><tr><td>400</td><td>STARREF_PERMILLE_TOO_LOW</td><td>Указанное значение commission_permille слишком мало: минимальное и максимальное значения этого параметра содержатся в параметрах клиентской конфигурации <a href="/api/config#starref-min-commission-permille">starref_min_commission_permille</a> и <a href="/api/config#starref-max-commission-permille">starref_max_commission_permille</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
