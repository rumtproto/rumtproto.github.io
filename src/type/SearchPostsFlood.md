---
title: "SearchPostsFlood"
original: "https://core.telegram.org/type/SearchPostsFlood"
section: ref
kind: type
description: "Указывает, требует ли оплаты указанный глобальный поиск по публикациям »."
layout: layout.njk
---

# SearchPostsFlood

Указывает, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab).

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;

---functions---

channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/searchPostsFlood">searchPostsFlood</a></td><td>Указывает, требует ли оплаты указанный <a href="/api/search#posts-tab">глобальный поиск по публикациям »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.checkSearchPostsFlood">channels.checkSearchPostsFlood</a></td><td>Проверить, требует ли оплаты указанный <a href="/api/search#posts-tab">глобальный поиск по публикациям »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
