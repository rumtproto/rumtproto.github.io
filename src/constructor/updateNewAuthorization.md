---
title: "updateNewAuthorization (конструктор)"
original: "https://core.telegram.org/constructor/updateNewAuthorization"
section: ref
kind: constructor
layout: layout.njk
---

# updateNewAuthorization

*Конструктор из схемы TL.*

> A new session logged into the current user's account through an unknown device.

## Определение TL

```
updateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unconfirmed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the session is [unconfirmed, see here »](https://core.telegram.org/api/auth/#confirming-login) for more info. |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Authorization date |
| device | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Name of device, for example Android |
| location | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Location, for example USA, NY (IP=1.2.3.4) |

## Тип

[Update](/type/Update/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
