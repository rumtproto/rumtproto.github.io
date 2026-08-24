---
title: "inputStorePaymentGiftPremium"
original: "https://core.telegram.org/constructor/inputStorePaymentGiftPremium"
section: ref
kind: constructor
description: "Информация о покупке Telegram Premium в подарок"
layout: layout.njk
---

# inputStorePaymentGiftPremium

Информация о покупке Telegram Premium в подарок

```
inputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, которому была подарена подписка Telegram Premium</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена товара в наименьших единицах валюты (целое число, не число с плавающей точкой). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число цифр после десятичной запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
