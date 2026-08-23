---
title: "searchPostsFlood (конструктор)"
original: "https://core.telegram.org/constructor/searchPostsFlood"
section: ref
kind: constructor
layout: layout.njk
---

# searchPostsFlood

*Конструктор из схемы TL.*

> Indicates if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment.

## Определение TL

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_is_free | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | The specified query is free (and it will not use up free search slots). |
| total_daily | [int](/type/int/) | Total number of daily free search slots. |
| remains | [int](/type/int/) | Remaining number of free search slots. |
| wait_till | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If there are no more search slots, specifies the unixtime when more search slots will be available. |
| stars_amount | [long](/type/long/) | The number of [Telegram Stars](https://core.telegram.org/api/stars) to pay for each non-free search. |

## Тип

[SearchPostsFlood](/type/SearchPostsFlood/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
