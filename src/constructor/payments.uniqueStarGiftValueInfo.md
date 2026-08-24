---
title: "payments.uniqueStarGiftValueInfo"
original: "https://core.telegram.org/constructor/payments.uniqueStarGiftValueInfo"
section: ref
kind: constructor
description: "Информация о стоимости коллекционного подарка »."
layout: layout.njk
---

# payments.uniqueStarGiftValueInfo

Информация о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>last_sale_on_fragment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, последняя продажа была совершена на Fragment.</td></tr><tr><td><strong>value_is_average</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Если установлено, значение <code>value</code> вычисляется как средняя стоимость проданных подарков того же типа. Иначе оно основано на цене продажи подарка.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217 (локализованная фиатная валюта, используемая для представления цен и их оценок в этом конструкторе).</td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Ориентировочная стоимость подарка в наименьших единицах валюты, указанной в поле <code>currency</code>.</td></tr><tr><td><strong>initial_sale_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата первоначальной покупки подарка.</td></tr><tr><td><strong>initial_sale_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена первоначальной покупки в Stars.</td></tr><tr><td><strong>initial_sale_price</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена первоначальной покупки в наименьших единицах валюты, указанной в поле <code>currency</code> (пересчитывается автоматически из <code>initial_sale_stars</code>).</td></tr><tr><td><strong>last_sale_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Дата последней перепродажи подарка.</td></tr><tr><td><strong>last_sale_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Цена последней перепродажи в наименьших единицах валюты, указанной в <code>currency</code>.</td></tr><tr><td><strong>floor_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Текущая минимальная цена коллекционных подарков того же типа, в наименьших единицах валюты, указанной в <code>currency</code>.</td></tr><tr><td><strong>average_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/long">long</a></td><td>Текущая средняя цена продажи коллекционных подарков того же типа, в наименьших единицах валюты, указанной в <code>currency</code>.</td></tr><tr><td><strong>listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Количество подарков того же типа, которые сейчас перепродаются в Telegram.</td></tr><tr><td><strong>fragment_listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Количество подарков того же типа, которые сейчас перепродаются на Fragment.</td></tr><tr><td><strong>fragment_listed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>Ссылка на страницу Fragment со списком подарков того же типа, выставленных сейчас на перепродажу на Fragment.</td></tr></tbody></table>

### Тип

[payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
