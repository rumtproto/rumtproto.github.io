---
title: "channels.checkSearchPostsFlood"
original: "https://core.telegram.org/method/channels.checkSearchPostsFlood"
section: ref
kind: method
description: "Проверить, требует ли оплаты указанный глобальный поиск по публикациям »."
layout: layout.njk
---

# channels.checkSearchPostsFlood

Проверить, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab).

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
---functions---
channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Запрос.</td></tr></tbody></table>

### Результат

[SearchPostsFlood](/type/SearchPostsFlood/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
