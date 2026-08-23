---
title: "channels.checkSearchPostsFlood (метод)"
original: "https://core.telegram.org/method/channels.checkSearchPostsFlood"
section: ref
kind: method
layout: layout.njk
---

# channels.checkSearchPostsFlood

*Метод из схемы TL.*

> Check if the specified [global post search »](https://core.telegram.org/api/search#posts-tab) requires payment.

## Определение TL

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
---functions---
channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | The query. |

## Результат

[SearchPostsFlood](/type/SearchPostsFlood/)

## Only users can use this method

## Related pages

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
