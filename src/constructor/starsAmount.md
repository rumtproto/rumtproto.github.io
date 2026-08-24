---
title: "starsAmount"
original: "https://core.telegram.org/constructor/starsAmount"
section: ref
kind: constructor
description: "Описывает вещественную (то есть возможно дробную) сумму в Telegram Stars."
layout: layout.njk
---

# starsAmount

Описывает вещественную (то есть возможно дробную) сумму в [Telegram Stars](/api/stars/).

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Целое количество Telegram Stars.</td></tr><tr><td><strong>nanos</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дробное количество Telegram Stars, выраженное в наностарах (то есть 1 наностар равен <code>1/1_000_000_000</code> (одной миллиардной) части Telegram Star).<br>Значение этого поля может быть и отрицательным (допустимый диапазон — от <code>-999_999_999</code> до <code>999_999_999</code>).</td></tr></tbody></table>

### Тип

[StarsAmount](/type/StarsAmount/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
