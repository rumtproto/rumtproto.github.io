---
title: "inputStorePaymentStarsGift"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGift"
section: ref
kind: constructor
description: "Используется, чтобы подарить другу Telegram Stars."
layout: layout.njk
---

# inputStorePaymentStarsGift

Используется, чтобы подарить другу [Telegram Stars](/api/stars/).

```
inputStorePaymentStarsGift#1d741ef7 user_id:InputUser stars:long currency:string amount:long = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, которому нужно подарить звёзды.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество звёзд для подарка</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
