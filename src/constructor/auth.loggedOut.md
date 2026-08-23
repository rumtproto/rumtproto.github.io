---
title: "auth.loggedOut (конструктор)"
original: "https://core.telegram.org/constructor/auth.loggedOut"
section: ref
kind: constructor
layout: layout.njk
---

# auth.loggedOut

*Конструктор из схемы TL.*

> [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations

## Определение TL

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| future_auth_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations |

## Тип

[auth.LoggedOut](/type/auth.LoggedOut/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
