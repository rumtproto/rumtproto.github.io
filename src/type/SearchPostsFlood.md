---
title: "SearchPostsFlood (тип)"
original: "https://core.telegram.org/type/SearchPostsFlood"
section: ref
kind: type
layout: layout.njk
---

# SearchPostsFlood

*Тип из схемы TL.*

> Indicates if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment.

## Определение TL

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;

---functions---

channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [searchPostsFlood](/constructor/searchPostsFlood/) | Indicates if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment. |

## Методы

| Method | Описание |
|---|---|
| [channels.checkSearchPostsFlood](/method/channels.checkSearchPostsFlood/) | Check if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment. |

## Related pages

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
