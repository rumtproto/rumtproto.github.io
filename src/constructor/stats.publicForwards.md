---
title: "stats.publicForwards (конструктор)"
original: "https://core.telegram.org/constructor/stats.publicForwards"
section: ref
kind: constructor
layout: layout.njk
---

# stats.publicForwards

*Конструктор из схемы TL.*

> Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels.

## Определение TL

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results |
| forwards | [Vector](https://core.telegram.org/type/Vector%20t)<[PublicForward](/type/PublicForward/)> | Info about the forwards of a story. |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset used for [pagination](https://core.telegram.org/api/offsets). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[stats.PublicForwards](/type/stats.PublicForwards/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
