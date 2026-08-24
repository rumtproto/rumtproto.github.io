---
title: "account.finishTakeoutSession"
original: "https://core.telegram.org/method/account.finishTakeoutSession"
section: ref
kind: method
description: "Завершить сессию выгрузки данных, подробнее см. здесь »."
layout: layout.njk
---

# account.finishTakeoutSession

Завершить [сессию выгрузки данных, подробнее см. здесь »](/api/takeout/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.finishTakeoutSession#1d2652ee flags:# success:flags.0?true = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Данные успешно выгружены</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>Сначала необходимо инициализировать сессию <a href="/api/takeout">выгрузки данных</a>, <a href="/api/takeout">подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Takeout API](/api/takeout/)

API Telegram позволяет пользователям экспортировать все свои данные через API выгрузки данных.
