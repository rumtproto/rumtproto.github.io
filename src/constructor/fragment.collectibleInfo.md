---
title: "fragment.collectibleInfo"
original: "https://core.telegram.org/constructor/fragment.collectibleInfo"
section: ref
kind: constructor
description: "Информация о коллекционном объекте fragment."
layout: layout.njk
---

# fragment.collectibleInfo

Информация о [коллекционном объекте fragment](/api/fragment/).

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purchase_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата покупки (unixtime)</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217 для <code>amount</code></td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название криптовалюты.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена в наименьших единицах криптовалюты.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес <a href="https://fragment.com">Fragment</a> с дополнительной информацией о коллекционном объекте</td></tr></tbody></table>

### Тип

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Коллекционные объекты Fragment](/api/fragment/)

Пользователи Telegram могут упростить связь с собой и поиск своих публичных групп и каналов с помощью имён пользователей: клиенты также могут назначать несколько коллекционных имён пользователей с Fragment » принадлежащим им аккаунтам, супергруппам и каналам; кроме того, Fragment » позволяет покупать коллекционные номера телефонов, на которые можно регистрировать аккаунты Telegram.
