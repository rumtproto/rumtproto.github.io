---
title: "starsGiveawayOption"
original: "https://core.telegram.org/constructor/starsGiveawayOption"
section: ref
kind: constructor
description: "Содержит информацию о варианте розыгрыша Telegram Stars."
layout: layout.njk
---

# starsGiveawayOption

Содержит информацию о варианте [розыгрыша Telegram Stars](/api/giveaways/#star-giveaways).

```
starsGiveawayOption#94ce852a flags:# extended:flags.0?true default:flags.1?true stars:long yearly_boosts:int store_product:flags.2?string currency:string amount:long winners:Vector<StarsGiveawayWinnersOption> = StarsGiveawayOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>extended</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, этот вариант должен показываться только в полном списке вариантов розыгрыша (то есть его следует добавлять в список только после нажатия пользователем кнопки раскрытия).</td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, этот вариант должен быть заранее выбран по умолчанию в списке вариантов.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество Telegram Stars, которое будет распределено между победителями</td></tr><tr><td><strong>yearly_boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество бустов, которые чат получит на один год, если заполнен флаг <a href="/constructor/inputStorePaymentStarsGiveaway">inputStorePaymentStarsGiveaway</a>.<code>boost_peer</code></td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Идентификатор товара в магазине, связанного с этим вариантом, только для официальных приложений.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>winners</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarsGiveawayWinnersOption">StarsGiveawayWinnersOption</a>&gt;</td><td>Допустимые варианты числа победителей розыгрыша.</td></tr></tbody></table>

### Тип

[StarsGiveawayOption](/type/StarsGiveawayOption/)

### Связанные страницы

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Используется для оплаты [розыгрыша звёзд; подробнее см. здесь »](/api/giveaways/#star-giveaways).

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
