---
title: "payments.getConnectedStarRefBots"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBots"
section: ref
kind: method
description: "Получить все партнёрства, созданные нами для определённого пира"
layout: layout.njk
---

# payments.getConnectedStarRefBots

Получить все партнёрства, созданные нами для определённого пира

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир-партнёр</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Если установлено, возвращает только результаты старше указанного unixtime</td></tr><tr><td><strong>offset_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Смещение для <a href="/api/offsets">постраничной выборки</a>, берётся из последнего возвращённого <a href="/constructor/connectedBotStarRef">connectedBotStarRef</a>.<code>url</code> (изначально пустое)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [connectedBotStarRef](/constructor/connectedBotStarRef/)

[@term:Mini App] Информация об [активной партнёрской программе, в которой мы участвуем с одним из Mini App](/api/bots/referrals/#becoming-an-affiliate)
