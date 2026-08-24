---
title: "inputStorePaymentPremiumGiftCode"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumGiftCode"
section: ref
kind: constructor
description: "Используется, чтобы подарить подписки Telegram Premium только определённым подписчикам канала или супергруппы либо некоторым из наших контактов; подробнее о розыгрышах и подарках…"
layout: layout.njk
---

# inputStorePaymentPremiumGiftCode

Используется, чтобы подарить подписки [Telegram Premium](/api/premium/) только определённым подписчикам канала или супергруппы либо некоторым из наших контактов; подробнее о розыгрышах и подарках см. [здесь »](/api/giveaways/).

```
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Пользователи, которые получат подписки <a href="/api/premium">Telegram Premium</a>.</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, подарки будут отправлены от имени канала или супергруппы, администраторами которых мы являемся, и ей также будет начислено некоторое количество <a href="/api/boost">бустов</a>. Иначе подарок будет отправлен напрямую от текущего авторизованного пользователя, а мы получим несколько дополнительных <a href="/api/boost">слотов буста</a>. Подробнее о розыгрышах и подарках см. <a href="/api/giveaways">здесь »</a>.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Сообщение, приложенное к подарку</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
