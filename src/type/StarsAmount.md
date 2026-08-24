---
title: "StarsAmount"
original: "https://core.telegram.org/type/StarsAmount"
section: ref
kind: type
description: "Описывает вещественную (то есть возможно дробную) сумму в Telegram Stars."
layout: layout.njk
---

# StarsAmount

Описывает вещественную (то есть возможно дробную) сумму в [Telegram Stars](/api/stars/).

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
starsTonAmount#74aee3e0 amount:long = StarsAmount;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starsAmount">starsAmount</a></td><td>Описывает вещественную (то есть возможно дробную) сумму в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><a href="/constructor/starsTonAmount">starsTonAmount</a></td><td>Описывает сумму в Gram, выраженную в нанограммах (то есть в <code>1/1_000_000_000</code> доли Gram).</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
