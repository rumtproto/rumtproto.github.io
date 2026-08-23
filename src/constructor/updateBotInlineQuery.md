---
title: "updateBotInlineQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBotInlineQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotInlineQuery

*Конструктор из схемы TL.*

> An incoming inline query

## Определение TL

```
updateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Query ID |
| user_id | [long](/type/long/) | User that sent the query |
| query | [string](/type/string/) | Text of query |
| geo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[GeoPoint](/type/GeoPoint/) | Attached geolocation |
| peer_type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InlineQueryPeerType](/type/InlineQueryPeerType/) | Type of the chat from which the inline query was sent. |
| offset | [string](/type/string/) | Offset to navigate through results |

## Тип

[Update](/type/Update/)
