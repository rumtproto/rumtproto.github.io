---
title: "payments.getSuggestedStarRefBots"
original: "https://core.telegram.org/method/payments.getSuggestedStarRefBots"
section: ref
kind: method
description: "Получить список рекомендуемых mini apps с доступными партнёрскими программами"
layout: layout.njk
---

# payments.getSuggestedStarRefBots

Получить список рекомендуемых [mini apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/)

`order_by_revenue` и `order_by_date` взаимоисключающие: если не задан ни один из них, результаты сортируются по прибыльности.

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;
---functions---
payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>order_by_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, сортирует результаты по ожидаемому доходу</td></tr><tr><td><strong>order_by_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, сортирует результаты по дате создания партнёрской программы</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, который станет партнёром: комиссии в Stars будут переводиться на баланс Stars этого пира.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для постраничной выборки, берётся из <a href="/constructor/payments.suggestedStarRefBots">payments.suggestedStarRefBots</a>.<code>next_offset</code>; изначально пустое.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/)

Список предлагаемых [Mini Apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/)

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
