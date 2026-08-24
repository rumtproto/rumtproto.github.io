---
title: "premiumGiftCodeOption"
original: "https://core.telegram.org/constructor/premiumGiftCodeOption"
section: ref
kind: constructor
description: "Содержит информацию о варианте розыгрыша или подарка."
layout: layout.njk
---

# premiumGiftCodeOption

Содержит информацию о варианте [розыгрыша или подарка](/api/giveaways/).

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пользователей, которые смогут активировать подарочные коды.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность каждой подаренной подписки <a href="/api/premium">Telegram Premium</a>, в месяцах.</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Идентификатор товара в магазине, связанного с этим вариантом, только для официальных приложений.</td></tr><tr><td><strong>store_quantity</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Сколько раз необходимо оплатить товар магазина</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
