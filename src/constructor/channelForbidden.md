---
title: "channelForbidden (конструктор)"
original: "https://core.telegram.org/constructor/channelForbidden"
section: ref
kind: constructor
layout: layout.njk
---

# channelForbidden

*Конструктор из схемы TL.*

> Indicates a channel/supergroup we can't access because we were banned, or for some other reason.

## Определение TL

```
channelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:long access_hash:long title:string until_date:flags.16?int = Chat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| broadcast | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Is this a channel |
| megagroup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Is this a supergroup |
| monoforum | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, this is a [monoforum »](https://core.telegram.org/api/monoforum). |
| id | [long](/type/long/) | Channel ID |
| access_hash | [long](/type/long/) | Access hash |
| title | [string](/type/string/) | Title |
| until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[int](/type/int/) | The ban is valid until the specified date |

## Тип

[Chat](/type/Chat/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
