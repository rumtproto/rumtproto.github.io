---
title: "labeledPrice"
original: "https://core.telegram.org/constructor/labeledPrice"
section: ref
kind: constructor
description: "Этот объект описывает часть стоимости товаров или услуг."
layout: layout.njk
---

# labeledPrice

Этот объект описывает часть стоимости товаров или услуг.

```
labeledPrice#cb296bf8 label:string amount:long = LabeledPrice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>label</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись доли</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена товара в наименьших единицах валюты (целое число, не число с плавающей точкой). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число цифр после десятичной запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Тип

[LabeledPrice](/type/LabeledPrice/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
