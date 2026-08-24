---
title: "premium.boostsStatus"
original: "https://core.telegram.org/constructor/premium.boostsStatus"
section: ref
kind: constructor
description: "Содержит информацию о текущем состоянии бустов пира."
layout: layout.njk
---

# premium.boostsStatus

Содержит информацию о текущем [состоянии бустов](/api/boost/) пира.

```
premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>my_boost</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Бустим ли мы сейчас этот канал или супергруппу; в этом случае будет установлено и поле <code>my_boost_slots</code>.</td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Текущий уровень бустов канала или супергруппы.</td></tr><tr><td><strong>current_level_boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество бустов, набранных к настоящему моменту на текущем уровне.</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число бустов, полученных к текущему моменту.</td></tr><tr><td><strong>gift_boosts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Количество бустов, полученных за счёт созданных подарочных кодов Telegram Premium (<a href="/api/giveaways">gift codes</a>) и <a href="/api/giveaways">розыгрышей</a>; возвращается только администраторам канала или супергруппы.</td></tr><tr><td><strong>next_level_boosts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Общее число бустов, необходимое для достижения следующего уровня; если отсутствует, следующий уровень недоступен.</td></tr><tr><td><strong>premium_audience</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/StatsPercentValue">StatsPercentValue</a></td><td>Возвращается только администраторам канала или супергруппы: содержит приблизительное число подписчиков канала или супергруппы с Premium по отношению к общему числу подписчиков.</td></tr><tr><td><strong>boost_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#boost-links">Глубокая ссылка для буста »</a>, с помощью которой можно забустить чат.</td></tr><tr><td><strong>prepaid_giveaways</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PrepaidGiveaway">PrepaidGiveaway</a>&gt;</td><td>Список предоплаченных <a href="/api/giveaways">розыгрышей</a>, доступных для чата; возвращается только администраторам канала или супергруппы.</td></tr><tr><td><strong>my_boost_slots</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Указывает, какой из наших <a href="/api/boost">слотов буста</a> мы назначили этому пиру (заполняется, если установлен <code>my_boost</code>).</td></tr></tbody></table>

### Тип

[premium.BoostsStatus](/type/premium.BoostsStatus/)

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
