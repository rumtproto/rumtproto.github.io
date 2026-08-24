---
title: "inputStorePaymentStarsGiveaway"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGiveaway"
section: ref
kind: constructor
description: "Используется для оплаты розыгрыша звёзд; подробнее см. здесь »."
layout: layout.njk
---

# inputStorePaymentStarsGiveaway

Используется для оплаты [розыгрыша звёзд; подробнее см. здесь »](/api/giveaways/#star-giveaways).

```
inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, участвовать в розыгрыше смогут только новые подписчики, подписавшиеся не ранее даты создания розыгрыша.</td></tr><tr><td><strong>winners_are_visible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, победители розыгрыша публичны и будут перечислены в сообщении <a href="/constructor/messageMediaGiveawayResults">messageMediaGiveawayResults</a>, которое будет автоматически отправлено в канал по завершении розыгрыша.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Общее число разыгрываемых Telegram Stars (каждый пользователь получит <code>stars/users</code> stars).</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Канал или супергруппа, запускающая розыгрыш, к которой пользователь должен присоединиться для участия и которая получит <a href="/api/boost">бусты</a> розыгрыша; подробнее о розыгрышах см. <a href="/api/giveaways">здесь »</a>.</td></tr><tr><td><strong>additional_peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Здесь можно указать дополнительные каналы, на которые пользователь должен подписаться для участия в розыгрыше.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Круг пользователей, которые могут участвовать в розыгрыше, можно ограничить, передав здесь явный белый список не более чем из <a href="/api/config#giveaway-countries-max">giveaway_countries_max</a> стран, заданных двухбуквенными кодами стран по ISO 3166-1 alpha-2.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Может содержать текстовое описание дополнительных призов розыгрыша.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор, позволяющий избежать повторной отправки розыгрыша. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата окончания розыгрыша; должна отстоять от текущего момента не более чем на <a href="/api/config#giveaway-period-max">giveaway_period_max</a> секунд; подробнее о розыгрышах см. <a href="/api/giveaways">здесь »</a>.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество победителей.</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Связанные страницы

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

[Розыгрыш](/api/giveaways/) с публичными победителями завершился; этот конструктор содержит сведения о победителях.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
