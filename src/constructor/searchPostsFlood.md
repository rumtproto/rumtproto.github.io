---
title: "searchPostsFlood"
original: "https://core.telegram.org/constructor/searchPostsFlood"
section: ref
kind: constructor
description: "Указывает, требует ли оплаты указанный глобальный поиск по публикациям »."
layout: layout.njk
---

# searchPostsFlood

Указывает, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab).

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_is_free</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Указанный запрос бесплатен (и он <strong>не расходует бесплатные слоты для поиска</strong>).</td></tr><tr><td><strong>total_daily</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число бесплатных слотов для поиска в день.</td></tr><tr><td><strong>remains</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Оставшееся число бесплатных слотов для поиска.</td></tr><tr><td><strong>wait_till</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если свободных слотов для поиска больше нет, указывает unixtime, когда появятся новые слоты.</td></tr><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество <a href="/api/stars">Telegram Stars</a>, взимаемое за каждый платный поиск.</td></tr></tbody></table>

### Тип

[SearchPostsFlood](/type/SearchPostsFlood/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
